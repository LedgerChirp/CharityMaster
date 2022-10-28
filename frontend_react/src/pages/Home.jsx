import React from "react";
import Contact from "../components/contact/Contact";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import Footer from "../components/contact/Footer";
import About from "../components/About";
import Teams from "../components/Teams";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <div className="mt-10"></div>
      <About />
      <div className="mt-20"></div>
      <Teams />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
