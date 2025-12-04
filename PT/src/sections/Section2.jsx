import React, { forwardRef } from "react";

const Section2 = forwardRef(({ "data-index": index }, ref) => (
  <section ref={ref} className="section" data-index={index}>
    <h1>Section 2 – Side View</h1>
  </section>
));


export default Section2;
