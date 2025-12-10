import React from "react";
import "../components/css/MenuModal.css";

const menuItems = [
  "Me",
  "About Me",
  "Education",
  "Technical Skills",
  "Experience",
  "Projects",
  "Achievements & Certifications",
  "Extracurricular",
  "Contact"
];

export default function MenuModal({ isOpen, closeModal, goToSection }) {
  if (!isOpen) return null;

  return (
    <div className="menu-modal">
      <div className="menu-content">
        <h2>Navigate</h2>

        {menuItems.map((label, index) => (
          <button
            key={index}
            onClick={() => {
              goToSection(index);
              closeModal();
            }}
          >
            {label}
          </button>
        ))}

        <button className="close-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}
