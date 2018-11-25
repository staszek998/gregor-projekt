import React from "react";

import "./_Footer.scss";
import ArrowLink from "../ArrowLink/ArrowLink";

const Footer = () => (
  <footer className="Footer container pb-4">
    <div className="row justify-content-center">
      <div className="col-12 text-center">
        <h2 className="h1 my-4">GREGOR PROJEKT</h2>
      </div>
      <div className="mb-3 mb-md-0 col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
        <i className="fas fa-envelope" />
        <ArrowLink text="gregor.projekt@gmail.com" />
      </div>
      <div className="mb-3 mb-md-0 col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
        <i className="fas fa-map-marked-alt" />
        <ArrowLink text="Dychów 11a" />
      </div>
      <div className="mb-3 mb-md-0 col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
        <i className="fas fa-mobile-alt" />
        <ArrowLink text="+48 781 975 206" />
      </div>
    </div>
  </footer>
);

export default Footer;
