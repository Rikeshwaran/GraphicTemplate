import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function HorseModel() {
  const horse = useRef();
  const { scene } = useGLTF("/horse.glb");

  useFrame(() => {
    const scrollY = window.scrollY / document.body.scrollHeight;
    if (horse.current) {
      horse.current.rotation.y = scrollY * Math.PI * 2; // full 360 rotation
    }
  });

  return <primitive ref={horse} object={scene} scale={1.5} position={[0, -100, -250]} />
;
}
