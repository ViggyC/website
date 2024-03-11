import React from "react";
import "./Education.css";
import cu from "../../../assets/images/cuboulder.png";
import courses from "../../../assets/data/courses";
import { TbBackpack } from "react-icons/tb";
import { FaMedal } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education">
      <div className="container education_container">
        <article className="skool">
          <img src={cu} className="cu" alt="" />
          <h3>B.S in Computer Science</h3>
          <p>Summa Cum Laude</p>
          <h5>GPA: 4.0 Major | 3.983 Cumulative </h5>
          <br />
          <h3 className="clubs-title">Minors</h3>
          <p>Business</p>
          <br />
          <h3 className="awards-title">
            Awards <FaMedal />{" "}
          </h3>
          <div className="awards">
            <p>
              <a
                href="https://www.colorado.edu/activelearningprogram/active-learning-program-awards"
                target="_blank"
              >
                Active Learning Award
              </a>
            </p>
            <p>Professional Learning Award</p>
          </div>
          <br />
          <h3 className="clubs-title">Clubs</h3>
          <div className="clubs">
            <p>
              <a href="https://hackcu.org" target="_blank">
                Hack CU - Finance Director
              </a>
            </p>
          </div>
          <br />
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
