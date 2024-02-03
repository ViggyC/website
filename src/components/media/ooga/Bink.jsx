import React, { useState, useEffect } from "react";
import "./Bink.css";

const Bink = () => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimationClass("animate");
  }, []);

  return (
    <div className={`love-message ${animationClass}`}>
      <span className="animated-text">I </span>
      <span className="heart">❤️</span>
      <span className="animated-text"> You</span>
    </div>
  );
};
export default Bink;
