import React from "react";
import "./Education.css";
import cu from "../../../assets/images/cuboulder.png";
import courses from "../../../assets/data/courses";
import { TbBackpack } from "react-icons/tb";

const Education = () => {
  return (
    <section id="education">
      <div className="container education_container">
        <article className="skool">
          <img src={cu} className="cu" alt="" />
          <h3>B.S in Computer Science</h3>
          <h5>Minor in Business</h5>
          <p>Summa Cum Laude</p>
          <h3 className="awards-title">Awards</h3>
          <div className="awards">
            <p>Professional Learning Award</p>
            <p>Active Learning Award</p>
          </div>
        </article>
        <article className="skool">
          <h3 className="courses-header"> Relavent Courses</h3>
          <div className="courses">
            {courses.map((line) => {
              return (
                <li>
                  <TbBackpack />
                  {line}
                </li>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Education;
