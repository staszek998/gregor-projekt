import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./_Navbar.scss";

class Navbar extends Component {
  state = {
    isHamburgerActive: false
  };

  render() {
    return (
      <nav className="Navbar navbar navbar-expand-lg">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            GREGOR PROJEKT
          </NavLink>
          <button
            className={`navbar-toggler hamburger hamburger--minus ${
              this.state.isHamburgerActive ? "is-active" : ""
            }`}
            type="button"
            data-toggle="collapse"
            data-target="#navbar-links"
            aria-controls="navbar-links"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              this.setState({
                isHamburgerActive: !this.state.isHamburgerActive
              });
            }}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbar-links">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link" href="#">
                  Strona główna
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className="nav-link" href="#">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/historia" className="nav-link" href="#">
                  Historia
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cennik" className="nav-link" href="#">
                  Cennik
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/kontakt" className="nav-link" href="#">
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
