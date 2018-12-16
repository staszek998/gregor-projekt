import React from "react";

import "./_Portfolio.scss";
import Case from "../../components/page-specific/Portfolio/Case/Case";

// These are the temporary images used for the testing purposes
import testImg1 from "../../../assets/images/page-specific/Portfolio/houses/house-1.jpg";
import testImg2 from "../../../assets/images/page-specific/Portfolio/houses/house-2.jpg";
import testImg3 from "../../../assets/images/page-specific/Portfolio/houses/house-3.jpg";
import testImg4 from "../../../assets/images/page-specific/Portfolio/houses/house-4.jpg";
import testImg5 from "../../../assets/images/page-specific/Portfolio/houses/house-5.jpg";
import testImg6 from "../../../assets/images/page-specific/Portfolio/houses/house-6.jpg";

// These images are placed in the 'details' section mounted below each case
import plan from "../../../assets/images/page-specific/Portfolio/test-collapse/plan.png";
import interior from "../../../assets/images/page-specific/Portfolio/test-collapse/interior.png";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda explicabo molestiae obcaecati aliquid eaque aut exercitationem ratione quae iste. Voluptates, voluptate culpa! Odio assumenda ratione culpa, numquam nesciunt quae?";

// This object contains the temporary data which will be passed into each Case's props
const testCollapseContent = {
  section1: {
    heading: "Rzut poziomy",
    body: lorem,
    imgSrc: plan
  },
  section2: {
    heading: "Wnętrze",
    body: lorem,
    imgSrc: interior
  }
};

const Portfolio = () => (
  <main className="Portfolio ">
    <div className="container">
      {/* Heading */}
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-1 mt-5 mb-4">Portfolio</h1>
        </div>
      </div>

      {/* Cases */}
      <Case
        heading="Projekt domu"
        body={lorem}
        imgSrc={testImg1}
        dark={false}
        collapseId="collapse-1"
        section1={{ ...testCollapseContent.section1 }}
        section2={{ ...testCollapseContent.section2 }}
      />
      <Case
        heading="Projekt domu"
        body={lorem}
        imgSrc={testImg2}
        dark={true}
        collapseId="collapse-2"
        section1={{ ...testCollapseContent.section1 }}
        section2={{ ...testCollapseContent.section2 }}
      />
      <Case
        heading="Projekt domu"
        body={lorem}
        imgSrc={testImg3}
        dark={false}
        collapseId="collapse-3"
        section1={{ ...testCollapseContent.section1 }}
        section2={{ ...testCollapseContent.section2 }}
      />
      <Case
        heading="Projekt domu"
        body={lorem}
        imgSrc={testImg4}
        dark={true}
        collapseId="collapse-4"
        section1={{ ...testCollapseContent.section1 }}
        section2={{ ...testCollapseContent.section2 }}
      />
      <Case
        heading="Projekt domu"
        body={lorem}
        imgSrc={testImg5}
        dark={false}
        collapseId="collapse-5"
        section1={{ ...testCollapseContent.section1 }}
        section2={{ ...testCollapseContent.section2 }}
      />
      <Case
        heading="Projekt domu"
        body={lorem}
        imgSrc={testImg6}
        dark={true}
        collapseId="collapse-6"
        section1={{ ...testCollapseContent.section1 }}
        section2={{ ...testCollapseContent.section2 }}
      />
    </div>
  </main>
);

export default Portfolio;
