import React from "react";
import "./About.css";
import grad from "../../assets/images/vignesh_grad_pic1024_1.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="whoamibox container">
        <p className="cmd">[~]$ whoami</p>
      </div>

      <div className="container about__container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={grad} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <p>
            Hi, I’m a 22 yr old professional in the financial services industry.
            I am currently employed at Charles Schwab in the Wealth Asset
            Management Data and Architecture organization, where I do data
            engineering, platform development, software engineering, and DevOps
            using cloud solutions, CI/CD, and best practices for enterprise. I
            graduated summa cum laude from the University of Colorado Boulder
            with a degree in computer science and a minor in business. I am
            starting to deep dive more into machine learning and AI in my free
            time. Besides the nerd stuff I venture into the world of music,
            sports, nature, and mindfulness, and I am contstantly learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
