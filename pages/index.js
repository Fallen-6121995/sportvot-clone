import Head from 'next/head'
import Image from 'next/image'
import Nav from "../components/Navbar/Nav"
import Banner from "../components/Banner/Banner"
import Features from '../components/Features/Features'
import styles from '../styles/Home.module.css'

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
    </div>
  )
}