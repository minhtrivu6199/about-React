import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    const {gioHang, xoaGioHang} = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã sp</th>
            <th>Tên sp</th>
            <th>Hình ảnh</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {gioHang.map((spGH, index) => {
            return (
              <tr>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td>
                  <img src={spGH.hinhAnh} width={50} height={50} />
                </td>
                <td>{spGH.soLuong}</td>
                <td>{spGH.giaBan}</td>
                <td>{spGH.soLuong * spGH.giaBan}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => {
                    xoaGioHang(spGH.maSP)
                  }}>
                    <i className="fa fa-trash" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
