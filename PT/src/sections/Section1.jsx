import React, { forwardRef } from "react";

const Section1 = forwardRef(({ "data-index": index }, ref) => (
  <section ref={ref} className="section" data-index={index}>
    <h1>Section 1  – Face View</h1>
  </section>
));


export default Section1;
