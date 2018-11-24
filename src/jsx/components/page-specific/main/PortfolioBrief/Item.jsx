import React, { Component } from "react";

// Codrops' Tilt Hover Effect
import "../../../../../vendor/tilter/css/pater.css";
import "../../../../../vendor/tilter/css/normalize.css";
import "../../../../../vendor/tilter/css/component.css";
import "../../../../../vendor/tilter/js/main.js";

import testImg from "../../../../../assets/images/page-specific/main/portfolio-brief/house-1.jpg";

class Item extends Component {
  render() {
    return (
      <div className="Item col-6 col-md-4 col-lg-3">
        <a href="#" className="tilter tilter--1" ref="_tilter">
          <figure className="tilter__figure">
            <img className="tilter__image" src={testImg} alt="" />
            <div className="tilter__deco tilter__deco--shine">
              <div />
            </div>
            <figcaption className="tilter__caption">
              <h3 className="tilter__title">Tanya Bondesta</h3>
              <p className="tilter__description">Toronto</p>
            </figcaption>
            <svg
              className="tilter__deco tilter__deco--lines"
              viewBox="0 0 300 415"
            >
              <path d="M20.5,20.5h260v375h-260V20.5z" />
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
