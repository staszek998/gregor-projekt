import React from "react";
import PropTypes from "prop-types";

const Column = ({ icon = "", heading = "", body = "" }) => (
  <div className="Column col-12 col-lg-4 text-center mb-3">
    <i className={icon} />
    <h2 className="my-3">{heading}</h2>
    <p className="lead">{body}</p>
  </div>
);

Column.propTypes = {
  icon: PropTypes.string,
  heading: PropTypes.string,
  body: PropTypes.string
};

export default Column;
