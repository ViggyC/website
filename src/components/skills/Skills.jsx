import React from "react";
import "./Skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Certs from "../certs/Certs";
import logos from "../../assets/data/skills";

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Bag</h2>
      <div className="whoamibox container">
        <p className="cmd">[~]$ ls /dev/skills</p>
      </div>
      <div className="container skills_container">
        <div className="skills_image_container">
          {logos.map((logo) => (
            <img key={logo.id} src={logo.src} alt={logo.alt} className="logo" />
          ))}
        </div>
      </div>
      <Certs />
    </section>
  );
};

export default Skills;
