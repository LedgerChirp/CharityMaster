import React from 'react'
import Contact from '../components/contact/Contact'
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import Footer from "../components/contact/Footer";
import About from "../components/About";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <About/>
      <Contact />
      <Footer/>
    </>
  )
}

export default Home