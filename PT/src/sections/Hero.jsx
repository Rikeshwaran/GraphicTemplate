import React, { forwardRef } from "react";
import "../sections/css/Hero.css";

const Hero = forwardRef(({ "data-index": index }, ref) => (
  <section ref={ref} className="hero-section" data-index={index}>
    <h1>Me</h1>
  </section>
));

export default Hero;
