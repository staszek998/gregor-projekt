import React, { Component } from "react";

import "./_Configurator.scss";

class Configurator extends Component {
  state = {};
  render() {
    return (
      <div className="Configurator row py-5 bg-dark">
        <div className="services col-12 col-md-8">
          <h3 className="text-center">Usługi</h3>
        </div>
        <div className="rough-sum col-12 col-md-4">
          <h3 className="text-center">Cena orientacyjna</h3>
        </div>
      </div>
    );
  }
}

export default Configurator;
