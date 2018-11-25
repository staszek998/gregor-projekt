import React, { Component } from "react";
import "./App.scss";

import Navbar from "./jsx/components/shared/Navbar/Navbar";
import Main from "./jsx/pages/Main/Main";
import Footer from "./jsx/components/shared/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
