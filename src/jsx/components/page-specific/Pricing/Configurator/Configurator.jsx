import React, { Component } from "react";

import "./_Configurator.scss";

class Configurator extends Component {
  state = {
    currentPrice: () => {
      let sum = 0;
      Object.keys(this.state.services).forEach((service, index) => {
        if (this.state.services[service].selected) {
          sum += this.state.services[service].price;
        }
      });
      return sum;
    },
    services: {
      architecture: {
        selected: false,
        price: 1000
      },
      construction: {
        selected: false,
        price: 2000
      },
      electricity: {
        selected: false,
        price: 500
      },
      supervision: {
        selected: false,
        price: 1000
      },
      estimation: {
        selected: false,
        price: 300
      },
      coffee: {
        selected: true,
        price: 0
      }
    }
  };

  render() {
    return (
      <form className="Configurator row py-5 bg-dark">
        <div className="services col-12 col-md-8 px-md-5">
          <h3 className="text-center mb-5">Usługi</h3>

          <ul className="list-group">
            <li className="list-group-item h5 d-flex justify-content-between align-items-center">
              Projekt architektoniczny
              <div className="d-flex justify-content-center align-items-center">
                <span className="mr-3 h5 mb-0">od 1000 zł</span>
                <label className="switch mb-0">
                  <input
                    type="checkbox"
                    id="architecture"
                    checked={this.state.services.architecture.selected}
                    onChange={() => {
                      this.setState({
                        services: {
                          ...this.state.services,
                          architecture: {
                            ...this.state.services.architecture,
                            selected: !this.state.services.architecture.selected
                          }
                        }
                      });
                    }}
                  />
                  <span className="slider round" />
                </label>
              </div>
            </li>
            <li className="list-group-item h5 d-flex justify-content-between align-items-center">
              Projekt budowlany
              <div className="d-flex justify-content-center align-items-center">
                <span className="mr-3 h5 mb-0">od 2000 zł</span>
                <label className="switch mb-0">
                  <input
                    type="checkbox"
                    id="construction"
                    checked={this.state.services.construction.selected}
                    onChange={() => {
                      this.setState({
                        services: {
                          ...this.state.services,
                          construction: {
                            ...this.state.services.construction,
                            selected: !this.state.services.construction.selected
                          }
                        }
                      });
                    }}
                  />
                  <span className="slider round" />
                </label>
              </div>
            </li>
            <li className="list-group-item h5 d-flex justify-content-between align-items-center">
              Projekt instalacji elektrycznej
              <div className="d-flex justify-content-center align-items-center">
                <span className="mr-3 h5 mb-0">od 500 zł</span>
                <label className="switch mb-0">
                  <input
                    type="checkbox"
                    id="electricity"
                    checked={this.state.services.electricity.selected}
                    onChange={() => {
                      this.setState({
                        services: {
                          ...this.state.services,
                          electricity: {
                            ...this.state.services.electricity,
                            selected: !this.state.services.electricity.selected
                          }
                        }
                      });
                    }}
                  />
                  <span className="slider round" />
                </label>
              </div>
            </li>
            <li className="list-group-item h5 d-flex justify-content-between align-items-center">
              Nadzór budowlany
              <div className="d-flex justify-content-center align-items-center">
                <span className="mr-3 h5 mb-0">od 1000 zł</span>
                <label className="switch mb-0">
                  <input
                    type="checkbox"
                    id="supervision"
                    checked={this.state.services.supervision.selected}
                    onChange={() => {
                      this.setState({
                        services: {
                          ...this.state.services,
                          supervision: {
                            ...this.state.services.supervision,
                            selected: !this.state.services.supervision.selected
                          }
                        }
                      });
                    }}
                  />
                  <span className="slider round" />
                </label>
              </div>
            </li>
            <li className="list-group-item h5 d-flex justify-content-between align-items-center">
              Kosztorysowanie
              <div className="d-flex justify-content-center align-items-center">
                <span className="mr-3 h5 mb-0">od 300 zł</span>
                <label className="switch mb-0">
                  <input
                    type="checkbox"
                    id="estimation"
                    checked={this.state.services.estimation.selected}
                    onChange={() => {
                      this.setState({
                        services: {
                          ...this.state.services,
                          estimation: {
                            ...this.state.services.estimation,
                            selected: !this.state.services.estimation.selected
                          }
                        }
                      });
                    }}
                  />
                  <span className="slider round" />
                </label>
              </div>
            </li>
            <li className="list-group-item h5 d-flex justify-content-between align-items-center">
              Kawa z włoskiego ekspresu RANCILLO&reg;
              <div className="d-flex justify-content-center align-items-center">
                <span className="mr-3 h5 mb-0">bezcenna</span>
                <label className="switch mb-0">
                  <input
                    type="checkbox"
                    id="coffee"
                    checked={this.state.services.coffee.selected}
                    onChange={() => {
                      this.setState({
                        services: {
                          ...this.state.services,
                          coffee: {
                            ...this.state.services.coffee,
                            selected: !this.state.services.coffee.selected
                          }
                        }
                      });
                    }}
                  />
                  <span className="slider round" />
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="rough-sum col-12 col-md-4 text-center">
          <h3 className="mb-4">Cena orientacyjna</h3>
          <p className="display-1">
            {this.state.currentPrice()}
            <span className="display-4">zł</span>
          </p>
        </div>
      </form>
    );
  }
}

export default Configurator;
