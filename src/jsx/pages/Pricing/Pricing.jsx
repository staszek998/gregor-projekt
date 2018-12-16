import React from "react";

import "./_Pricing.scss";
import Configurator from "../../components/page-specific/Pricing/Configurator/Configurator";

const Pricing = () => (
  <main className="Pricing container">
    {/* Heading */}
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="display-1 mt-5 mb-4">Cennik</h1>
      </div>
    </div>

    <div className="row bg-white py-5">
      <div className="col-12 text-center">
        <h2>Konfigurator udanego projektu</h2>
      </div>
    </div>

    <Configurator />
  </main>
);

export default Pricing;
