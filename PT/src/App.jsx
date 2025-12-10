import React, { useRef, useEffect, useState } from "react";
import Scene from "./components/Scene";
import Header from "./components/Header";
import MenuModal from "./components/MenuModal";
import CustomCursor from "./components/CustomCursor";



import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Extracurricular from "./sections/Extracurricular";
import Footer from "./sections/Footer";



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
      <CustomCursor />   {/* <- custom cursor overlay */}
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
       
        <Hero ref={(el) => (sectionsRef.current[0] = el)} data-index="0" />
        <About ref={(el) => (sectionsRef.current[1] = el)} data-index="1" />
        <Education ref={(el) => (sectionsRef.current[2] = el)} data-index="2" />
        <Skills ref={(el) => (sectionsRef.current[3] = el)} data-index="3" />
        <Experience ref={(el) => (sectionsRef.current[4] = el)} data-index="4" />
        <Projects ref={(el) => (sectionsRef.current[5] = el)} data-index="5" />
        <Achievements ref={(el) => (sectionsRef.current[6] = el)} data-index="6" />
        <Extracurricular ref={(el) => (sectionsRef.current[7] = el)} data-index="7" />
        <Footer ref={(el) => (sectionsRef.current[8] = el)} data-index="8" />

      </div>
    </div>
  );
}
