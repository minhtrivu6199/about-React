import React, { Component } from "react";

export default class HandleEvent extends Component {
//   handleClickMe = (event, name) => {
//     let tag = event.target;
//     tag.innerHTML = "Clicked";
//     tag.style.color = "black";
//     alert('Hello ' + name);
//   };

  sayHello = (name) => {
    alert('Hello ' + name);
  }

  render() {
    return (
      <div className="container">
        <button
          className="btn btn-success"
          onClick={(event) => {
            //Lấy ra thẻ từ biến event: event.target sẽ là thẻ xảy ra sự kiện
            let tag = event.target;
            tag.innerHTML = "Clicked";
            tag.style.color = "red";
            // alert('Hello cybersoft!!!!')
            this.sayHello('Minh Tri!!!');
          }}
        >
          Click me!!!
        </button>
        <br />
        {/* <button className="btn btn-danger" onClick={this.handleClickMe.bind(this, 'Trí')}>
          Click me!!!
        </button> */}
      </div>
    );
  }
}
