import React from "react";

import "./_Footer.scss";

const Footer = () => (
  <footer className="Footer container pb-4">
    <div className="row text-center justify-content-center">
      <div className="col-12">
        <h2 className="h1 my-4">GREGOR PROJEKT</h2>
      </div>
      <div className="mb-3 mb-md-0 col-12 col-md-4 col-lg-3 d-flex flex-column justify-content-center">
        <i className="fas fa-envelope" />
        <a href="mailto:gregor.projekt@gmail.com">gregor.projekt@gmail.com</a>
      </div>
      <div className="mb-3 mb-md-0 col-12 col-md-4 col-lg-3 d-flex flex-column justify-content-center">
        <i className="fas fa-map-marked-alt" />
        <a href="https://goo.gl/maps/uhKZbvq5W642" className="m-0">
          Dychów 11a
        </a>
      </div>
      <div className="mb-3 mb-md-0 col-12 col-md-4 col-lg-3 d-flex flex-column justify-content-center">
        <i className="fas fa-mobile-alt" />
        <a href="tel:+48 781 975 206">48 781 975 206</a>
      </div>
    </div>
  </footer>
);

export default Footer;
