import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus } from "@react-three/drei";
import * as THREE from "three";

export default function PlanetRings({ 
  innerRadius = 2, 
  outerRadius = 3, 
  segments = 64,
  opacity = 0.6,
  color = "#cccccc" 
}) {
  const ringsRef = useRef();

  useFrame(() => {
    if (ringsRef.current) {
      ringsRef.current.rotation.z += 0.001;
    }
  });

  return (
    <group ref={ringsRef}>
      <Torus 
        args={[(innerRadius + outerRadius) / 2, (outerRadius - innerRadius) / 2, 4, segments]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={opacity}
          side={THREE.DoubleSide}
          roughness={0.8}
          metalness={0.1}
        />
      </Torus>
    </group>
  );
}