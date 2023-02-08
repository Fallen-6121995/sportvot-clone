import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YtPlayer from "../../components/Yt_player/YtPlayer";
import Navbar from "../../components/SideNav/SideNav";
import styles from "../../styles/livestream.module.css";
import { Container } from "react-bootstrap";

function LivStreamSlug() {
  const videoInfo = [
    {
      title: "My video1 Title",
      date: "16 06 `21",
      watching: 3,
    },
    {
      title: "My video1 Title",
      date: "16 06 `21",
      watching: 3,
    },
    {
      title: "My video1 Title",
      date: "16 06 `21",
      watching: 3,
    },
    {
      title: "My video1 Title",
      date: "16 06 `21",
      watching: 3,
    },
    {
      title: "My video1 Title",
      date: "16 06 `21",
      watching: 3,
    },
  ];
  return (
    <div className={styles.liveStreamPageContainer}>
      <Navbar showTopItems={false} />
      <Container fluid>
        <Row>
          <Col>
            <YtPlayer embedId={"CUeTsekrpdo"} />
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default LivStreamSlug;
