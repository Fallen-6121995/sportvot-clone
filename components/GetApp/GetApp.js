import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import getAppStyles from "../../styles/getApp.module.css";

function GetApp() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className={getAppStyles.appContainer}>
              <h2>Download The App</h2>
              <p>
                Stream LIVE Sports, Get Instant Highlights, And Key Moments From
                Every Match, Choose Your Favourite Moments And Create Shareable
                Player Cards To Flaunt Your Skills To The World!
              </p>
            </div>
          </Col>
          <Col>
            <img
              className={getAppStyles.getApp__img}
              src="https://d25s2jqw4qdf1e.cloudfront.net/1deb6428-6387-433e-8f7e-422a2021c30d.png?imwidth=3840"
              alt="download-app"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GetApp;
