import React from "react";
import "./Hero.css";
import profile_img from "../../assets/pic0.jpeg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Ashwini Anand.</span>Web Developer.
      </h1>
      <p>Bachelor Of Engineering.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
