import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  const [click,setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <Link to="/" className="nav__logo">
              Gal
            </Link>
          </div>

          <div className={click ? "show" : "nav__menu"}>
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link activ" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/about" className="nav__link" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/skills" className="nav__link" onClick={closeMobileMenu}>
                  Skills
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/work" className="nav__link" onClick={closeMobileMenu}>
                  Work
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/contact" className="nav__link" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i class="bx bx-menu" onClick={handleClick}></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
