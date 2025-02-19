/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="home_social">
      <Link to={"/blog"}>
        {" "}
        <img
          src="https://img.icons8.com/dotty/80/000000/marker-v.png"
          className="web-icon"
        ></img>
      </Link>
      <a
        href="https://soundcloud.com/viggysounds/tracks"
        target="_blank"
        className="home_social-icon"
        rel="noreferrer"
      >
        <FaSoundcloud size={25} />
      </a>

      <a
        href="https://www.linkedin.com/in/vignesh-chandrasekhar-780818199/"
        target="_blank"
        className="home_social-icon"
        rel="noreferrer"
      >
        <FiLinkedin />
      </a>
      <a
        href="https://github.com/ViggyC"
        target="_blank"
        className="home_social-icon"
        rel="noreferrer"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.instagram.com/viggy.c/"
        target="_blank"
        className="home_social-icon"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
      <a
        href="https://www.facebook.com/viggyc5723/"
        target="_blank"
        className="home_social-icon"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default Socials;
