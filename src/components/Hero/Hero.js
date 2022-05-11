import React from "react";
import "./Hero.scss";
import hero from "../../assets/hero.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div>
      <div className="hero__quote__wrapper">
        <FontAwesomeIcon icon={faQuoteLeft} className="hero__quote--left" />
        <blockquote className="hero__quote__text">
          The more that you read, the more things you will know. The more that
          you learn, the more places you’ll go. --{" "}
          <site className="hero__quote__author">Dr. Seuss</site>
        </blockquote>
        <FontAwesomeIcon icon={faQuoteRight} className="hero__quote--right" />
      </div>
      <div className="hero__img__wrapper">
        <img src={hero} className="hero__img"></img>
      </div>
    </div>
  );
};

export default Hero;
