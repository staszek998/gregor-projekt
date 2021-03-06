import React from "react";

const modalContent = {
  office: {
    header: `Wpadnę do biura`,
    body: (
      <div className="modal-body">
        <p className="lead text-center mb-4">
          Czekamy na Ciebie w Dychowie, od poniedziałku do soboty w godzinach
          07:00-17:00
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
  },
  phone: {
    header: `Porozmawiajmy przez telefon`,
    body: (
      <div className="modal-body">
        <p className="lead text-center">
          Czekamy na Twój telefon pod numerem
          <br />
          +48 781 975 206
        </p>
        <div className="row d-md-none justify-content-center">
          <a href="tel:+48781975206" className="btn btn-primary">
            Wykręć numer
          </a>
        </div>
      </div>
    ),
    footer: (
      <div className="modal-footer d-flex justify-content-start align-items-center">
        <button className="btn btn-secondary" data-dismiss="modal">
          Zamknij okno
        </button>
      </div>
    )
  },
  mail: {
    header: `Napiszę mail'a`,
    body: (
      <div className="modal-body modal-body--mail">
        <p className="lead text-center">
          Proponujemy dwie formy kontaktu mail'owego:
        </p>
        <div className="row justify-content-around">
          <div className="col-5 my-4 d-flex flex-column justify-content-start align-items-center">
            <button
              className="d-flex flex-column justify-content-between align-items-center text-center"
              data-toggle="collapse"
              data-target="#page--contact__modal--mail__collapse"
              aria-expanded="false"
              aria-controls="page--contact__modal--mail__collapse"
            >
              <i className="fas fa-file-signature mb-3" />
              <span>Otwórz formularz</span>
            </button>
          </div>
          <div className="col-5 my-4 d-flex flex-column justify-content-start align-items-center">
            <a
              href="mailto:gregorprojekt@gmail.com"
              className="d-flex flex-column justify-content-between align-items-center text-center"
            >
              <i className="fas fa-envelope-open-text mb-3" />
              <span>Napisz wiadomość samodzielnie</span>
            </a>
          </div>
        </div>
        <div className="collapse" id="page--contact__modal--mail__collapse">
          <div className="row">
            <form
              className="col-12 form"
              onSubmit={event => {
                event.preventDefault();
              }}
            >
              <div className="row">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="Imię *"
                    className="form-control mb-3"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Nazwisko *"
                    className="form-control mb-3"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Twój adres e-mail *"
                    className="form-control mb-3"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Twój nr telefonu"
                    className="form-control mb-3"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control mb-3"
                    name="message"
                    id="message"
                    rows="10"
                    placeholder="Treść Twojej wiadomości *"
                  />
                </div>
                <div className="col-12 text-center">
                  <input
                    type="submit"
                    value="Wyślij"
                    className="form-control btn btn-success mb-3"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    ),
    footer: (
      <div className="modal-footer d-flex justify-content-start align-items-center">
        <button className="btn btn-secondary" data-dismiss="modal">
          Zamknij okno
        </button>
      </div>
    )
  }
};

export default modalContent;
