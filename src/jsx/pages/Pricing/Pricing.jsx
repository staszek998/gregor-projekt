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

    <div className="row bg-white py-5 justify-content-center">
      <div className="col-12 col-md-10">
        <p className="lead text-center">
          Pamiętaj, że są to jedynie oscylacyjne ceny. Oznacza to, że faktyczny
          koszt zlecenia będzie inny. Staramy się jednak, aby podane wyżej ceny
          były przynajmniej uśrednione i dawały jak najlepszy pogląd na realne
          koszty zlecenia.
        </p>
        <p className="lead text-center">
          Zachęcamy do bezpośredniego kontaktu z nami, celem przeprowadzenia
          indywidualnej kalkulacji. W ten sposób będziemy mogli przygotować dla
          Państwa jednostkowy mini-kosztorys, zupełnie <b>za darmo :)</b>
        </p>
      </div>
    </div>
  </main>
);

export default Pricing;
