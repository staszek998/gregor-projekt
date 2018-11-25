import React from "react";

import ArrowLink from "../../../shared/ArrowLink/ArrowLink";
import "./_Shortcuts.scss";

const Shortcuts = () => (
  <div className="Shortcuts row py-5 text-center">
    <div className="col-12">
      <h2 className="h1 mb-5">Na skróty</h2>
    </div>
    <div className="col-6 col-md-4">
      <ArrowLink text="Poznaj nas bliżej" white={true} />
    </div>
    <div className="col-6 col-md-4">
      <ArrowLink text="Napisz do nas" white={true} />
    </div>
    <div className="col-12 col-md-4">
      <ArrowLink text="Sprawdź ceny" white={true} />
    </div>
  </div>
);

export default Shortcuts;
