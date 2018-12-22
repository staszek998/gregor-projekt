import React from "react";
import $ from "jquery";

const ModalTrigger = ({ modalId, text, white, onClick }) => (
  <button
    className={`ModalTrigger ArrowLink h4 animated-arrow ${
      white ? "white" : ""
    }`}
    data-toggle="modal"
    data-target={`#${modalId}`}
    onClick={() => {
      // Change the active part which defines the modal contents
      onClick(text);
    }}
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
