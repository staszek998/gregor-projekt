import React, { Component } from "react";

import "./_Case.scss";

const uuidv4 = require("uuid/v4");

class Case extends Component {
  state = { collapsed: true };
  render() {
    const id = uuidv4();

    return (
      <div className={`Case row ${this.props.dark ? "--dark" : "--light"}`}>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-center pt-5 pb-2 p-md-4">
          <h2 className="h3">{this.props.heading}</h2>
          <p>{this.props.body}</p>
        </div>
        <div className="col-12 col-md-6 p-0">
          <img src={this.props.imgSrc} alt="" />
        </div>
        <div className="collapse" id={id}>
          <div className="col-12">collapse</div>
        </div>
      </div>
    );
  }
}

export default Case;
