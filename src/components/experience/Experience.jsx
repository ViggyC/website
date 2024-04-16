import React, { useState } from "react";
import "./Experience.css";
import Education from "./education/Education";
import Work from "./work/Work";
import { FaGraduationCap } from "react-icons/fa";
import { GiBriefcase } from "react-icons/gi";

const Experience = () => {
  //work or school
  const [experienceType, setExperienceType] = useState("work");
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="container experience_container">
        <button
          onClick={() => setExperienceType("work")}
          className="button button--flex"
        >
          <GiBriefcase className="experience-icon" /> Work
        </button>
        <button
          onClick={() => setExperienceType("education")}
          className="button  button--flex"
        >
          <FaGraduationCap className="experience-icon" /> Education
        </button>
      </div>
      <div className="experience_content">
        {experienceType === "education" ? <Education /> : <Work />}
      </div>
    </section>
  );
};

export default Experience;
