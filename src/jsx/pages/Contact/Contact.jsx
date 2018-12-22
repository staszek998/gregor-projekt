import React from "react";
import "./_Contact.scss";
import Modal from "../../components/page-specific/Contact/Modal";
import ModalTrigger from "../../components/page-specific/Contact/ModalTrigger";
import ArrowLink from "../../components/shared/ArrowLink/ArrowLink";

const Contact = () => (
  <main className="Contact container">
    {/* Heading */}
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="display-1 mt-5 mb-4">Kontakt</h1>
      </div>
    </div>

    {/* Main content */}
    <div className="row bg-white text-center pb-md-5">
      <div className="col-12 py-5">
        <h2>Wybierz swoją ulubioną formę kontaktu</h2>
      </div>

      <div className="col-12 col-md-4">
        <ModalTrigger text="Wpadnę do biura" modalId="page--contact__modal" />
      </div>
      <div className="col-12 col-md-4">
        <ModalTrigger
          text="Porozmawiajmy przez telefon"
          modalId="page--contact__modal"
        />
      </div>
      <div className="col-12 col-md-4">
        <ModalTrigger text="Napiszę mail'a" modalId="page--contact__modal" />
      </div>
    </div>

    {/* Quick links */}
    <div className="quick-links row justify-content-around bg-dark text-center">
      <div className="col-12 col-md-4 py-5">
        <ArrowLink text="Wróć na stronę główną" href="#" white={true} />
      </div>
      <div className="col-12 col-md-4 py-5">
        <ArrowLink text="Obejrzyj nasze projekty" href="#" white={true} />
      </div>
    </div>

    <Modal />
  </main>
);

export default Contact;
