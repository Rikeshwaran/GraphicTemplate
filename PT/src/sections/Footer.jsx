import React, { forwardRef } from "react";
import "../sections/css/Footer.css";

const Contact = forwardRef(({ "data-index": index }, ref) => (
  <section ref={ref} className="footer-section" data-index={index}>
    <h1>Contact</h1>
  </section>
));

export default Contact;
