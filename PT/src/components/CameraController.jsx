import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import React, { useEffect, useState } from "react";

export default function CameraController() {
  const { camera } = useThree();

  // camera parameters controlled per section
  const [target, setTarget] = useState({
    distance: 5,   // zoom
    height: 1.5,   // camera vertical
    tilt: 0        // rotation tilt
  });

  useEffect(() => {
    const handler = (e) => {
      const section = e.detail;

       const moods = [
        { distance: 4.5, height: 1.6, tilt: 0.03 },  // Hero
        { distance: 5.0, height: 1.4, tilt: -0.01 }, // About
        { distance: 4.8, height: 1.7, tilt: 0.04 },  // Education
        { distance: 5.2, height: 1.3, tilt: -0.03 }, // Skills
        { distance: 4.7, height: 1.5, tilt: 0.02 },  // Experience
        { distance: 5.3, height: 1.6, tilt: 0.01 },  // Projects
        { distance: 4.9, height: 1.4, tilt: -0.02 }, // Achievements
        { distance: 5.1, height: 1.7, tilt: 0.03 },  // Extracurricular
        { distance: 4.6, height: 1.5, tilt: 0.00 }   // Footer / Contact
      ];

      setTarget(moods[section] || moods[0]);
    };

    window.addEventListener("camera-style", handler);
    return () => window.removeEventListener("camera-style", handler);
  }, []);

  // Smooth cinematic movement
  useFrame((state, delta) => {
    easing.damp3(camera.position, [0, target.height, target.distance], 0.4, delta);
    easing.dampE(camera.rotation, [target.tilt, 0, 0], 0.4, delta);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
