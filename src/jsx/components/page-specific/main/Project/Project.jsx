import React from "react";

import img from "../../../../../assets/images/page-specific/main/project/img.jpg";
import "./_Project.scss";

const Project = () => (
  <div className="Project row">
    <div className="col-12 col-md-6 py-5 px-md-5 d-flex flex-column justify-content-center order-md-2">
      <h2 className="text-center h1">Projekt</h2>
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
    <div className="col-12 col-md-6 px-0 pt-0 pb-5 p-md-0 order-md-1">
      <img src={img} alt="" />
    </div>
  </div>
);

export default Project;
