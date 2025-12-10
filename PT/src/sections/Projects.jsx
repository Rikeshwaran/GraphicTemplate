import React, { forwardRef } from "react";

import "../sections/css/Projects.css";

const Projects = forwardRef(({ "data-index": index }, ref) => (
  <section ref={ref} className="projects-section" data-index={index}>
    <h1>Projects</h1>
  </section>
));

export default Projects;
