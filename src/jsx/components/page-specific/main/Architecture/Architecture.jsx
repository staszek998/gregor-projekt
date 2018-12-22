import React from "react";

import img from "../../../../../assets/images/page-specific/main/architecture/img.jpg";
import "./_Architecture.scss";

const Architecture = () => (
  <div className="Architecture row">
    <div className="col-12 col-md-6 py-5 px-md-5 d-flex flex-column justify-content-center">
      <h2 className="text-center h1 mb-4">Piękny dom</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
        pariatur sit vero esse qui rem a dolore voluptates et, architecto
        quisquam natus cum? Odio, voluptates quo laborum expedita ut ex?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
        pariatur sit vero esse qui rem a dolore voluptates et, architecto
        quisquam natus cum? Odio, voluptates quo laborum expedita ut ex?
      </p>
    </div>
    <div className="col-12 col-md-6 p-0">
      <img src={img} alt="" />
    </div>
  </div>
);

export default Architecture;
