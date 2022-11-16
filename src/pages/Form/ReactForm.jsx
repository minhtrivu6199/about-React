import React, { Component } from "react";
import TableProduct from "./TableProduct";
import axios from "axios";

export default class ReactForm extends Component {
  state = {
    formValue: {
      id: "",
      name: "",
      price: "",
      image: "",
      description: "",
      productType: "phone",
    },

    formError: {
      id: "",
      name: "",
      price: "",
      image: "",
      description: "",
    },
    valid: false,
    arrProduct: [
      {
        id: "1",
        name: "iphone",
        image: "https://i.pravatar.cc?u=1",
        price: 1000,
        productType: "phone",
        description: "the phone",
      },
    ],
  };

  handleUpdateProduct = () => {
    //Tìm ra sản phẩm chứa mã tương đương formValue.id
    let {arrProduct, formValue} = this.state;
    let prodUpdate = arrProduct.find(pro => pro.id === formValue.id);

    if(prodUpdate) {
      for(let key in prodUpdate) {
        if (key !== 'id') {
          prodUpdate[key] = formValue[key];
        }
      }
    }
    //cập nhật lại state sau khi chỉnh sửa
    this.setState({
      arrProduct: arrProduct
    })
  };

  handleEditProduct = (prodClick) => {
    //click vào product nào thì state của formValue sẽ thay đổi giá trị thành product đó
    this.setState(
      {
        formValue: prodClick,
      },
      () => {
        this.setState({
          valid: this.checkFormValid(),
        });
      }
    );
  };

  checkFormValid = () => {
    //return true | false: true khi hop le, false khi form ko hop le
    /*
      form hop le khi: cac truong formError = rong, va cac truong value tuong ung phai khac rong
    */
    let { formError, formValue } = this.state;
    for (let key in formError) {
      if (formError[key] !== "" || formValue[key] === "") {
        return false;
      }
    }
    return true;
  };

  handleSubmit = (e) => {
    // Ngăn sự kiện reload browser
    e.preventDefault();
    if (!this.checkFormValid()) {
      alert("Form is invalid");
      return; // Nếu form ko hợp lệ => ko submit
    }
    //them san pham vao arrProduct => cap nhat state arrProduct
    let arrProduct = this.state.arrProduct;
    let newArrProduct = { ...this.state.formValue };
    arrProduct.push(newArrProduct);
    this.setState({
      arrProduct: arrProduct,
    });
    // console.log("submit", this.state.formValue);
  };

  handleDelProduct = (idClick) => {
    let arrProduct = this.state.arrProduct.filter(
      (prod) => prod.id !== idClick
    );

    this.setState({
      arrProduct: arrProduct,
    });
  };

  handleChangeInput = (e) => {
    /*
      Trên 1 thể html sẽ có 2 dạng thuộc tính properties: là các thuộc tính có sẵn của thẻ như id, className, name, value, style...
      attribute (thuộc tính mở rộng) : Do mình thêm vào -> ko thể dùng dom.thuocTinh => do.getAttribute('tenAttribute')
    */
    let { value, name } = e.target;
    let dataType = e.target.getAttribute("data-type");
    let dataMaxLength = e.target.getAttribute("data-max-length");

    //lấy object form value ra xử lý riêng
    let newFormValue = this.state.formValue;

    //dynamic key
    newFormValue[name] = value;

    // Xu ly formError
    let newFormError = this.state.formError;
    let message = "";
    if (value.trim() === "") {
      message = name + " cannot be blank !";
    } else {
      if (dataType == "number") {
        let regexNumber = /^\d+(,\d{1,2})?$/;
        if (!regexNumber.test(value)) {
          message = name + " is invalid";
        }
      }

      if (dataMaxLength != null && value.length > dataMaxLength) {
        message = name + ` khong vuot qua ${dataMaxLength} ky tu !`;
      }
    }
    newFormError[name] = message;

    //setState
    this.setState(
      {
        formValue: newFormValue,
        formError: newFormError,
      },
      () => {
        // console.log(this.state)
        //Gọi hàm check lỗi sau mỗi lần cập nhật value và error từ ng dùng nhập
        this.setState({
          valid: this.checkFormValid(),
        });
      }
    );
    console.log(name, value);
  };

  render() {
    let { formValue } = this.state;
    return (
      <>
        <form className="container" onSubmit={this.handleSubmit}>
          <h3>Create product</h3>
          <div className="card">
            <div className="card-header">Product info</div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>Id</p>
                    <input
                      className="form-control"
                      name="id"
                      onInput={this.handleChangeInput}
                      data-max-length="6"
                      value={formValue.id}
                    ></input>
                    {this.state.formError.id && (
                      <div className="alert alert-danger mt-2">
                        {this.state.formError.id}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <p>Name</p>
                    <input
                      className="form-control"
                      name="name"
                      onInput={this.handleChangeInput}
                      value={formValue.name}
                    ></input>
                    {this.state.formError.name && (
                      <div className="alert alert-danger mt-2">
                        {this.state.formError.name}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <p>Price</p>
                    <input
                      data-type="number"
                      className="form-control"
                      name="price"
                      onInput={this.handleChangeInput}
                      value={formValue.price}
                    ></input>
                    {this.state.formError.price && (
                      <div className="alert alert-danger mt-2">
                        {this.state.formError.price}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Image</p>
                    <input
                      className="form-control"
                      name="image"
                      onInput={this.handleChangeInput}
                      value={formValue.image}
                    ></input>
                    {this.state.formError.image && (
                      <div className="alert alert-danger mt-2">
                        {this.state.formError.image}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <p>Product</p>
                    <select
                      className="form-control"
                      name="productType"
                      onInput={this.handleChangeInput}
                      value={formValue.productType}
                    >
                      <option value="phone">Phone</option>
                      <option value="tablet">Tablet</option>
                      <option value="laptop">Laptop</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <p>Description</p>
                    <input
                      className="form-control"
                      name="description"
                      onInput={this.handleChangeInput}
                      value={formValue.description}
                    />
                    {this.state.formError.description && (
                      <div className="alert alert-danger mt-2">
                        {this.state.formError.description}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                type="submit"
                className="btn btn-success m-2"
                disabled={!this.state.valid}
              >
                Create
              </button>
              <button
                type="button"
                className="btn btn-primary m-2"
                disabled={!this.state.valid}
                onClick={() => {
                  this.handleUpdateProduct();
                }}
              >
                Update
              </button>
            </div>
          </div>
        </form>
        <div className="container mt-2">
          <TableProduct
            handleEditProduct={this.handleEditProduct}
            arrProduct={this.state.arrProduct}
            handleDelProduct={this.handleDelProduct}
          />
        </div>
      </>
    );
  }

  componentDidMount() {
    //gọi api sau khi render thực thi xong (tại sao gọi ở didmount vì didmount chỉ chạy 1 lần duy nhất sau khi render)

    let promise = axios({
      url: 'https://svcy.myclass.vn/api/Product/GetAll',
      method: 'GET'
    });

    promise.then(result => {
      //renderTableSinhVien(); => thay đổi state
      this.setState({
        arrProduct: result.data
      })
    })
  }
}
