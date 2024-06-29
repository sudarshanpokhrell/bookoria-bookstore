import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-info-section">
        <h1 className="hero-heading">Your Gateway to Literary Adventures !</h1>

        <p className="hero-text">
          Discover a world of stories, knowledge, and imagination. Find your
          next favorite book with us.
        </p>
        <button class="button type1">
          <span class="btn-txt">Shop Now</span>
        </button>
      </div>
      {/* <div className="images-section">
        <img
          src="https://i.pinimg.com/564x/c9/54/bf/c954bf21da246f0e9030ca8c995ea650.jpg"
          alt=""
          className="hero-img-2 hero-img"
        />
        <img
          src="https://i.pinimg.com/564x/10/45/7c/10457c147d8425d60b01272b06a954d9.jpg"
          alt=""
          className="hero-img-3 hero-img"
        />
        <img
          src="https://i.pinimg.com/564x/32/b6/20/32b6208676d74145797a04cf671aa390.jpg"
          alt=""
          className="hero-img-1 hero-img"
        />
       
      </div> */}
    </div>
  );
}

export default Hero;
