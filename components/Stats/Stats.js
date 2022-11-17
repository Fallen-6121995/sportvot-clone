import React from "react";
import stats from "../../styles/stats.module.css";

function Stats() {
  return (
    <div className={stats.countriesSection}>
      <div className="py-5">
        <div className="container">
          <div className={stats.countriesMain}>
            <div className="row">
              <div className="col">
                <div className="CountriesBox text-white text-center">
                  <h3>18K+</h3>
                  <p className="fw-bold">Games Broadcasted</p>
                </div>
              </div>
              <div className="col">
                <div className="CountriesBox text-white text-center">
                  <h3>90K+</h3>
                  <p className="fw-bold"> Athletes Profiled</p>
                </div>
              </div>
              <div className="col">
                <div className="CountriesBox text-white text-center">
                  <h3>08</h3>
                  <p className="fw-bold">Countries Covered</p>
                </div>
              </div>
              <div className="col">
                <div className="CountriesBox text-white text-center">
                  <h3>75Mn+</h3>
                  <p className="fw-bold">Views</p>
                </div>
              </div>
              <div className="col">
                <div className="CountriesBox text-white text-center">
                  <h3>2k+</h3>
                  <p className="fw-bold">Player Trials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
