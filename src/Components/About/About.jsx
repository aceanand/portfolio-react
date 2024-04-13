import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/abt.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              To obtain a position in an organization, where I can constantly
              contribute my knowledge, skills, and intelligence to its growth
              and simultaneously keep adding values to myself.
            </p>
            <p>
              Passionate about implementing and launching new projects. Looking
              start career as an entry level engineer with a reputed firm driven
              be technology.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>javascript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Redux</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>SQL </p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
