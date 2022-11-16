import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    const {phone, themGioHang} = this.props;
    return (
      <div className="card">
        <img src={phone.hinhAnh} className="w-100" height={420} style={{objectFit: 'cover'}} ></img>
        <div className="card-body">
            <p>{phone.tenSP}</p>
            <p>{phone.giaBan.toLocaleString()}</p>
            <button className="btn btn-danger" onClick={() =>{
                themGioHang(phone)
            }}>
                Them vao gio
                <i className="fa fa-cart-plus"></i>
            </button>
        </div>
      </div>
    )
  }
}
