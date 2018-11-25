import React, { Component } from "react";

import "./_Case.scss";

class Case extends Component {
  state = { collapsed: true };

  render() {
    return (
      <div className={`Case row ${this.props.dark ? "--dark" : "--light"}`}>
        <div className="col-12">
          <div className="row">
            <div className="text-container col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-center pt-5 pb-2 p-md-4">
              <h2 className="h3">{this.props.heading}</h2>
              <p>{this.props.body}</p>
              <button
                className={`arrow-icon mt-3 ${this.state.collapsed ? "" : "open"}`}
                type="button"
                data-toggle="collapse"
                data-target={`#${this.props.collapseId}`}
                aria-expanded="false"
                aria-controls={this.props.collapseId}
                onClick={() => {
                  this.setState({
                    collapsed: !this.state.collapsed
                  });
                }}
              >
                <span className="left-bar" />
                <span className="right-bar" />
              </button>
            </div>
            <div className="image-container col-12 col-md-6 p-0">
              <img src={this.props.imgSrc} alt="" />
            </div>
          </div>
        </div>
        <div className="col-12 collapse" id={this.props.collapseId}>
          collapse
        </div>
      </div>
    );
  }
}

export default Case;
