import React from "react";
import "./Work.css";
import work_data from "../../../assets/data/work";
import { PiDotFill } from "react-icons/pi";

const Work = () => {
  return (
    <section>
      <div className="container work_container">
        {work_data.map(({ id, company, title, from, to, description }) => {
          return (
            <article key={id} className="work_item">
              <div className="work_title">
                <h3>{company}</h3>
                <h4>{title}</h4>
                <h5>
                  {from} - {to}
                </h5>
              </div>
              <div className="work-description">
                {description.map((line) => {
                  return (
                    <li>
                      <PiDotFill className="bullet" /> {<p>{line}</p>}
                    </li>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
