import React from "react";
import topPlayerStyle from "../../styles/topPlayers.module.css";

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white">
        <div className="container-fluid">
          <div className="footerRow px-4 py-2 d-flex align-items-center justify-content-between">
            <h3 className="mb-0">
              <div className="socialRow d-flex align-items-center">
                <a className="me-2" href="#">
                  <img
                    src="https://d25s2jqw4qdf1e.cloudfront.net/7eb0aec7-6f97-499a-bdda-293d8562634c.png?imwidth=3840"
                    alt="insta"
                  />
                </a>
                <a className="me-2" href="#">
                  <img
                    src="https://d25s2jqw4qdf1e.cloudfront.net/7eb0aec7-6f97-499a-bdda-293d8562634c.png?imwidth=3840"
                    alt="insta"
                  />
                </a>
                <a className="me-2" href="#">
                  <img
                    src="https://d25s2jqw4qdf1e.cloudfront.net/7eb0aec7-6f97-499a-bdda-293d8562634c.png?imwidth=3840"
                    alt="insta"
                  />
                </a>
              </div>
            </h3>
            <div className="copyRight">
              <p className="mb-0">
                © Copyright Dravstream Technologies Pvt. Ltd. All Rights
                Reserved
              </p>
            </div>
            <div className="footerPolicy">
              <a className="me-2 text-white text-decoration-none" href="#">
                Privacy Policy |
              </a>
              <a className="me-2 text-white text-decoration-none" href="#">
                Refund Policy |
              </a>
              <a className="text-white text-decoration-none" href="#">
                {" "}
                Terms Of Use |
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
