import React, { useRef, useEffect, useState } from "react";
import Scene from "./components/Scene";
import Header from "./components/Header";
import MenuModal from "./components/MenuModal";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";

export default function App() {
  const sectionsRef = useRef([]);
  const [activeSection, setActiveSection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll → detect which section is active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the visible section with highest visibility
        let maxRatio = 0;
        let currentIndex = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            currentIndex = Number(entry.target.dataset.index);
          }
        });

        if (maxRatio > 0) {
          setActiveSection(currentIndex);
        }
      },
      {
        threshold: [0.4, 0.6, 0.8], // section is "active" when ~half visible
      }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
    // When active section changes → send cinematic style to camera
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("camera-style", { detail: activeSection })
    );
  }, [activeSection]);


  const scrollToSection = (index) => {
    const el = sectionsRef.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Sticky header on top */}
      <Header
        activeIndex={activeSection}
        onMenuClick={() => setMenuOpen(true)}
        onDotClick={(index) => scrollToSection(index)}
      />


      {/* Blue menu modal */}
      <MenuModal
        isOpen={menuOpen}
        closeModal={() => setMenuOpen(false)}
        goToSection={scrollToSection}
      />

      {/* 3D background */}
      <Scene />

      {/* Foreground sections */}
      <div className="sections">
        <Section1
          ref={(el) => (sectionsRef.current[0] = el)}
          data-index="0"
        />
        <Section2
          ref={(el) => (sectionsRef.current[1] = el)}
          data-index="1"
        />
        <Section3
          ref={(el) => (sectionsRef.current[2] = el)}
          data-index="2"
        />
        <Section4
          ref={(el) => (sectionsRef.current[3] = el)}
          data-index="3"
        />
        <Section5
          ref={(el) => (sectionsRef.current[4] = el)}
          data-index="4"
        />
      </div>
    </div>
  );
}
