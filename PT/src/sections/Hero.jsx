import React, { forwardRef } from "react";
import "../sections/css/Hero.css";

const Hero = forwardRef(({ "data-index": index }, ref) => (
  <section ref={ref} className="hero-section" data-index={index}>
    
    {/* LEFT TOP CONTENT */}
    <div className="hero-left">
      <h1 className="type name">Rikeswaran M</h1>
      <h2 className="type degree">B.E Computer Science & Engineering</h2>
      <h3 className="type role">Full-Stack Developer at YB</h3>

      <div className="hero-buttons">
        <button className="hero-btn resume-btn">Download Resume</button>
        <button className="hero-btn query-btn">Query Form</button>
      </div>
    </div>

    {/* RIGHT - LOWER PHOTO
    <div className="hero-right">
      <img 
        src="/myphoto.jpg"
        alt="My Photo"
        className="hero-photo"
      />
    </div> */}

  </section>
));

export default Hero;
