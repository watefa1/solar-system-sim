import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function Moon({ earthRef, distance = 2, scale = 0.27, speed = 1 }) {
  const orbitRef = useRef();
  const moonRef = useRef();

  useFrame((state, delta) => {
    orbitRef.current.rotation.y += delta * speed;

    if (moonRef.current) moonRef.current.rotation.y += 0.001;
  });

  return (
    <group ref={orbitRef} position={earthRef.current?.position || [0, 0, 0]}>
      <Sphere ref={moonRef} args={[scale, 32, 32]} position={[distance, 0, 0]}>
        <meshStandardMaterial
          color="#aaaaaa"
          roughness={1}
          metalness={0}
        />
      </Sphere>
    </group>
  );
}
