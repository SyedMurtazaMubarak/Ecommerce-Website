import React from "react";
import hero from "../../assets/hero.png";

import "./Hero.css";
import "../Hero/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>
          <sup className="dollar">$</sup>299.99
        </h2>
        <h4>The Latest Winter Products for 2018</h4>
        <h1>look hot with 2018 style</h1>
        <div className="hero-btn">
          <a href="#." class="btn btn-inverse margin-top-40">
            SHOP NOW
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img className="hero-image" src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
