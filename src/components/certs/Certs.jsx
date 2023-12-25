import React from "react";
import ace_badge from "../../assets/images/ace_badge.png";
import "./Certs.css";

const Certs = () => {
  return (
    <section id="certs">
      <h2>Professional Certifications</h2>
      <div className="badge container">
        <a href="https://google.accredible.com/2ef601ff-c0b2-4c0a-a034-ad3f686829a9">
          <img
            className="ace_badge"
            src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/90530684"
            alt="ace"
          />
        </a>
      </div>
    </section>
  );
};

export default Certs;
