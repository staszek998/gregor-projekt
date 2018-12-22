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
    header: `Napiszę mail'a`
  }
};

export default modalContent;
