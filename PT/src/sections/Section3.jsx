import React, { forwardRef } from "react";

const Section3 = forwardRef(({ "data-index": index }, ref) => (
  <section ref={ref} className="section" data-index={index}>
    <h1>Section 3 – Back View</h1>
  </section>
));

export default Section3;
