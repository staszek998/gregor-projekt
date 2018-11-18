import React from "react";

import HeroSlider from "../components/page-specific/main/HeroSlider/HeroSlider";
import ComplexEngineering from "../components/page-specific/main/ComplexEngineering/ComplexEngineering";

const Main = () => (
  <main className="page--main">
    <div className="container">
      <div className="row">
        <div className="col px-0">
          <HeroSlider />
        </div>
      </div>
      <ComplexEngineering />
    </div>
  </main>
);

export default Main;
