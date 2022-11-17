import React from "react";
import downloadApp from "../../styles/downloadApp.module.css";

function DownloadApp() {
  return (
    <div>
      <div className={downloadApp.getTheAppSection}>
        <div className="py-5">
        <div className="container">
          <div className="row">
            <div className={downloadApp.getTheApp}>
              <div className="row align-items-center">
                <div className="col-md-2">
                  <h5 className="text-white text-center mb-0">Get The App</h5>
                </div>
                <div className="col-md-8">
                  <p className="text-center text-md-left text-white my-3">
                    Sportvot Is India’s Leading Platform To Support Local Indian
                    Sporting Talent. A Multi-Sports OTT Platform With In-Depth
                    Performance Analysis, Player Profiling, And Data Solutions
                    For Grassroots-Level Community Sports. Download The App Now!
                  </p>
                </div>
                <div className="col-md-2">
                  <form className="d-flex justify-content-center justify-content-md-start ms-4">
                    <button
                      className={`${downloadApp.getTheAppBtn} btn btn-outline-light text-uppercase`}
                      variant="outline-success"
                    >
                      GET THE APP
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
