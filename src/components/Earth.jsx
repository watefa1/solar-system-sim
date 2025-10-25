import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function Earth({ 
  distance = 6, 
  speed = 0.6, 
  scale = 1, 
  onPlanetClick,
  isSelected = false 
}) {
  const orbitRef = useRef();
  const earthRef = useRef();
  const moonOrbitRef = useRef();
  const moonRef = useRef();
  const glowRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    orbitRef.current.rotation.y += delta * speed;
    if (earthRef.current) earthRef.current.rotation.y += 0.002;

    if (moonOrbitRef.current) moonOrbitRef.current.rotation.y += delta * 1;
    if (moonRef.current) moonRef.current.rotation.y += 0.001;

    // Animación del glow cuando está seleccionado
    if (glowRef.current && isSelected) {
      glowRef.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
    }
  });

  const handleClick = (event) => {
    event.stopPropagation();
    console.log("Tierra clicked!"); // Debug
    if (onPlanetClick) {
      onPlanetClick('tierra');
    }
  };

  return (
    <group ref={orbitRef}>
      {/* Tierra clickeable */}
      <Sphere 
        ref={earthRef} 
        args={[scale, 32, 32]} 
        position={[distance, 0, 0]}
        onClick={handleClick}
        onPointerDown={handleClick}
        onDoubleClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={hovered ? "#4a90e2" : "#2E7DD2"}
          emissive={hovered ? "#1e3a8a" : "#0f2453"}
          emissiveIntensity={hovered ? 0.3 : 0.15}
          roughness={0.6}
          metalness={0.2}
        />
      </Sphere>

      {/* Atmósfera simplificada */}
      <Sphere args={[scale * 1.03, 16, 16]} position={[distance, 0, 0]}>
        <meshBasicMaterial
          color="#87CEEB"
          transparent
          opacity={hovered ? 0.25 : 0.15}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Glow de selección */}
      {isSelected && (
        <Sphere ref={glowRef} args={[scale * 1.2, 16, 16]} position={[distance, 0, 0]}>
          <meshBasicMaterial
            color="#4169e1"
            transparent
            opacity={0.3}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </Sphere>
      )}

      {/* Indicador de hover */}
      {hovered && (
        <Sphere args={[scale * 1.15, 16, 16]} position={[distance, 0, 0]}>
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </Sphere>
      )}

      {/* Luna */}
      <group ref={moonOrbitRef} position={[distance, 0, 0]}>
        <Sphere ref={moonRef} args={[scale * 0.27, 16, 16]} position={[2.5, 0, 0]}>
          <meshStandardMaterial 
            color="#c0c0c0" 
            roughness={0.95} 
            metalness={0.05}
          />
        </Sphere>
      </group>
    </group>
  );
}
