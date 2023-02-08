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
      </div>
      <button onClick={() => scroll(380)}>
        next
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" style="position:absolute;top:40%;right:10px;z-index:10;width:50px;height:50px;font-size:20px;padding:15px;cursor:pointer;color:#fff;background-color:rgba(105, 105, 105, 0.54);border-radius:50px"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
        </svg> */}
        </button>
      <button onClick={() => scroll(-380)}>
        pre
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" style="position:absolute;top:40%;left:10px;z-index:10;font-size:20px;padding:15px;cursor:pointer;color:#fff;width:50px;height:50px;background-color:rgba(105, 105, 105, 0.54);border-radius:50px"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
        </svg> */}
      </button>
    </>
  );
}

export default Row;
