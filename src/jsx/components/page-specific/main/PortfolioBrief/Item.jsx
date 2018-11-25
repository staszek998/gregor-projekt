import React, { Component } from "react";

// Codrops' Tilt Hover Effect
import "../../../../../vendor/tilter/css/pater.css";
import "../../../../../vendor/tilter/css/normalize.css";
import "../../../../../vendor/tilter/css/component.css";
import "../../../../../vendor/tilter/js/main.js";

class Item extends Component {
  render() {
    return (
      <div className="Item col-12 col-md-6 mb-5">
        <a href="#" className="tilter tilter--1" ref="_tilter">
          <figure className="tilter__figure">
            <img className="tilter__image" src={this.props.imgSrc} alt="" />
            <div className="tilter__deco tilter__deco--shine">
              <div />
            </div>
            <figcaption className="tilter__caption">
              <h3 className="tilter__title">{this.props.heading}</h3>
              <p className="tilter__description">{this.props.subheading}</p>
            </figcaption>
            <svg
              className="tilter__deco tilter__deco--lines"
              viewBox="0 0 500 415"
            >
              <path d="M20.5,20.5h460v375h-460V20.5z" />
            </svg>
          </figure>
        </a>
      </div>
    );
  }

  componentDidMount = () => {
    const TiltFx = window.TiltFx;
    new TiltFx(this.refs._tilter);
  };
}

export default Item;
