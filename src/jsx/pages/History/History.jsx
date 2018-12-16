import React from "react";
import "./_History.scss";

import Tilter from "../../components/shared/Tilter";

import img1 from "../../../assets/images/page-specific/History/4.jpg";
import img2 from "../../../assets/images/page-specific/History/3.jpg";
import img3 from "../../../assets/images/page-specific/History/5.jpg";
import profilePhoto1 from "../../../assets/images/page-specific/History/profile-photo-1.jpg";
import profilePhoto2 from "../../../assets/images/page-specific/History/profile-photo-2.jpg";
import imgHouse1 from "../../../assets/images/page-specific/History/house-4.jpg";
import imgHouse2 from "../../../assets/images/page-specific/History/house-6.jpg";
import ArrowLink from "../../components/shared/ArrowLink/ArrowLink";

const History = () => (
  <main className="History container">
    {/* Heading */}
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="display-1 mt-5 mb-4">Historia</h1>
      </div>
    </div>

    <section className="History__1 row bg-white justify-content-center">
      <div className="col-12 col-md-10 py-5 text-center">
        <h2>Projektujemy z pasji</h2>

        <p className="lead mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum odit a
          officia, sapiente architecto pariatur molestiae inventore tenetur quo
          natus praesentium non modi iste nostrum odio esse debitis commodi
          magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          modi corporis velit quas explicabo, incidunt, nobis nihil, architecto
          repellendus amet mollitia voluptate expedita beatae repellat tempora
          unde corrupti quaerat sapiente! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi, similique. Consequatur voluptatem illo quo
          pariatur commodi nam. Ipsam, praesentium sed esse iure quisquam
          quibusdam quis autem atque obcaecati expedita sint.
        </p>

        <div className="row justify-content-center">
          <div className="col-10 col-md-8 bg-dark p-5 my-5">
            <p className="lead font-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              voluptate quia odit quis eveniet a id, illum laboriosam reiciendis
              est quos itaque, omnis illo voluptates culpa ipsa fugit in
              molestiae.
            </p>

            <p className="small text-right m-0">~ Paulo Coelho</p>
          </div>
        </div>
      </div>
    </section>

    <section className="History__2 row">
      <div className="col-12 p-0">
        <img src={img1} alt="" />
      </div>
    </section>

    <section className="History__3 row bg-white justify-content-center">
      <div className="col-12 col-md-10 text-center py-5">
        <h2>Projektujemy dla Ciebie</h2>

        <p className="lead mt-5 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          omnis voluptate voluptatem, cupiditate velit odit autem repellat quam
          consectetur asperiores dolorem nobis consequatur voluptatibus vero hic
          fugiat fuga sequi vitae.
        </p>

        <div className="row justify-content-around">
          <div className="testimonial col-12 col-md-6 col-lg-5">
            <img
              src={profilePhoto1}
              alt=""
              className="testimonial__image my-3"
            />
            <p className="font-italic testimonial__body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              velit ab labore est accusamus magnam mollitia praesentium a
              aliquid aspernatur voluptates assumenda odit, qui autem deleniti
              aut voluptatem vero non.
            </p>
            <p className="h6 testimonial__name">~ Sam Smith</p>
          </div>
          <div className="testimonial col-12 col-md-6 col-lg-5">
            <img
              src={profilePhoto2}
              alt=""
              className="testimonial__image my-3"
            />
            <p className="font-italic testimonial__body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              velit ab labore est accusamus magnam mollitia praesentium a
              aliquid aspernatur voluptates assumenda odit, qui autem deleniti
              aut voluptatem vero non.
            </p>
            <p className="h6 testimonial__name">~ Jolene Collins</p>
          </div>
        </div>
      </div>
    </section>

    <section className="History__4 row">
      <div className="col-12 p-0">
        <img src={img2} alt="" />
      </div>
    </section>

    <section className="History__5 row bg-white justify-content-center">
      <div className="col-12 col-md-10 text-center py-5">
        <h2>Nie boimy się wyzwań</h2>

        <p className="lead mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum
          est officiis cum, facilis rerum commodi architecto? Laboriosam, culpa.
          Iusto consectetur velit cum obcaecati! Nobis reprehenderit sit
          nesciunt autem qui?
        </p>

        <div className="row mt-5">
          <Tilter
            imgSrc={imgHouse1}
            heading="Odetchnij od miasta"
            subheading="Lorem ipsum dolor sit amet"
          />
          <Tilter
            imgSrc={imgHouse2}
            heading="Bezpieczne schronienie"
            subheading="Lorem ipsum dolor sit amet"
          />
        </div>

        <ArrowLink text="Zobacz więcej realizacji" />

        <div className="row justify-content-center">
          <div className="col-10 col-md-8 bg-dark p-5 my-5">
            <p className="lead font-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              voluptate quia odit quis eveniet a id, illum laboriosam reiciendis
              est quos itaque, omnis illo voluptates culpa ipsa fugit in
              molestiae.
            </p>

            <p className="small text-right m-0">~ Paulo Coelho</p>
          </div>
        </div>
      </div>
    </section>

    <section className="History__6 row">
      <div className="col-12 p-0">
        <img src={img3} alt="" />
      </div>
    </section>
  </main>
);

export default History;
