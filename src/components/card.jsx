//rcc: react class component
import React, { Component } from "react";

export default class card extends Component {
  //tên class sẽ là tên thẻ

  render() {
    // Nội dụng phương thức render sẽ là giao diện thẻ

    return (
      <div className="card text-start">
        <img className="card-img-top" src="https://picsum.photos/id/20/200/200" alt="Title" />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Body</p>
        </div>
      </div>
    );
  }
}
