import React from "react";
import topPlayerStyle from "../../styles/topPlayers.module.css";

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white">
      <div className={topPlayerStyle.footerInner}>
        <div className="container-fluid">
          <div className="row footerRow px-4 py-2 d-flex align-items-center justify-content-between">
            <div className="col-md-3">
              <div className="socialRow d-flex align-items-center  justify-content-center justify-content-md-start my-1">
              <div className={topPlayerStyle.footSocialIcon}>
                <a className="me-4" href="#">
                  <img
                    src="https://d25s2jqw4qdf1e.cloudfront.net/7eb0aec7-6f97-499a-bdda-293d8562634c.png?imwidth=3840"
                    alt="insta"
                  />
                </a>
                </div>
                <div className={topPlayerStyle.footSocialIcon}>
                <a className="me-4" href="#">
                  <img
                    src="https://d25s2jqw4qdf1e.cloudfront.net/fb0ab824-0d0d-43bc-9acc-4c65666cadfa.png?imwidth=3840"
                  />
                </a>
                </div>
                <div className={topPlayerStyle.footSocialIcon}>
                <a className="me-4" href="#">
                  <img
                    src="https://d25s2jqw4qdf1e.cloudfront.net/dc16899e-0a1a-4b22-8878-0f9b255d95b3.png?imwidth=3840"
                    alt="insta"
                  />
                </a>
                </div>
                <div className={topPlayerStyle.footSocialIcon}>
                <a className="me-4" href="#">
                  <img
                    src="https://d25s2jqw4qdf1e.cloudfront.net/92f523c8-4943-4d0e-a8a7-b1e542e77aa5.png?imwidth=3840"
                    alt="insta"
                  />
                </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 copyRight text-center">
              <p className="my-1">
                © Copyright Dravstream Technologies Pvt. Ltd. All Rights
                Reserved
              </p>
            </div>
            <div className="col-md-3 footerPolicy text-center text-md-left">
              <div className="my-1">
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
        </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
