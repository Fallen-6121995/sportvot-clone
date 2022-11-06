import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Navbar/Nav";
import Banner from "../components/Banner/Banner";
import Features from "../components/Features/Features";
import styles from "../styles/Home.module.css";
import ResponsiveCarousel from "../components/Carousel/Carousel";
import TopPlayers from "../components/TopPlayers/TopPlayers";
import GetApp from "../components/GetApp/GetApp";
import HappyUsers from "../components/HappyUsers/HappyUsers";
import ContactUs from "../components/ContactUs/ContactUs";

export default function Home() {
  return (
    <div className={styles.main__container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="SportVot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Features />

      <ResponsiveCarousel />

      <TopPlayers />

      <GetApp />

      <HappyUsers />

      <ContactUs />
    </div>
  );
}
