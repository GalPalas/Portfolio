import React, { useEffect } from "react";
import "./About.css";
import sr from "./../services/ScrollReveal";

function About() {
  useEffect(() => {
    /*SCROLL ABOUT*/
    sr.reveal(".about__img", {});
    sr.reveal(".about__subtitle", { delay: 400 });
    sr.reveal(".about__text", { delay: 400 });
  });

  return (
    <>
      <section className="about section" id="about">
        <h2 className="section-title">About</h2>

        <div className="about__container bd-grid">
          <div className="about__img">
            <img src="./images/GP.png" alt=""></img>
          </div>

          <div>
            <h2 className="about__subtitle">I'am Gal</h2>
            <p className="about__text">
              Full Stack developer, capable of developing web platforms from
              scratch to production, with full responsiveness and preformance. I
              focus on planning, designing and developing both Back-End and
              Front-End. Hands-on a wide range of technologies and platforms:
              JaveScript, CSS, HTML, React, Redux, PostgreSQL, Node.js and Adobe
              Photoshop.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
