import React from "react";

import "./_Main.scss";

import HeroSlider from "../../components/page-specific/main/HeroSlider/HeroSlider";
import ComplexEngineering from "../../components/page-specific/main/ComplexEngineering/ComplexEngineering";
import Architecture from "../../components/page-specific/main/Architecture/Architecture";
import Project from "../../components/page-specific/main/Project/Project";
import Supervision from "../../components/page-specific/main/Supervision/Supervision";
import PortfolioBrief from "../../components/page-specific/main/PortfolioBrief/PortfolioBrief";
import Shortcuts from "../../components/page-specific/main/Shortcuts/Shortcuts";

const Main = () => (
  <main className="Main">
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
      <PortfolioBrief />
      <Shortcuts />
    </div>
  </main>
);

export default Main;
