import React from "react";

import "./_ComplexEngineering.scss";
import Column from "./Column";

const data = {
  column1: {
    icon: "fas fa-archway",
    heading: "Architektura",
    body:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim et officia maiores ullam quaerat vel, magni minus illum commodi saepe eveniet totam nihil ipsam eum qui fuga dolore sunt iure!"
  },
  column2: {
    icon: "fas fa-pencil-ruler",
    heading: "Projekt",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus non delectus iste perspiciatis nemo explicabo, facilis voluptate quaerat officiis velit minus fugiat fugit. Officia, officiis ut. Eaque cupiditate aliquid nihil!"
  },
  column3: {
    icon: "fas fa-binoculars",
    heading: "Nadzór",
    body:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam fugit placeat, perspiciatis sunt veniam nam ducimus saepe porro. Debitis quas quasi repellat illum laboriosam."
  }
};

const ComplexEngineering = () => (
  <div className="ComplexEngineering row bg-white pt-5">
    <div className="col-12">
      <h1 className="display-4 text-center mb-5">Kompleksowa inżynieria</h1>

      <div className="row">
        <Column {...data.column1} />
        <Column {...data.column2} />
        <Column {...data.column3} />
      </div>
    </div>
  </div>
);

export default ComplexEngineering;
