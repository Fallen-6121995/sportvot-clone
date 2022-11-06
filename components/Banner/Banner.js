import Link from "next/link";
import React, { useEffect, useState } from "react";
import banner from "../../styles/banner.module.css";
// import axios from "../Axios/axios";
// import requests from "../Requests/Requests";

function Banner() {
  // const [movie, setMovie] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const responce = await axios.get(requests.fetchNetflixOriginals);
  //     if (responce.status !== 200) {
  //       return;
  //     }
  //     let randomMovie = Math.floor(
  //       Math.random() * responce.data.results.length - 1
  //     );
  //     if (!responce) {
  //       return;
  //     }
  //     setMovie(responce.data.results[randomMovie]);
  //     return responce;
  //   }

  //   fetchData();
  // }, []);

  function truncate(string, n) {
    if (!string) {
      return;
    }
    if (string.length > n) {
      return string.substr(0, n - 1) + "....";
    } else {
      return string;
    }
  }
  return (
    <header
      className={banner.banner}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <video
        playsInline={true}
        autoPlay={true}
        loop={true}
        muted={true}
        src="https://d25s2jqw4qdf1e.cloudfront.net/6d46b3d8-24f6-49cc-b278-cc499e6cc261.m4v"
        type="video/mp4"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      ></video>
      <div className={banner.bannerTxt}>
        <div className="container-fluid px-4">
          <h1>Talent Has A New Home</h1>
          <p>
            Sportvot is a platform that provides an online channel to stream
            sports events and help discover sports talent from the grassroots of
            India.
          </p>
          <div>
            <Link href="https://play.google.com/store/apps/details?id=com.sportvot&amp;hl=en_IN&amp;gl=US">
              <a>
                <img
                  className="me-3"
                  src="https://sportvot.com/googleplay.png?imwidth=128"
                  width="110px"
                />
              </a>
            </Link>
            <span>
              <img
                src="https://d25s2jqw4qdf1e.cloudfront.net/b90b245c-331b-4748-8c67-2084053a03b9.png?imwidth=96"
                width="8%"
              />
            </span>
            <div className={`${banner.MuiBox_root_area} mui-style-wr73px`}>
              <span
                className="MuiRating-root MuiRating-sizeSmall MuiRating-readyOnly mui-style-1a2asoj"
                role="img"
                aria-label="5 Stars"
              >
                <span>
                  <span
                    className={`${banner.MuiRating_icon_gold} MuiRating-iconFilled mui-style-13m1if9`}
                  >
                    <svg
                      className={`${banner.MuiSvgIcon_root_star} MuiSvgIcon-fontSizeInherit mui-style-1cw4hi4`}
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="StarIcon"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span
                    className={`${banner.MuiRating_icon_gold} MuiRating-iconFilled mui-style-13m1if9`}
                  >
                    <svg
                      className={`${banner.MuiSvgIcon_root_star} MuiSvgIcon-fontSizeInherit mui-style-1cw4hi4`}
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="StarIcon"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span
                    className={`${banner.MuiRating_icon_gold} MuiRating-iconFilled mui-style-13m1if9`}
                  >
                    <svg
                      className={`${banner.MuiSvgIcon_root_star} MuiSvgIcon-fontSizeInherit mui-style-1cw4hi4`}
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="StarIcon"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span
                    className={`${banner.MuiRating_icon_gold} MuiRating-iconFilled mui-style-13m1if9`}
                  >
                    <svg
                      className={`${banner.MuiSvgIcon_root_star} MuiSvgIcon-fontSizeInherit mui-style-1cw4hi4`}
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="StarIcon"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span
                    className={`${banner.MuiRating_icon_gold} MuiRating-iconFilled mui-style-13m1if9`}
                  >
                    <svg
                      className={`${banner.MuiSvgIcon_root_star} MuiSvgIcon-fontSizeInherit mui-style-1cw4hi4`}
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="StarIcon"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
