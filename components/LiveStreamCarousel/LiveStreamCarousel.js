import React from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
import liveStreamCarouselStyle from "../../styles/liveStreamCarousel.module.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

function LiveStreamCarousel({ liveStreamData }) {
  return (
    <div>
      <section className={liveStreamCarouselStyle.Sec34}>
        <Row className={liveStreamCarouselStyle.Head234}>
          <Col xs={8}>
            <div className={liveStreamCarouselStyle.flex}>
              {/* <img
                src="https://d25u15mvjkult8.cloudfront.net/Website/Assets/Images/live+(3).png"
                alt="Live Stream Gamesee"
              ></img>
              <label>
                <h1 className="hksdh4">Trending Streams</h1>
              </label> */}
            </div>
          </Col>
          <Col>
            {/* <div className="msd50">
              <Link href="/live-streaming">
                <a>
                  <div>
                    <span>More</span>
                    <i className="fas fa-chevron-right"></i>
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              </Link>
            </div> */}
          </Col>
        </Row>
        <Carousel indicators={false} className={liveStreamCarouselStyle.gh78}>
          {liveStreamData?.map((item, index) => (
            // <Link href={"/live_tv/" + item?.id}>
            <Carousel.Item key={index}>
              <Row>
                <Col lg={4}>
                  <div>
                    <span className={liveStreamCarouselStyle.gameName}>
                      {item.game}
                    </span>
                    <h4 className={liveStreamCarouselStyle.videoTitle}>
                      {item.video_title}
                    </h4>
                    <div className={liveStreamCarouselStyle.Views24}>
                      <span className={liveStreamCarouselStyle.viewsIcon}>
                        <VisibilityOutlinedIcon
                          sx={{ fontSize: 12, color: "#fff" }}
                        />
                      </span>
                      <span className={liveStreamCarouselStyle.viewsCount}>
                        {item?.total_viewers}
                      </span>
                      <div className={liveStreamCarouselStyle.user_img}>
                        <img width={50} src={item?.user_image} />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={8}>
                  <div className={liveStreamCarouselStyle.LiveStats46}>
                    <div className={liveStreamCarouselStyle.Live24}>
                      <samp className={liveStreamCarouselStyle.blink}></samp>
                      {item.video_type}
                    </div>
                  </div>
                  <Link href={"/live_tv/" + item?.id}>
                    <a>
                      <div className={liveStreamCarouselStyle.trenvid23}>
                        <img src={item.video_image} alt="terndingimage"></img>
                      </div>
                    </a>
                  </Link>
                </Col>
              </Row>
            </Carousel.Item>
            // </Link>
          ))}
        </Carousel>
      </section>
    </div>
  );
}

export default LiveStreamCarousel;
