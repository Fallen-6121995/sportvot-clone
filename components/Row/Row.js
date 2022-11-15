import React, { useState, useEffect } from "react";
import axios from "../Axios/axios";
import styles from "../../styles/row.module.css";
import { Container } from "react-bootstrap";

function Row({ title, fetchUrl }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // async function fetchData() {
    //   const responce = await axios.get(fetchUrl);
    //   if (responce.status !== 200) {
    //     return;
    //   }
    //   console.log(responce);
    // }

    // fetchData();
    setVideos(fetchUrl);
  }, [fetchUrl]);
  return (
    <div className={`${styles.video__row} custom__container`}>
      <h2>{title}</h2>

      <div className={styles.mainPosters__row}>
        {videos?.map((video) => (
          <>
            <div className={styles.content__contaier}>
              <div className={styles.card__container}>
                <div className={styles.img__container}>
                  <span className={styles.img__span}>
                    <img
                      className={`${styles.row__posterLarge}`}
                      key={video?.game_id}
                      src={`${video?.game_image}`}
                      alt={video?.gamename}
                    />
                  </span>
                </div>

                <div className={styles.video__info}>
                  <p>{video?.title}</p>
                  <p>{video?.date}</p>
                  <p>{video?.loc}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Row;
