import React from "react";
import About from "./About";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Work from "./Work";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}

export default Home;
