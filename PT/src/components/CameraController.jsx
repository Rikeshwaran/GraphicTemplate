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

      // Assign different cinematic moods per section
      const moods = [
        { distance: 4.5, height: 1.6, tilt: 0.03 }, // Section 1
        { distance: 5.5, height: 1.4, tilt: -0.02 }, // Section 2
        { distance: 4.8, height: 1.8, tilt: 0.05 }, // Section 3
        { distance: 5.2, height: 1.3, tilt: -0.03 }, // Section 4
        { distance: 4.6, height: 1.5, tilt: 0 } // Section 5
      ];

      setTarget(moods[section]);
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
