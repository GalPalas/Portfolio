import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer class="footer">
        <p class="footer__title">Gal</p>
        <div class="footer__social">
          <Link to="/" class="footer__icon facebook">
            <i class="bx bxl-facebook"></i>
          </Link>
          <Link to="/" class="footer__icon instagram">
            <i class="bx bxl-instagram"></i>
          </Link>
          <Link to="/" class="footer__icon twitter">
            <i class="bx bxl-twitter"></i>
          </Link>
        </div>
        <p>&#169; 2020 Gal Palas</p>
      </footer>
    </>
  );
}

export default Footer;
