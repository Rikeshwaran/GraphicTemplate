import React from "react";

export default function Menu({ sectionsRef }) {
  const scrollToSection = (index) => {
    sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });

    const angles = [
      0,
      Math.PI * 0.5,
      Math.PI,
      Math.PI * 1.5,
      Math.PI * 2,
    ];

    window.dispatchEvent(
      new CustomEvent("camera-move", { detail: angles[index] })
    );
  };

  return (
    <div className="menu">
      <button onClick={() => scrollToSection(0)}>Face</button>
      <button onClick={() => scrollToSection(1)}>Side</button>
      <button onClick={() => scrollToSection(2)}>Back</button>
      <button onClick={() => scrollToSection(3)}>Angle</button>
      <button onClick={() => scrollToSection(4)}>Full View</button>
    </div>
  );
}
