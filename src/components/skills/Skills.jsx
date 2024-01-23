import React from "react";
import "./Skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Certs from "../certs/Certs";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>

      <div className="container skills_container">
        <div className="skills_programming">
          <h3>Programming</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">C</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">Python</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">Bash</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">Javascript</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">SQL</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">React</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">Angular</h4>
              </div>
            </article>
          </div>
        </div>
        {/* Backend */}
        <div className="skills_backend">
          <h3>Backend</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">NodeJS</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">MongoDB</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">MySQL</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">.NETCore</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">PostgreSQL</h4>
              </div>
            </article>
          </div>
        </div>
        {/* Courses */}
        <div className="skills_services">
          <h3>Platforms & Services</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">Heroku</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">Fly.io</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">AWS</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">GCP</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">Bamboo</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">GitHub</h4>
              </div>
            </article>
            <article className="skills_details">
              <BsFillPatchCheckFill className="skills_icon" />
              <div>
                <h4 className="skill_name">Docker</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Certs />
    </section>
  );
};

export default Skills;
