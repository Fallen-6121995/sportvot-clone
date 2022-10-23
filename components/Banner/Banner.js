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
      
      <div className={banner.banner__fadeBottom} />
    </header>
  );
}

export default Banner;
