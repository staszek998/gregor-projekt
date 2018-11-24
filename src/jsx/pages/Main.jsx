import React from "react";

import HeroSlider from "../components/page-specific/main/HeroSlider/HeroSlider";
import ComplexEngineering from "../components/page-specific/main/ComplexEngineering/ComplexEngineering";
import Architecture from "../components/page-specific/main/Architecture/Architecture";
import Project from "../components/page-specific/main/Project/Project";
import Supervision from "../components/page-specific/main/Supervision/Supervision";

const Main = () => (
  <main className="page--main">
    <div className="container">
      <div className="row">
        <div className="col px-0">
          <HeroSlider />
        </div>
      </div>
      <ComplexEngineering />
      <Architecture />
      <Project />
      <Supervision />
    </div>
  </main>
);

export default Main;
