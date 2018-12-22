import React from "react";

const ModalTrigger = ({ modalId, text, white }) => (
  <button
    className={`ModalTrigger ArrowLink h4 animated-arrow ${
      white ? "white" : ""
    }`}
    data-toggle="modal"
    data-target={`#${modalId}`}
  >
    <span className="the-arrow -left">
      <span className="shaft" />
    </span>
    <span className="main">
      <span className="text">{text}</span>
    </span>
  </button>
);

export default ModalTrigger;
