import React from "react";

const Modal = ({ header, body, footer }) => (
  <div
    className="modal fade"
    id="page--contact__modal"
    aria-labelledby="page--contact__modal__label"
    tabIndex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          {/* Header */}
          <h5 className="modal-title" id="page--contact__modal__label">
            {header}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        {/* Body */}
        {body}

        {/* Footer */}
        {footer}
      </div>
    </div>
  </div>
);

export default Modal;
