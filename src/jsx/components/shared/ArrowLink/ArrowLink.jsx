import React from "react";

import "./_ArrowLink.scss";

const ArrowLink = ({ text = "", href = "#", white = false }) => (
  <a
    className={`ArrowLink h4 animated-arrow ${white ? "white" : ""}`}
    href={href}
  >
    <span className="the-arrow -left">
      <span className="shaft" />
    </span>
    <span className="main">
      <span className="text">{text}</span>
    </span>
  </a>
);

export default ArrowLink;
