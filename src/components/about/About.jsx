import React from "react";
import "./About.css";
import grad from "../../assets/images/vignesh_grad_pic1024_1.jpg";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GrProjects } from "react-icons/gr";
import { BiCodeCurly } from "react-icons/bi";
import { AiFillFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={grad} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          {/* <div className="about__cards">
              <article className='about_card'>
                <HiOutlineLightBulb className='about_icon'/>
                <h5>Experience</h5>
                <small>Always learning</small>
              </article> 

              <a href="#skills">
              <article  className='about_card'>
                <BiCodeCurly className='about_icon'/>
                <h5>Skills</h5>
                <small>Programming</small>
              </article>
              </a>

              <article className='about_card'>
                <AiFillFolderOpen className='about_icon'/>
                <h5>Projects</h5>
                <small>Stuff I've done</small>
              </article>
            </div> */}

          <p>
            University of Colorado Boulder graduate (Summa Cum Laude) with a
            Bachelors of Science in computer science and a minor in business. I
            enjoy exploring concepts in full stack software development, data
            science, linux systems, network systems and believe it or not.....
            theory. I currently work for Charles Schwab in Lone Tree Colorado as
            a software engineer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
