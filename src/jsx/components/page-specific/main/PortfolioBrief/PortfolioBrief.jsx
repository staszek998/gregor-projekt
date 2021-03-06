import React from "react";

import "./_PortfolioBrief.scss";
import Tilter from "../../../shared/Tilter";
import ArrowLink from "../../../shared/ArrowLink/ArrowLink";

import img1 from "../../../../../assets/images/page-specific/main/portfolio-brief/house-1.jpg";
import img2 from "../../../../../assets/images/page-specific/main/portfolio-brief/house-2.jpg";
import img3 from "../../../../../assets/images/page-specific/main/portfolio-brief/house-3.jpg";
import img4 from "../../../../../assets/images/page-specific/main/portfolio-brief/house-4.jpg";

const PortfolioBrief = () => (
  <div className="PortfolioBrief row justify-content-around py-5 px-2">
    <div className="col-12">
      <h2 className="h1 text-center my-5">Zobacz, co już zbudowaliśmy</h2>
    </div>

    <Tilter
      imgSrc={img1}
      heading="House"
      subheading="Lorem ipsum dolor sit amet"
    />
    <Tilter
      imgSrc={img2}
      heading="House"
      subheading="Lorem ipsum dolor sit amet"
    />
    <Tilter
      imgSrc={img3}
      heading="House"
      subheading="Lorem ipsum dolor sit amet"
    />
    <Tilter
      imgSrc={img4}
      heading="House"
      subheading="Lorem ipsum dolor sit amet"
    />

    <div className="col-12 text-center">
      <ArrowLink text="Zobacz więcej realizacji" />
    </div>
  </div>
);

export default PortfolioBrief;
