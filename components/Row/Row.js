import React, { useState, useEffect, useRef } from "react";
import axios from "../Axios/axios";
import styles from "../../styles/row.module.css";
import { Container } from "react-bootstrap";
import { Calendar2Event } from "react-bootstrap-icons";
import { GeoAltFill } from "react-bootstrap-icons";

function Row({ title, fetchUrl, icon, userImg }) {
  const [videos, setVideos] = useState([]);
  const ref = useRef(null);

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

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>
   
      <div className={`${styles.video__row} custom__container`}>
        <h5 className={styles.video__rowTitle}>{title}</h5>
        <div className={styles.mainPostersRowSlider}>
        <div ref={ref} className={styles.mainPosters__row}>
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
                    {userImg == true ? (
                      <>
                        <div>
                          <img width={100} src={video?.user_img} />
                        </div>
                        <div>
                          <p>{video?.title}</p>

                          {icon == true ? (
                            <p>
                              <span className={styles.subheadingIcon}>
                                <Calendar2Event />
                              </span>
                              {video?.date}
                            </p>
                          ) : (
                            <p> {video?.date}</p>
                          )}

                          <p>
                            <span className={styles.subheadingIcon}>
                              <GeoAltFill />
                            </span>
                            {video?.loc}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <p>{video?.title}</p>

                          {icon == true ? (
                            <p>
                              <span className={styles.subheadingIcon}>
                                <Calendar2Event />
                              </span>
                              {video?.date}
                            </p>
                          ) : (
                            <p> {video?.date}</p>
                          )}

                          <p>
                            <span className={styles.subheadingIcon}>
                              <GeoAltFill />
                            </span>
                            {video?.loc}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className={styles.PostersSliderLeftBtn}>
      <button onClick={() => scroll(380)}>
        next
        </button>
        </div>
        <div className={styles.PostersSliderRightBtn}>
      <button onClick={() => scroll(-380)}>
      prev
      </button>
      </div>
        </div>
      </div>
      

      
      
    </>
  );
}

export default Row;
