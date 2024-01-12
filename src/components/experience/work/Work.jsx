import React, { useState } from "react";
import "./Work.css";
import work_data from "../../../assets/data/work";

const Work = () => {
  const [expanded, setExpanded] = useState(false);
  console.log(work_data[0]);
  const dataForDisplay = expanded ? work_data : work_data.slice(0, 3);
  console.log(work_data.type, dataForDisplay.type);

  return (
    <section>
      <div className="container work_container">
        {dataForDisplay.map(
          ({ id, company, title, link, from, to, project, description }) => {
            return (
              <article key={id} className="work_item">
                <div className="work_title">
                  <h3>
                    <a href={link ? link : undefined} target="_blank">
                      {company}
                    </a>
                  </h3>
                  <h4>{title}</h4>
                  <h5>
                    {from} - {to}
                  </h5>
                </div>
                <div className="work-description">
                  <p className="project">{project}</p>

                  {description.map((line) => {
                    return (
                      <li>
                        <p className="bullet_points">{line}</p>
                      </li>
                    );
                  })}
                </div>
              </article>
            );
          }
        )}
        <button
          className="btn btn-primary work_button container"
          type="button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Work;
