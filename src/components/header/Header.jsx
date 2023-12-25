import React from "react";
import "./Header.css";
import Socials from "./Socials";
import me from "../../assets/images/me.jpg";
import headshot from "../../assets/images/headshot.jpg";

import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import resume from "../../assets/pdf/Chandrasekhar_Vignesh_Resume.pdf";

const Header = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Socials />
          <div className="home_img">
            <svg
              className="home_blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <image
                  transform="scale(2.4) translate(-92, -50)"
                  className="home_blob-img"
                  xlinkHref={headshot}
                />
              </g>
            </svg>
          </div>
          <div className="home_data">
            <h1 className="home_title">Hi, I'm Vignesh</h1>
            <h3 className="home_subtitle">Software Engineer | GCP Certified</h3>
            <p className="home_description">Welcome to my online portfolio!</p>
            <div>
              <a href="#contact" className="button button--flex">
                Contact Me <FaLocationArrow className="button_icon" />
              </a>
              <a
                href={resume}
                download
                className="button button--flex"
                target="_blank"
              >
                Resume <AiOutlineDownload className="button_icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
