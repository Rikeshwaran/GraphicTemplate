import React from "react";
import "../components/css/Header.css";

const sections = new Array(9).fill(0);

export default function Header({ activeIndex, onMenuClick, onDotClick }) {
  return (
    <header className="header">
      <div className="brand">My Site</div>
           
      <div className="dots">
        {sections.map((_, i) => (
          <span
            key={i}
            className={`dot ${activeIndex === i ? "active-dot" : ""}`}
            onClick={() => onDotClick(i)}
          />
        ))}
      </div>

      <button className="menu-btn" onClick={onMenuClick}>
        <span className="menu-icon" />
      </button>
    </header>
  );
}
