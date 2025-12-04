import React, { forwardRef } from "react";

const Section4 = forwardRef(({ "data-index": index }, ref) => (
  <section ref={ref} className="section" data-index={index}>
    <h1>Section 4 – Angle View</h1>
  </section>
));


export default Section4;
