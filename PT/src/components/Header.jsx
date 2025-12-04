import React from "react";

export default function Header({ activeIndex, onMenuClick, onDotClick }) {
  return (
    <header className="header">
      <div className="brand">My 3D Dragon Site</div>

      <div className="dots">
        {[0, 1, 2, 3, 4].map((i) => (
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
