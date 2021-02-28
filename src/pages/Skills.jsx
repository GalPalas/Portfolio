import React, { useEffect } from "react";
import sr from "./../services/ScrollReveal";
import "./Skills.css";

function Skills() {
  useEffect(() => {
    /*SCROLL SKILLS*/
    sr.reveal(".skills__subtitle", {});
    sr.reveal(".skills__text", {});
    sr.reveal(".skills__data", { interval: 200 });
    sr.reveal(".skills__img", { delay: 600 });
  });

  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills__container bd-grid">
          <div>
            <h2 className="skills__subtitle">Profesional Skills</h2>
            <p className="skills__text">
              I can describe myself as autodidact, Responsible, creative with
              excellent interpersonal skills. High self-learning ability,
              organized team player who thrives under pressure, with a can do
              attitude. Have a very high work ethic and loves to delve and
              explore.
            </p>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-html5 skills__icon"></i>
                <span className="skills__name">HTML5</span>
              </div>
              <div className="skills__bar skills__html"></div>
              <div>
                <span className="skills__percentage">95%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-css3 skills__icon"></i>
                <span className="skills__name">CSS3</span>
              </div>
              <div className="skills__bar skills__css"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-javascript skills__icon"></i>
                <span className="skills__name">JAVASCRIPT</span>
              </div>
              <div className="skills__bar skills__js"></div>
              <div>
                <span className="skills__percentage">65%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxs-paint skills__icon"></i>
                <span className="skills__name">UX/UI</span>
              </div>
              <div className="skills__bar skills__ux"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>
          </div>

          <div>
            <img src="/images/work3.jpg" alt="" className="skills__img"></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
