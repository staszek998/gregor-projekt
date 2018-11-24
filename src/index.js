// Bootstrap dependencies:
// eslint-disable-next-line
import $ from "jquery";
// eslint-disable-next-line
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Hamburger menu buttons
import "hamburgers/dist/hamburgers.min.css";

// Fonts
import "../src/assets/fonts/architecture-and-construction/flaticon.css";
import "../src/assets/fonts/construction/flaticon.css";

// React dependencies:
import React from "react";
import ReactDOM from "react-dom";

// Compiled stylesheet:
import "./index.css";

// Root component:
import App from "./App";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
