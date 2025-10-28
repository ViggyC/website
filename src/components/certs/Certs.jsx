import React from "react";
import ace_badge from "../../assets/images/ace_badge.png";
import associate_software_engineer from "../../assets/certs/ace.png";
import pca from "../../assets/certs/pca.png";
import "./Certs.css";

const Certs = () => {
  return (
    <section id="certs">
      <div className="whoamibox container">
        <p className="cmd">[~]$ ls /dev/certs</p>
      </div>
      <br />
      <div className="container badge_container ">
        <div className="badge_image_container">
          <a
            href="https://www.credly.com/badges/cc02d866-7603-4523-80ba-ee78e2d3c15d/public_url"
            target="_blank"
          >
            <div className="ace_badge_display">
              <img src={associate_software_engineer} alt="pca" />
            </div>
          </a>
          <a
            href="https://achieve.snowflake.com/9b05b063-4619-412b-9f61-b8a73b2ba4ff#gs.7py0kp"
            target="_blank"
          >
            <div className="ace_badge_display">
              <img
                src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/100683311"
                alt="snowflake"
              />
            </div>
          </a>
          <a
            href="https://www.credly.com/badges/52f74bb2-7ef6-4056-9a5c-e46b7e392617"
            target="_blank"
          >
            <div className="ace_badge_display">
              <img src={pca} alt="pca" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certs;
