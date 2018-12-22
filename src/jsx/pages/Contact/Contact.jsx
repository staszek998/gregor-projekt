import React, { Component } from "react";
import "./_Contact.scss";
import Modal from "../../components/page-specific/Contact/Modal";
import ModalTrigger from "../../components/page-specific/Contact/ModalTrigger";
import ArrowLink from "../../components/shared/ArrowLink/ArrowLink";

class Contact extends Component {
  state = {
    modalContent: {
      header: "",
      bodyL: "",
      footer: ""
    }
  };

  onClick = text => {
    switch (text) {
      case "Wpadnę do biura":
        this.setState({
          modalContent: {
            header: `Wpadnę do biura`,
            body: (
              <div className="modal-body">
                <p className="lead">
                  Czekamy na Ciebie w Dychowie, od poniedziałku do soboty w
                  godzinach 07:00-17:00
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.2914133676895!2d15.058306316158458!3d51.98334197971621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470631e415dda2e1%3A0xc89affec8aca207e!2sGREGOR+PROJEKT!5e0!3m2!1sen!2spl!4v1545463418170"
                  width="100%"
                  height="500px"
                  frameBorder="0"
                  style={{ border: "none" }}
                  allowFullScreen
                  title="Google Maps"
                />
              </div>
            ),
            footer: (
              <div className="modal-footer d-flex justify-content-between align-items-center">
                <button className="btn btn-secondary" data-dismiss="modal">
                  Zamknij okno
                </button>
                <a
                  href="https://goo.gl/maps/H6F5r5eaMQk"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Otwórz mapę w nowym oknie
                </a>
              </div>
            )
          }
        });
        break;

      case "Porozmawiajmy przez telefon":
        this.setState({
          modalContent: {
            header: `Porozmawiajmy przez telefon`
          }
        });
        break;

      case `Napiszę mail'a`:
        this.setState({
          modalContent: {
            header: `Napiszę mail'a`
          }
        });
        break;

      default:
        break;
    }
  };

  render() {
    return (
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
            <ModalTrigger
              text="Wpadnę do biura"
              modalId="page--contact__modal"
              onClick={this.onClick}
            />
          </div>
          <div className="col-12 col-md-4">
            <ModalTrigger
              text="Porozmawiajmy przez telefon"
              modalId="page--contact__modal"
              onClick={this.onClick}
            />
          </div>
          <div className="col-12 col-md-4">
            <ModalTrigger
              text="Napiszę mail'a"
              modalId="page--contact__modal"
              onClick={this.onClick}
            />
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

        <Modal
          header={this.state.modalContent.header}
          body={this.state.modalContent.body}
          footer={this.state.modalContent.footer}
        />
      </main>
    );
  }
}

export default Contact;
