import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LiveStreamCarousel from "../../components/LiveStreamCarousel/LiveStreamCarousel";
import Row from "../../components/Row/Row";
import requests from "../../components/Requests/Requests";
// import VideosCss from "../styles/Videos.module.css";

function LiveTv() {
  const trending = [
    {
      total_viewers: 100,
      video_title:
        "Final Part 2|  COEP VS SHAHU COLLEGE | Intercollegiate Volleyball Men's Tournament |",
      game: "VolleyBall",
      user_name: "Pune City Zonal Sports Committee",
      user_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/d3de6355-fec5-4113-9086-debc009f4a3e.webp?imwidth=48",
      video_type: "LIVE",
      video_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/02c3b507-6269-40a7-8614-1e988acbb8ea.webp?imwidth=1920",
    },
    {
      total_viewers: 50,
      video_title: "SIT Pune VS SLS Pune",
      game: "Football",
      user_name: "SIU inter-institute Football Tournament",
      user_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/1582725596628-default.jpg?imwidth=48",
      video_type: "LIVE",
      video_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/6bad02c4-150d-42f3-93d1-50ef00f60181.webp?imwidth=1920",
    },
    {
      total_viewers: 70,
      video_title: "Mumbai Marines Vs Bombay GYM ",
      game: "Football",
      user_name: "Mumbai Marines F.C.",
      user_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/4ebc6f95-0e82-4fd9-8528-1c5f0464878a.webp?imwidth=48",
      video_type: "LIVE",
      video_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/982b2020-fbc4-4351-b66a-9576889e19cb.webp?imwidth=1920",
    },
  ];
  const events = [
    {
      game_id: 10198,
      gamename: "Free Fire MAX",
      game_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/709ee108-2fee-4120-9443-48b14473b4e8.webp?imwidth=3840",
      game_url: "yxSBXY",
      total_videos: 1063,
      title:
        "49th Kumar and Kumari Gut Jilha Ajinkyapad Chachni Kabaddi Spardha 2022",
      date: "Nov 11, 2022",
      loc: "Jalgaon , Maharashtra",
    },
    {
      game_id: 11,
      gamename: "Garena Free Fire",
      game_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/709ee108-2fee-4120-9443-48b14473b4e8.webp?imwidth=3840",
      game_url: "garenafreefire",
      total_videos: 951,
      title:
        "49th Kumar and Kumari Gut Jilha Ajinkyapad Chachni Kabaddi Spardha 2022",
      date: "Nov 11, 2022",
      loc: "Jalgaon , Maharashtra",
    },
    {
      game_id: 16172,
      gamename: "Valorant",
      game_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/709ee108-2fee-4120-9443-48b14473b4e8.webp?imwidth=3840",
      game_url: "valorant",
      total_videos: 808,
      title:
        "49th Kumar and Kumari Gut Jilha Ajinkyapad Chachni Kabaddi Spardha 2022",
      date: "Nov 11, 2022",
      loc: "Jalgaon , Maharashtra",
    },
    {
      game_id: 26908,
      gamename: "Battlegrounds India",
      game_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/709ee108-2fee-4120-9443-48b14473b4e8.webp?imwidth=3840",
      game_url: "QYFCzK",
      total_videos: 552,
      title:
        "49th Kumar and Kumari Gut Jilha Ajinkyapad Chachni Kabaddi Spardha 2022",
      date: "Nov 11, 2022",
      loc: "Jalgaon , Maharashtra",
    },
    {
      game_id: 1,
      gamename: "PUBG MOBILE",
      game_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/709ee108-2fee-4120-9443-48b14473b4e8.webp?imwidth=3840",
      game_url: "pubgmobile",
      total_videos: 307,
      title:
        "49th Kumar and Kumari Gut Jilha Ajinkyapad Chachni Kabaddi Spardha 2022",
      date: "Nov 11, 2022",
      loc: "Jalgaon , Maharashtra",
    },
    {
      game_id: 1,
      gamename: "PUBG MOBILE",
      game_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/709ee108-2fee-4120-9443-48b14473b4e8.webp?imwidth=3840",
      game_url: "pubgmobile",
      total_videos: 307,
      title:
        "49th Kumar and Kumari Gut Jilha Ajinkyapad Chachni Kabaddi Spardha 2022",
      date: "Nov 11, 2022",
      loc: "Jalgaon , Maharashtra",
    },
    {
      game_id: 1,
      gamename: "PUBG MOBILE",
      game_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/709ee108-2fee-4120-9443-48b14473b4e8.webp?imwidth=3840",
      game_url: "pubgmobile",
      total_videos: 307,
      title:
        "49th Kumar and Kumari Gut Jilha Ajinkyapad Chachni Kabaddi Spardha 2022",
      date: "Nov 11, 2022",
      loc: "Jalgaon , Maharashtra",
    },
    {
      game_id: 1,
      gamename: "PUBG MOBILE",
      game_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/709ee108-2fee-4120-9443-48b14473b4e8.webp?imwidth=3840",
      game_url: "pubgmobile",
      total_videos: 307,
      title:
        "49th Kumar and Kumari Gut Jilha Ajinkyapad Chachni Kabaddi Spardha 2022",
      date: "Nov 11, 2022",
      loc: "Jalgaon , Maharashtra",
    },
    {
      game_id: 1,
      gamename: "PUBG MOBILE",
      game_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/709ee108-2fee-4120-9443-48b14473b4e8.webp?imwidth=3840",
      game_url: "pubgmobile",
      total_videos: 307,
      title:
        "49th Kumar and Kumari Gut Jilha Ajinkyapad Chachni Kabaddi Spardha 2022",
      date: "Nov 11, 2022",
      loc: "Jalgaon , Maharashtra",
    },
    {
      game_id: 1,
      gamename: "PUBG MOBILE",
      game_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/709ee108-2fee-4120-9443-48b14473b4e8.webp?imwidth=3840",
      game_url: "pubgmobile",
      total_videos: 307,
      title:
        "49th Kumar and Kumari Gut Jilha Ajinkyapad Chachni Kabaddi Spardha 2022",
      date: "Nov 11, 2022",
      loc: "Jalgaon , Maharashtra",
    },
    {
      game_id: 1,
      gamename: "PUBG MOBILE",
      game_image:
        "https://d25s2jqw4qdf1e.cloudfront.net/709ee108-2fee-4120-9443-48b14473b4e8.webp?imwidth=3840",
      game_url: "pubgmobile",
      total_videos: 307,
      title:
        "49th Kumar and Kumari Gut Jilha Ajinkyapad Chachni Kabaddi Spardha 2022",
      date: "Nov 11, 2022",
      loc: "Jalgaon , Maharashtra",
    },
  ];
  return (
    <div>
      <div>
        <LiveStreamCarousel liveStreamData={trending} />
      </div>
      <div>
        <Row title="Event" fetchUrl={events} />
      </div>
    </div>
  );
}

export default LiveTv;
