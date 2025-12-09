import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${visible ? "cursor-visible" : ""}`}
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      />
      <div
        className={`cursor-ring ${visible ? "cursor-visible" : ""}`}
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      />
    </>
  );
}
