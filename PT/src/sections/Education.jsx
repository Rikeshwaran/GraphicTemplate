import React, { forwardRef } from "react";
import "../sections/css/Education.css";
const Education = forwardRef(({ "data-index": index }, ref) => (
  <section ref={ref} className="education-section" data-index={index}>
    <h1>Education</h1>
  </section>
));

export default Education;
