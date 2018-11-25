import React, { Component } from "react";

import "./_Navbar.scss";

class Navbar extends Component {
  state = {
    isHamburgerActive: false
  };

  render() {
    return (
      <nav className="Navbar navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            GREGOR PROJEKT
          </a>
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
                <a className="nav-link" href="#">
                  Strona główna
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Historia
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cennik
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
