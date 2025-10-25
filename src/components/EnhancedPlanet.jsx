import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Sphere } from "@react-three/drei";
import PlanetRings from "./PlanetRings";
import PlanetLabel from "./PlanetLabel";
import * as THREE from "three";

export default function EnhancedPlanet({ 
  distance = 6, 
  size = 0.8, 
  speed = 0.01, 
  color = "#4fa3ff",
  hasRings = false,
  tilt = 0,
  rotationSpeed = 0.01,
  texture = null,
  emissive = null,
  emissiveIntensity = 0,
  planetName = "planet",
  onPlanetClick,
  isSelected = false
}) {
  const orbitRef = useRef();
  const planetRef = useRef();
  const glowRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    // Rotación orbital
    if (orbitRef.current) {
      orbitRef.current.rotation.y += delta * speed;
    }
    
    // Rotación del planeta sobre su eje
    if (planetRef.current) {
      planetRef.current.rotation.y += rotationSpeed;
    }

    // Animación del glow cuando está seleccionado
    if (glowRef.current && isSelected) {
      glowRef.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
    }
  });

  const handleClick = (event) => {
    event.stopPropagation();
    console.log(`Planet ${planetName} clicked!`); // Debug
    if (onPlanetClick) {
      onPlanetClick(planetName);
    }
  };

  return (
    <group ref={orbitRef}>
      <group position={[distance, 0, 0]} rotation={[0, 0, tilt]}>
        {/* Planeta clickeable */}
        <Sphere 
          ref={planetRef} 
          args={[size, 32, 32]}
          onClick={handleClick}
          onPointerDown={handleClick}
          onDoubleClick={handleClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial 
            color={hovered ? new THREE.Color(color).multiplyScalar(1.2) : color}
            map={texture}
            emissive={emissive || (hovered ? new THREE.Color(color).multiplyScalar(0.2) : new THREE.Color(0x000000))}
            emissiveIntensity={hovered ? 0.3 : emissiveIntensity}
            roughness={0.5}
            metalness={0.2}
          />
        </Sphere>

        {/* Glow de selección */}
        {isSelected && (
          <Sphere ref={glowRef} args={[size * 1.2, 32, 32]}>
            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.3}
              blending={THREE.AdditiveBlending}
              side={THREE.BackSide}
            />
          </Sphere>
        )}

        {/* Indicador de hover */}
        {hovered && (
          <Sphere args={[size * 1.1, 32, 32]}>
            <meshBasicMaterial
              color="#ffffff"
              transparent
              opacity={0.1}
              blending={THREE.AdditiveBlending}
              side={THREE.BackSide}
            />
          </Sphere>
        )}
        
        {/* Anillos si los tiene */}
        {hasRings && (
          <PlanetRings 
            innerRadius={size * 1.5} 
            outerRadius={size * 2.5}
            color={color}
            opacity={0.4}
            segments={32}
          />
        )}

        {/* Etiqueta con el nombre del planeta */}
        <PlanetLabel
          planetName={planetName}
          position={[0, 0, 0]}
          offset={[0, size + 1.0, 0]}
          color="#ffffff"
          fontSize={Math.max(0.25, size * 0.4)}
        />
      </group>
    </group>
  );
}