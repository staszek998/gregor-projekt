import React from "react";

import HeroSlider from "../components/page-specific/main/HeroSlider/HeroSlider";
import TailoredProjects from "../components/page-specific/main/TailoredProjects/TailoredProjects";

const Main = () => (
  <main className="page--main">
    <div className="container">
      <div className="row">
        <div className="col px-0">
          <HeroSlider />
        </div>
      </div>
      <TailoredProjects />
    </div>
  </main>
);

export default Main;
