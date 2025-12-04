import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function HorseModel() {
  const group = useRef();

  const { scene, animations } = useGLTF("/horse.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions) return;

    const all = Object.values(actions);
    if (all.length > 0) {
      all[0].reset().fadeIn(0.5).play();
    }
  }, [actions]);

  useFrame(() => {
    const scroll = window.scrollY / document.body.scrollHeight;
    if (group.current) {
      group.current.rotation.y = scroll * Math.PI * 2;
    }
  });

  return (
    <group ref={group} position={[0, -120, -250]} >
      <primitive object={scene} scale={1.5} />
    </group>
  );
}

useGLTF.preload("/horse.glb");
