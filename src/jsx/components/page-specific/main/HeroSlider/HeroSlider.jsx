import React from "react";

import "./_HeroSlider.scss";

import img1 from "../../../../../assets/images/page-specific/main/hero-slider/1.jpg";
import img2 from "../../../../../assets/images/page-specific/main/hero-slider/2.jpg";
import img3 from "../../../../../assets/images/page-specific/main/hero-slider/3.jpg";
import img4 from "../../../../../assets/images/page-specific/main/hero-slider/4.jpg";
import img5 from "../../../../../assets/images/page-specific/main/hero-slider/5.jpg";

const HeroSlider = () => (
  <div id="hero-slider" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li
        data-target="#hero-slider__indicators"
        data-slide-to="0"
        className="active"
      />
      <li data-target="#hero-slider__indicators" data-slide-to="1" />
      <li data-target="#hero-slider__indicators" data-slide-to="2" />
      <li data-target="#hero-slider__indicators" data-slide-to="3" />
      <li data-target="#hero-slider__indicators" data-slide-to="4" />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={img1} alt="Sample alt" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Slide title</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem
            obcaecati similique nam laboriosam, corrupti ducimus eaque,
            doloribus magnam in alias exercitationem sint aliquam aspernatur et
            voluptatum eligendi iusto omnis?
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={img2} alt="Sample alt" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Slide title</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem
            obcaecati similique nam laboriosam, corrupti ducimus eaque,
            doloribus magnam in alias exercitationem sint aliquam aspernatur et
            voluptatum eligendi iusto omnis?
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={img3} alt="Sample alt" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Slide title</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem
            obcaecati similique nam laboriosam, corrupti ducimus eaque,
            doloribus magnam in alias exercitationem sint aliquam aspernatur et
            voluptatum eligendi iusto omnis?
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={img4} alt="Sample alt" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Slide title</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem
            obcaecati similique nam laboriosam, corrupti ducimus eaque,
            doloribus magnam in alias exercitationem sint aliquam aspernatur et
            voluptatum eligendi iusto omnis?
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={img5} alt="Sample alt" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Slide title</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem
            obcaecati similique nam laboriosam, corrupti ducimus eaque,
            doloribus magnam in alias exercitationem sint aliquam aspernatur et
            voluptatum eligendi iusto omnis?
          </p>
        </div>
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#hero-slider"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#hero-slider"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default HeroSlider;
