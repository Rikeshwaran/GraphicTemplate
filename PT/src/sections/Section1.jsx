import React, { forwardRef } from "react";

const Section1 = forwardRef((props, ref) => (
  <section ref={ref} className="section">
    <h1>Section 1 – sample Face View</h1>
  </section>
));

export default Section1;
