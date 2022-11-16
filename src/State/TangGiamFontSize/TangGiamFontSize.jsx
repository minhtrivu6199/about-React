import React, { Component } from "react";

export default class TangGiamFontSize extends Component {
  state = {
    fSize: 16, //Xac định state là number => gán giá trị mặc định
    classMode: "light",
    imgSrc: 'https://i.pravatar.cc?u=1'
  };

  render() {
    return (
      <>
        <div className="container">
          <h3>Bài tập tăng giảm fontSize</h3>
          <p style={{ fontSize: this.state.fSize }}>
            Lorem ipsum dolor sit amet, consectetur adip
          </p>
          <button
            className="btn btn-success mx-2"
            onClick={() => {
              this.setState({
                fSize: this.state.fSize + 1,
              });
            }}
          >
            +
          </button>
          <button
            className="btn btn-success mx-2"
            onClick={() => {
              this.setState({
                fSize: this.state.fSize - 1,
              });
            }}
          >
            -
          </button>

          <hr />
          <h3>Bài tập change theme</h3>
          <select
            className="w-25 form-control"
            onChange={(e) => {
              const tagTarget = e.target;
              this.setState({
                classMode: tagTarget.value,
              });
            }}
          >
            <option value={"light"}>Light mode</option>
            <option value={"dark"}>Dark mode</option>
          </select>
          <div
            className={`border border-success p-5 mt-2 ${this.state.classMode}`}
          >
            <p>Lorem ipsum dolor sit amet lorem, consectetur adipiscing elit</p>
          </div>

          <hr />
          <div className="w-25 card">
            <img src={this.state.imgSrc} alt="..." />
            <div className="card-body text-center">
              <button className="btn btn-danger" onClick={() => {
                let randomNumber = Math.floor(Math.random() * 100);
                this.setState({
                  imgSrc: `https://i.pravatar.cc?u=${randomNumber}`
                })
              }}>Random</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
