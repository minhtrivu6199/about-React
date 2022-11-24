import React, { Component } from 'react'
import { connect } from 'react-redux';

class DemoTangGiamFontSize extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Ví dụ: Tăng giảm font size</h3>
        <p style={{fontSize:this.props.fSize}}>Lorem ipsum dolor sit amet, consectetur</p>
        <button className="btn btn-success" onClick={() => {
          //tai nut xu ly => tao object action 
          const action = {
            type: 'TANG_GIAM_FONT_SIZE',
            payload: 1
          }
          // Gui du lieu len redux = this.props.dispatch
          this.props.dispatch(action);
        }}>+</button>
        <button className="btn btn-success mx-2" onClick={() => {
           const action = {
            type: 'TANG_GIAM_FONT_SIZE',
            payload: -1
          }
          // Gui du lieu len redux = this.props.dispatch
          this.props.dispatch(action);
        }}>-</button>
      </div>
    )
  }
}

//Định nghĩa 1 hàm lấy dữ liệu redux về
const mapStateToProps = (state) => { //rootState: state tổng của ứng dụng
    //lấy dữ liệu của redux để biến thành props của component
    return {
        fSize: state.fontSizeState,
        imgSrc: state.imgState,
    }
}

//Kết nối react vs redux => tạo ra component mới có chứa dữ liệu của redux và giao diện của component đó

const DemoFontSizeRedux = connect(mapStateToProps)(DemoTangGiamFontSize);

export default  DemoFontSizeRedux;

// function main () {
//     //primitive value, reference value (object), function
//     return function () {
//         console.log(123);
//     }
// }
