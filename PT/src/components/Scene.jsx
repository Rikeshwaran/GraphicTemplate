import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import HorseModel from "./HorseModel";
import CameraController from "./CameraController";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 5], fov: 50 }}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight intensity={2} position={[5, 5, 5]} />

      <CameraController />
      <HorseModel />

      <Environment preset="sunset" />
    </Canvas>
  );
}
