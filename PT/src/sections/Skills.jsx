import React, { forwardRef } from "react";

import "../sections/css/Skills.css";

const Skills = forwardRef(({ "data-index": index }, ref) => (
  <section ref={ref} className="skills-section" data-index={index}>
    <h1>Technical Skills</h1>
  </section>
));

export default Skills;
