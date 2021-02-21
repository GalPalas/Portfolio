import React, { useEffect } from "react";
import sr from "./../services/ScrollReveal";
import "./Work.css";

function Work() {
  
  useEffect(() => {
    /*SCROLL WORK*/
    sr.reveal(".work__img", { interval: 200 });
  });

  return (
    <>
      <section class="work section" id="work">
        <h2 class="section-title">Work</h2>

        <div class="work__container bd-grid">
          <div class="work__img">
            <img src="/images/work1.jpg" alt=""></img>
          </div>
          <div class="work__img">
            <img src="/images/work2.jpg" alt=""></img>
          </div>
          <div class="work__img">
            <img src="/images/work3.jpg" alt=""></img>
          </div>
          <div class="work__img">
            <img src="/images/work4.jpg" alt=""></img>
          </div>
          <div class="work__img">
            <img src="/images/work5.jpg" alt=""></img>
          </div>
          <div class="work__img">
            <img src="/images/work6.jpg" alt=""></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
