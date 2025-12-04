import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import React, { useEffect, useState } from "react";

export default function CameraController() {
  const { camera } = useThree();
  const [targetAngle, setTargetAngle] = useState(0);

  useEffect(() => {
    const handler = (e) => setTargetAngle(e.detail);
    window.addEventListener("camera-move", handler);
    return () => window.removeEventListener("camera-move", handler);
  }, []);

  useFrame((state, delta) => {
    const radius = 5;
    const x = Math.sin(targetAngle) * radius;
    const z = Math.cos(targetAngle) * radius;

    easing.damp3(camera.position, [x, 1.5, z], 0.3, delta);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
