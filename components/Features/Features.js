import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import FeatureCSS from "../../styles/feature.module.css";

function Features() {
  return (
    <div className={FeatureCSS.feature__section}>
      <h2 className={`${FeatureCSS.feature__heading} text-center`}>FEATURES</h2>
      <div className="px-4">
        <Container fluid>
          <Row className="align-items-center">
            {/* left */}
            <Col md={4}>
              <div className={FeatureCSS.Feature__row}>
                <div className={FeatureCSS.feature__icons}>
                  <img
                    src="https://d25s2jqw4qdf1e.cloudfront.net/d99a485a-3668-4591-9d85-584ae06e21c3.png?imwidth=96"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className={FeatureCSS.Feature__Content}>
                  <h2>Stream Every Game</h2>
                  <p>
                    Stream LIVE using just your smartphone or any video camera,
                    choose from a range of premium scoring graphics, add sponsor
                    cues, enable detailed scoring, stream from multiple angles,
                    and add LIVE commentary
                  </p>
                </div>
              </div>
              <div className={FeatureCSS.Feature__row}>
                <div className={FeatureCSS.feature__icons}>
                  <img
                    src="https://d25s2jqw4qdf1e.cloudfront.net/d99a485a-3668-4591-9d85-584ae06e21c3.png?imwidth=96"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className={FeatureCSS.Feature__Content}>
                  <h2>List & Manage tournaments</h2>
                  <p>
                    If you are a tournament organiser, list your tournament, get
                    the best players to participate in them and collect digital
                    payments on a single platform
                  </p>
                </div>
              </div>
              <div className={FeatureCSS.Feature__row}>
                <div className={FeatureCSS.feature__icons}>
                  <img
                    src="https://d25s2jqw4qdf1e.cloudfront.net/d99a485a-3668-4591-9d85-584ae06e21c3.png?imwidth=96"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className={FeatureCSS.Feature__Content}>
                  <h2>Create and Maintain Player Identities</h2>
                  <p>
                    Capture your in game moments and maintain your detailed
                    stats linked to your video. Create and share your profile
                    with clubs and various sports bodies
                  </p>
                </div>
              </div>
              <div className={FeatureCSS.Feature__row}>
                <div className={FeatureCSS.feature__icons}>
                  <img
                    src="https://d25s2jqw4qdf1e.cloudfront.net/d99a485a-3668-4591-9d85-584ae06e21c3.png?imwidth=96"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className={FeatureCSS.Feature__Content}>
                  <h2>Broadcast to a Global Audience</h2>
                  <p>
                    Digitise every game and reach out to a global audience via
                    SportVot and JIO Set-Top Box!
                  </p>
                </div>
              </div>
            </Col>
            {/* center */}
            <Col md={4}>
              <div className="text-center">
                <img
                  alt="benefits"
                  src="https://d25s2jqw4qdf1e.cloudfront.net/0f32dce0-8799-474b-985f-4d78b497d021.gif?imwidth=3840"
                  decoding="async"
                  data-nimg="fill"
                  sizes="100vw"
                  srcSet="https://d25s2jqw4qdf1e.cloudfront.net/0f32dce0-8799-474b-985f-4d78b497d021.gif?imwidth=640 640w, https://d25s2jqw4qdf1e.cloudfront.net/0f32dce0-8799-474b-985f-4d78b497d021.gif?imwidth=750 750w, https://d25s2jqw4qdf1e.cloudfront.net/0f32dce0-8799-474b-985f-4d78b497d021.gif?imwidth=828 828w, https://d25s2jqw4qdf1e.cloudfront.net/0f32dce0-8799-474b-985f-4d78b497d021.gif?imwidth=1080 1080w, https://d25s2jqw4qdf1e.cloudfront.net/0f32dce0-8799-474b-985f-4d78b497d021.gif?imwidth=1200 1200w, https://d25s2jqw4qdf1e.cloudfront.net/0f32dce0-8799-474b-985f-4d78b497d021.gif?imwidth=1920 1920w, https://d25s2jqw4qdf1e.cloudfront.net/0f32dce0-8799-474b-985f-4d78b497d021.gif?imwidth=2048 2048w, https://d25s2jqw4qdf1e.cloudfront.net/0f32dce0-8799-474b-985f-4d78b497d021.gif?imwidth=3840 3840w"
                />
              </div>
            </Col>

            <Col md={4}>
              <div className={FeatureCSS.Feature__row}>
                <div className={FeatureCSS.feature__icons}>
                  <img
                    src="https://d25s2jqw4qdf1e.cloudfront.net/d99a485a-3668-4591-9d85-584ae06e21c3.png?imwidth=96"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className={FeatureCSS.Feature__Content}>
                  <h2>Get Access to Better Opportunities</h2>
                  <p>
                    Apply for trials with the best clubs, register and play in
                    the best tournaments. Move ahead in your career
                  </p>
                </div>
              </div>
              <div className={FeatureCSS.Feature__row}>
                <div className={FeatureCSS.feature__icons}>
                  <img
                    src="https://d25s2jqw4qdf1e.cloudfront.net/d99a485a-3668-4591-9d85-584ae06e21c3.png?imwidth=96"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className={FeatureCSS.Feature__Content}>
                  <h2>Clip and Share every Moment</h2>
                  <p>
                    Create and share your favourite in-game moment across all
                    digital platforms in just a click!
                  </p>
                </div>
              </div>
              <div className={FeatureCSS.Feature__row}>
                <div className={FeatureCSS.feature__icons}>
                  <img
                    src="https://d25s2jqw4qdf1e.cloudfront.net/d99a485a-3668-4591-9d85-584ae06e21c3.png?imwidth=96"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className={FeatureCSS.Feature__Content}>
                  <h2>Discover Next-Gen Talent</h2>
                  <p>
                    If you are a scout or a coach looking to scout the next wave
                    of talent, you will find them all here
                  </p>
                </div>
              </div>
              <div className={FeatureCSS.Feature__row}>
                <div className={FeatureCSS.feature__icons}>
                  <img
                    src="https://d25s2jqw4qdf1e.cloudfront.net/d99a485a-3668-4591-9d85-584ae06e21c3.png?imwidth=96"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className={FeatureCSS.Feature__Content}>
                  <h2>Interactive Player Cards</h2>
                  <p>
                    Flaunt your skills and grow your following with SportVot
                    automated shareable player cards
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Features;
