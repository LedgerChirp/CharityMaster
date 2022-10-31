import React from "react";
import Contact from "../components/contact/Contact";
import HomeHero from "../components/HomeHero";
import About from "../components/About";
import Teams from "../components/Teams";

function Home() {
  return (
    <>
      <HomeHero />
      <div className="mt-10"></div>
      <About />
      <div className="mt-20"></div>
      <Teams />
      <Contact />
    </>
  );
}

export default Home;