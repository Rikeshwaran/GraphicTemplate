import React, { forwardRef } from "react";

import "../sections/css/Extracurricular.css";

const Extracurricular = forwardRef(({ "data-index": index }, ref) => (
  <section ref={ref} className="extracurricular-section" data-index={index}>
    <h1>Extracurricular Activities</h1>
  </section>
));

export default Extracurricular;
