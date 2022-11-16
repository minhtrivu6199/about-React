import React, { Component } from "react";

export default class TableProduct extends Component {
  render() {
    const { arrProduct, handleEditProduct } = this.props;
    return (
      <div>
        <table className="table">
          <thead className="bg-dark text-white">
            <tr>
              <th>id</th>
              <th>name</th>
              <th>image</th>
              <th>price</th>
              <th>productType</th>
              <th>description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {arrProduct.map(
              ({ id, name, price, image, productType, description }, index) => {
                return (
                  <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>
                      <img src={image} width={50} height={50} />
                    </td>
                    <td>{price}</td>
                    <td>{productType}</td>
                    <td>{description}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.props.handleDelProduct(id);
                        }}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                      <button
                        className="btn btn-primary mx-2"
                        onClick={() => {
                          let prodEdit = {
                            id,
                            name,
                            price,
                            image,
                            productType,
                            description,
                          };
                          handleEditProduct(prodEdit);
                        }}
                      >
                        <i className="fa fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
