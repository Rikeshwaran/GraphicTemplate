import React, { useRef, useEffect } from "react";
import Scene from "./components/Scene";
import Menu from "./components/Menu";
import Lenis from "lenis";


import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";

export default function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="container">
      <Menu sectionsRef={sectionsRef} />
      <Scene />

      <div className="sections">
        <Section1 ref={(el) => (sectionsRef.current[0] = el)} />
        <Section2 ref={(el) => (sectionsRef.current[1] = el)} />
        <Section3 ref={(el) => (sectionsRef.current[2] = el)} />
        <Section4 ref={(el) => (sectionsRef.current[3] = el)} />
        <Section5 ref={(el) => (sectionsRef.current[4] = el)} />
      </div>
    </div>
  );
}
