import React, { forwardRef } from "react";
import "../sections/css/Achievements.css";


const Achievements = forwardRef(({ "data-index": index }, ref) => (
  <section ref={ref} className="achievements-section" data-index={index}>
    <h1>Achievements & Certifications</h1>
  </section>
));

export default Achievements;
