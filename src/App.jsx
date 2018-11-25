import React, { Component } from "react";
import "./App.scss";

import Navbar from "./jsx/components/shared/Navbar/Navbar";
import Footer from "./jsx/components/shared/Footer/Footer";
// import Main from "./jsx/pages/Main/Main";
import Portfolio from "./jsx/pages/Portfolio/Portfolio";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
