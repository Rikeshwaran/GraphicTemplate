import React, { forwardRef } from "react";
import "../sections/css/Experience.css";

const Experience = forwardRef(({ "data-index": index }, ref) => (
  <section ref={ref} className="experience-section" data-index={index}>
    <h1>Experience</h1>
  </section>
));

export default Experience;
