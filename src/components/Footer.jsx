import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <p className="footer__title">Gal</p>
        <div className="footer__social">
          <Link to="/" className="footer__icon facebook">
            <i className="bx bxl-facebook"></i>
          </Link>
          <Link to="/" className="footer__icon instagram">
            <i className="bx bxl-instagram"></i>
          </Link>
          <Link to="/" className="footer__icon twitter">
            <i className="bx bxl-twitter"></i>
          </Link>
        </div>
        <p>&#169; 2020 Gal Palas</p>
      </footer>
    </>
  );
}

export default Footer;
