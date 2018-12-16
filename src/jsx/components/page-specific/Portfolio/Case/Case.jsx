import React, { Component } from "react";

import "./_Case.scss";

class Case extends Component {
  state = { collapsed: true };

  render() {
    return (
      <div className={`Case row ${this.props.dark ? "--dark" : "--light"}`}>
        <div className="col-12 bg">
          <div className="row">
            <div className="text-container col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-center pt-5 pb-2 p-md-4">
              <h2 className="h3">{this.props.heading}</h2>
              <p>{this.props.body}</p>
              <button
                className={`arrow-icon mt-3 ${
                  this.state.collapsed ? "" : "open"
                }`}
                type="button"
                data-toggle="collapse"
                href={`#${this.props.collapseId}`}
                role="button"
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
        <div className="container collapse" id={this.props.collapseId}>
          <div className="row">
            <section className="col-12 col-md-6 py-3 px-md-3 text-center">
              <img src={this.props.section1.imgSrc} alt="" />
              <h3 className="mt-3">{this.props.section1.heading}</h3>
              <p>{this.props.section1.body}</p>
            </section>
            <section className="col-12 col-md-6 py-3 px-md-3 text-center">
              <img src={this.props.section2.imgSrc} alt="" />
              <h3 className="mt-3">{this.props.section2.heading}</h3>
              <p>{this.props.section2.body}</p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Case;
