import React from "react";
import LandingLogo from "../assets/undraw_reading_time.svg";
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Jamaica's Number One Online Book Platform</h1>
            <h2>
              Find Your Dream Book With
              <span className="text--orange"> Black Turtle</span>
            </h2>
            <Link to="/books">
              <button className="btn">Browse Books</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={LandingLogo} alt="binge sake" className=""/>
          </figure>
        </div>
      </header>
    </section>
  );
};
export default Landing