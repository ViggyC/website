import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        <img
          src="https://img.icons8.com/dotty/80/000000/marker-v.png"
          className="web-icon"
        ></img>
      </a>

      <div className="copyright">
        <small>&copy; Vignesh Chandrasekhar. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
