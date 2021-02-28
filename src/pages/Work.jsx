import React, { useEffect } from "react";
import sr from "./../services/ScrollReveal";
import { data } from "../services/dataWorkService";
import "./Work.css";

function Work() {
  useEffect(() => {
    /*SCROLL WORK*/
    sr.reveal(".work__img", { interval: 200 });
  });

  return (
    <>
      <section className="work section" id="work">
        <h2 className="section-title">Work</h2>
        <div className="work__container bd-grid">
          {data.map((project) => (
            <div className="work__img">
              <img src={project.src} alt=""></img>
              <div className={project.classGit}>
                <a
                  href={project.hrefGit}
                  target={project.target}
                  rel={project.rel}
                >
                  <i className={project.iconGit}></i>
                </a>
              </div>
              <div className={project.classGlobe}>
                <a
                  href={project.hrefGlobe}
                  target={project.target}
                  rel={project.rel}
                >
                  <i className={project.iconGlobe}></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Work;
