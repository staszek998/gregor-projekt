import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

import Navbar from "./jsx/components/shared/Navbar/Navbar";
import Footer from "./jsx/components/shared/Footer/Footer";
import Main from "./jsx/pages/Main/Main";
import Portfolio from "./jsx/pages/Portfolio/Portfolio";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/portfolio" exact component={Portfolio} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
