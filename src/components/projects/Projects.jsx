import React from "react";
import "./Projects.css";
import { FiGithub } from "react-icons/fi";

import project_data from "../../assets/data/projects";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="container projects_container">
        {project_data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_img">
                <a
                  href={demo ? demo : undefined}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={image} alt={title} />
                </a>
              </div>
              <h3>{title}</h3>
              {/* <p> {description}</p> */}
              <div className="project-cta">
                <a
                  href={github}
                  className="btn github_button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub className="github_icon" />
                </a>
                {/* <a href={demo} className="btn" target="_blank" rel="noreferrer">
                  Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
