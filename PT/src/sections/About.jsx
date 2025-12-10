import React, { forwardRef } from "react";

import "../sections/css/About.css";

const About = forwardRef(({ "data-index": index }, ref) => (
  <section ref={ref} className="about-section" data-index={index}>
    <h1>About Me</h1>
  </section>
));

export default About;
