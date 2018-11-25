import React from "react";

import "./_ArrowLink.scss";

const ArrowLink = ({ text = "" }) => (
  <a className="ArrowLink h4 animated-arrow" href="#">
    <span className="the-arrow -left">
      <span className="shaft" />
    </span>
    <span className="main">
      <span className="text">{text}</span>
    </span>
  </a>
);

export default ArrowLink;
