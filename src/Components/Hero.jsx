import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

import one from "../assets/one.jpg";
import two from "../assets/two.jpeg";
import five from "../assets/five.jpeg";
import seven from "../assets/seven.jpg";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-info-section">
        <h1 className="hero-heading">Your Gateway to Literary Adventures!</h1>
        <p className="hero-text">
          Discover a world of stories, knowledge, and imagination. Find your
          next favorite book with us.
        </p>
        <Link to={"/category/all books"}>
        <button className="button type1">
          <span className="btn-txt">Shop Now</span>
        </button>
        </Link>
        
      </div>
      <div className="grid-section">
        <div className="col-left">
          <div className="box">
            <div className="inner-box">
              <img src={seven} alt="seven" />
            </div>
            <div className="inner-box">
              <img src={two} alt="two" />
            </div>
          </div>
          <div className="box">
            <div className="inner-box">
              <img src={one} alt="one" />
            </div>
            <div className="inner-box">
              <img src={five} alt="five" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
