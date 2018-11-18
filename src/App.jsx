import React, { Component } from "react";
import "./App.scss";

import Navbar from "./jsx/components/shared/Navbar/Navbar";
import Main from "./jsx/pages/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col">
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
