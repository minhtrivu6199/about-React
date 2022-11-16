import React, { Component } from "react";
import style from './DemoLogin.module.css';

export default class DemoLogin extends Component {
  state = {
    //this.state là thuộc tính có sẵn của react class component, chứa các giá trị thay đổi trên giao diện
    login: false, //false chưa đăng nhập
  };

  username = "Minh Tri";

  renderLogin = () => {
    if (this.state.login) {
      return (
        <>
          <span className="nav-link">Hello {this.username}</span>
          <a
            className="nav-link active text-white"
            href="#"
            aria-current="page"
            onClick={() => {
              this.handleLogout();
            }}
          >
            Đăng Xuất
          </a>
        </>
      );
    }
    return (
      <>
        <a
          className="nav-link active text-white"
          href="#"
          aria-current="page"
          onClick={() => {
            //Goi ham
            this.handleLogin();
          }}
        >
          Đăng Nhập
        </a>

        
      </>
    );
  };

  handleLogin = async () => {
    console.log("Handle login");
    //this.setState là phương thức có sẵn của react class component
    /*
        + Thay đổi giá trị của this.state
        + Xử lý render lại giao diện với giá trị state mới
        + Hàm this.setState là 1 hàm bất đồng bộ
    */
    // Cách 1:
    // await this.setState({
    //     login: true
    // })

    // Cách 2:
    this.setState(
      {
        login: true,
      },
      () => {
        //Tham số callback function của hàm setState sẽ tự động kích hoạt sau khi state thay đổi và giao diện render lại
        console.log(this.state);
      }
    );
  };

  handleLogout = () => {
    this.setState({
      login: false,
    });
  };

  render() {
    return (
        <>
      <nav className="nav justify-content-end text-white bg-dark  ">
        {this.renderLogin()}
        {/* {this.login ? (
          <span className="nav-link">Hello {this.username}</span>
        ) : (
          <a className="nav-link active" href="#" aria-current="page">
            Đăng Nhập
          </a>
        )} */}
      </nav>

      <p className={`${style['bg-pink']} p-5 text-dark text-center`}> Hello Tri</p>
      <span style={{
        marginTop:'15px',
        backgroundColor:'black',
        fontSize:'15px',
        color:'white',
        padding: 15
      }} >sadasdasdasdasd</span>
      </>
    );
  }
}
