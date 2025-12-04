import React from "react";

export default function MenuModal({ isOpen, closeModal, goToSection }) {
  if (!isOpen) return null;

  return (
    <div className="menu-modal">
      <div className="menu-content">
        <h2>Go to section</h2>

        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            onClick={() => {
              goToSection(i);
              closeModal();
            }}
          >
            Section {i + 1}
          </button>
        ))}

        <button className="close-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}
