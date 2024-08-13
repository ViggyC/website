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
            <img src={grad} alt="Grad" />
          </div>
        </div>
        <div className="about_content">
          <p>
            I am a dynamic 23-year-old software engineer at Charles Schwab, in
            the Wealth Asset Management Data and Architecture organization. My
            expertise spans data engineering, platform and software development,
            as well as DevOps using cutting-edge cloud solutions, CI/CD, and
            enterprise best practices. Graduating Summa Cum Laude from the
            University of Colorado Boulder with a Bachelors in computer science
            and a business minor has equipped me with strong skills to excel in
            these industries. Beyond my career interests, I am passionate about
            exploring music, food, sports, nature, and mindfulness, always eager
            to learn and grow. Go Nuggets!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
