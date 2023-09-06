import React from "react";
import cv from "../../assets/pdf/Chandrasekhar_Vignesh_Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={cv}
        download
        className="btn btn-primary"
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
