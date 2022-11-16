import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("contructor");
    this.state = {
      number: 1,
      oblike: {
        like: 1,
      },
      count: 60
    };
  }

  static getDerivedStateFromProps(newProps, currentState) {
    // hàm này dùng để xử lý state trước khi render ra giao diện
    console.log("getDerivedStateFromProps");
    return null; //return null là state giữ nguyên
  }

  shouldComponentUpdate(newProps, currentState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("render");
    return (
      <div>
      <h3>Count: {this.state.count}</h3>
        <h3> number : {this.state.number}</h3>
        <h3>object Like: {this.state.oblike.like}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>

        <button
          className="btn btn-dark"
          onClick={() => {
            // this.setState({
            //   like: this.state.like + 1,
            // });

            let {oblike} = this.state;
            oblike.like = oblike.like + 1;
            this.setState({
                oblike: {...oblike}
            })
          }}
        >
          <i className="fa fa-heart text-danger"></i>
        </button>

        <ChildComponent oblike={this.state.oblike} />
      </div>
    );
  }

  timeoutFunc = null;
  componentDidMount() {
    //Can thiệp vào dữ liệu trên giao diện sau khi giao diện đã có
    //thường sử dụng để gọi api hoặc sử dụng các thư viện lên html như animation...
    //Chạy 1 lần duy nhất và đầu tiên sau khi component render
    console.log("componentDidMount");

    this.timeoutFunc = setInterval(() => {
        this.setState({
            count: this.state.count -1
        })
        console.log('123');
    },1000); //tham số thứ 2 tính = mili giây để thực thi lại arrow function
  }

  componentWillUnmount() {
    //chạy trước khi component mất khỏi giao diện (react DOM)
    if(this.timeoutFunc) {
        clearInterval(this.timeoutFunc);
    }
  }
}
