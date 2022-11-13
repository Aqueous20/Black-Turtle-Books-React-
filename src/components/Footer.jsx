import React from "react";
import BlackTurtleLogo from "../assets/nav-pic.png";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img
                src={BlackTurtleLogo}
                className="footer__logo--img"
                alt="binge sake"
              />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__links">
              Home
            </Link>
            <span className="footer__links no-cursor">
              About
            </span>
            <Link to="/books" className="footer__links">
              Books
            </Link>
            <Link to="/cart" className="footer__links">
              Cart
            </Link>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2022 Black Turtler Books
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
