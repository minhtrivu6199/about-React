import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'

export default class BaiTapGioHang extends Component {

    state = {
        gioHang: [
            {
                maSP:1,
                tenSP: "VinSmart Live",
                giaBan: 5700000,
                hinhAnh: "./img/vsphone.jpg",
                soLuong:1
            }
        ]
    }

    themGioHang = (spClick) => {
        console.log(spClick);
        //setState
        spClick = {...spClick, soLuong: 1};

        let gioHang = this.state.gioHang;
        let spGH = gioHang.find(sp=>sp.maSP === spClick.maSP);
        if (spGH) {
            spGH.soLuong = spGH.soLuong + 1;
        } else {
            gioHang.push(spClick);
        }

        this.setState({
            gioHang: gioHang
        })
    }
    
    xoaGioHang = (maSPClick) => {
        //setState
        console.log(maSPClick);
        let gioHang = this.state.gioHang;
        let index = gioHang.findIndex(sp => sp.maSP == maSPClick);
        if(index !== -1) {
            gioHang.splice(index,1);
        }

        //Cach2: 
        // gioHang = gioHang.filter(sp => sp.maSP !== maSPClick);
        // setState

        this.setState({gioHang: gioHang})
    }
  render() {
    /*
        + Chia component khi nào ?
        + Yếu tố 1: Component đó tái sử dụng nhiều lần trên nhiều nơi (page, template, project khác ...)
        + Yếu tố 2: ví dụ component có nội dung html quá dài hơn 1000 trên 1 file => chia component (là component chỉ sử dụng cho file này thôi). Không chia component quá nhỏ cho trường hợp này tối đa 3 cấp
    */
    return (
      <div className="container">
      <h3 className="text-center mt-2">Bai tap gio hang</h3>
        <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang}/>
        <DanhSachSanPham  themGioHang={this.themGioHang}/>
      </div>
    )
  }
}
