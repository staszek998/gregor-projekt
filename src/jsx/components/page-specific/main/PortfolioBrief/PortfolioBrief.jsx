import React from "react";

import "./_PortfolioBrief.scss";
import Item from "./Item";

const PortfolioBrief = () => (
  <div className="PortfolioBrief row justify-content-around py-5">
    <div className="col-12">
      <h2 className="h1 text-center">Zobacz, co już zbudowaliśmy</h2>
    </div>

    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </div>
);

export default PortfolioBrief;
