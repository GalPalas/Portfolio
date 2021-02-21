import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sr from "./../services/ScrollReveal";
import "./HeroSection.css";

function HeroSection() {
  useEffect(() => {
    /*SCROLL HOME*/
    sr.reveal(".home__title", {});
    sr.reveal(".button", { delay: 200 });
    sr.reveal(".home__img", { delay: 400 });
    sr.reveal(".home__social-icon", { interval: 200 });
  });

  return (
    <>
      <section className="home bd-grid" id="home">
        <div className="home__data">
          <h1 className="home__title">
            Hi, <br />
            I`am <span className="home__title-color">Gal</span>
            <br />
            Full-Stack Developer
          </h1>
          <Link to="/contact" className="button">
            Contact
          </Link>
        </div>

        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/gal-palas-84259419a/"
            target="_blank"
            rel="noreferrer"
            className="home__social-icon linkedin"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/GalPalas"
            target="_blank"
            rel="noreferrer"
            className="home__social-icon github"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <div className="home__img">
          <img src="/images/ImageProfile.png" alt=""></img>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
