import React from "react";

import "./_Case.scss";
import ArrowLink from "../../../shared/ArrowLink/ArrowLink";

const Case = ({ heading = "", body = "", imgSrc, dark = false }) => (
  <div className={`Case row ${dark ? "--dark" : "--light"}`}>
    <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-center pt-5 pb-2 p-md-4">
      <h2 className="h3">{heading}</h2>
      <p>{body}</p>
      <ArrowLink text="Zobacz więcej" white={dark ? true : false} />
    </div>
    <div className="col-12 col-md-6 p-0">
      <img src={imgSrc} alt="" />
    </div>
  </div>
);

export default Case;
