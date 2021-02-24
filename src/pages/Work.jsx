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
            <img src="/images/pizza-background.jpg" alt=""></img>
            <div class="link-icon-github">
              <a
                href="https://github.com/GalPalas/pizza-website"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bx bxl-github"></i>
              </a>
            </div>
            <div class="link-icon-globe">
              <a
                href="https://gal-pizza-planet.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bx bx-globe"></i>
              </a>
            </div>
          </div>
          <div class="work__img">
            <img src="/images/travel-background.jpg" alt=""></img>
            <div class="link-icon-github">
              <a
                href="https://github.com/GalPalas/travel-website"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bx bxl-github"></i>
              </a>
            </div>
            <div class="link-icon-globe">
              <a
                href="https://gal-pizza-planet.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bx bx-globe"></i>
              </a>
            </div>
          </div>
          <div class="work__img">
            <img src="/images/shopping-cart-background.jpg" alt=""></img>
            <div class="link-icon-github">
              <a
                href="https://github.com/GalPalas/shopping-cart-website"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bx bxl-github"></i>
              </a>
            </div>
            <div class="link-icon-globe">
              <a
                href="https://galpalas-shopping-cart.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bx bx-globe"></i>
              </a>
            </div>
          </div>
          <div class="work__img">
            <img src="/images/vidly-background.jpg" alt=""></img>
            <div class="link-icon-github">
              <a
                href="https://github.com/GalPalas/Vidly-FrontEnd"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bx bxl-github"></i>
              </a>
            </div>
            <div class="link-icon-globe">
              <a
                href="https://gal-vidly.netlify.app/movies"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bx bx-globe"></i>
              </a>
            </div>
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
