import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              hic officiis dolorem voluptate repellat aspernatur ad quos modi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae aspernatur beatae excepturi eos eius rem quam libero,
              mollitia earum autem suscipit! Velit?
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

        <div className="about-achievements">
          <div className="about-achievement">
            <h1>10+</h1>
            <p>Years Of Experience</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>90+</h1>
            <p>Projects Completed</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>happy Client</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
