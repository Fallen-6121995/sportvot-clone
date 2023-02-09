import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import YtPlayer from "../../components/Yt_player/YtPlayer";
import Navbar from "../../components/SideNav/SideNav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import styles from "../../styles/livestream.module.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";

function LivStreamSlug({ data }) {
  const [vidData, setvidData] = useState([]);
  console.log(data);
  const videoInfo = [
    {
      id: 1,
      title: "My video1 Title",
      date: "16 06 `21",
      watching: 3,
      video_url: "CUeTsekrpdo",
    },
    {
      id: 2,
      title: "My video2 Title",
      date: "16 06 `21",
      watching: 3,
      video_url: "CUeTsekrpdo",
    },
    {
      id: 3,
      title: "My video3 Title",
      date: "16 06 `21",
      watching: 3,
    },
    {
      id: 4,
      title: "My video4 Title",
      date: "16 06 `21",
      watching: 3,
      video_url: "CUeTsekrpdo",
    },
  ];

  var abc = videoInfo.find((item) => item?.id === 1);
  // setvidData(abc);
  return (
    <>
      <Navbar showTopItems={false} />
      <div>
        <Container fluid>
          <Row className="mt-3">
            <Col>
              <YtPlayer embedId={abc?.video_url} />
            </Col>

            <Col>
              <div className={styles.chat_container}>
                <div className="tab234">
                  <Tabs
                    defaultActiveKey="comments"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="comments" title="comments">
                      <div className={styles.chat_input_box}>
                        <input
                          className={styles.chat_input}
                          type="text"
                          placeholder="Add Commnet..."
                        />
                        <Button>
                          <FontAwesomeIcon icon={faPaperPlane} />
                        </Button>
                      </div>
                    </Tab>

                    <Tab eventKey="Lineups" title="Lineups"></Tab>

                    <Tab eventKey="Highlights" title="Highlights"></Tab>

                    <Tab eventKey="Scorecard" title="Scorecard"></Tab>
                  </Tabs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LivStreamSlug;
export async function getServerSideProps({ query }) {
  console.log(query?.slug);
  const data = await query?.slug;
  return {
    props: { data },
  };
}
