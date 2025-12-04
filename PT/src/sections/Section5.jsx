import React, { forwardRef } from "react";

const Section5 = forwardRef(({ "data-index": index }, ref) => (
  <section ref={ref} className="section" data-index={index}>
    <h1>Section 5 – Full Rotation</h1>
  </section>
));


export default Section5;
