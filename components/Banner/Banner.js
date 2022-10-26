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
      backgroundSize: "cover",backgroundPosition: "center center"}}
    >
      
      <video playsInline={true} autoPlay={true} loop={true} muted={true} src="https://d25s2jqw4qdf1e.cloudfront.net/6d46b3d8-24f6-49cc-b278-cc499e6cc261.m4v" type="video/mp4" style={{width:"100%",  height: "100%" , objectFit:"cover"}}></video>
      <div className={banner.bannerTxt}>
        <div className="container-fluid px-4">
        <h1>Talent Has A New Home</h1>
        <p>Sportvot is a platform that provides an online channel to stream sports events and help discover sports talent from the grassroots of India.</p>
        <div>
          <Link href="https://play.google.com/store/apps/details?id=com.sportvot&amp;hl=en_IN&amp;gl=US">
            <a>
            <img src="https://sportvot.com/googleplay.png?imwidth=128" width="8%"/>
            </a>
          </Link>
        </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
