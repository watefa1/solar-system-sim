import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import PlanetLabel from "./PlanetLabel";
import * as THREE from "three";

export default function Sun({ onPlanetClick, isSelected = false }) {
  const sunRef = useRef();
  const glowRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.005;
    }

    // Animación del glow cuando está seleccionado
    if (glowRef.current && isSelected) {
      glowRef.current.material.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  const handleClick = (event) => {
    event.stopPropagation();
    console.log("Sol clicked!"); // Debug
    if (onPlanetClick) {
      onPlanetClick('sol');
    }
  };

  return (
    <group>
      {/* Sol clickeable */}
      <mesh 
        ref={sunRef}
        onClick={handleClick}
        onPointerDown={handleClick}
        onDoubleClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial 
          emissive={hovered ? "#ffcc00" : "#ffaa00"} 
          emissiveIntensity={hovered ? 2.5 : 2}
          color="#ffcc33"
        />
      </mesh>
      
      {/* Glow básico del sol */}
      <mesh scale={1.1}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color="#ff6600"
          transparent
          opacity={hovered ? 0.4 : 0.3}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Glow de selección */}
      {isSelected && (
        <mesh ref={glowRef} scale={1.3}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshBasicMaterial
            color="#ffaa00"
            transparent
            opacity={0.4}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </mesh>
      )}

      {/* Indicador de hover */}
      {hovered && (
        <mesh scale={1.2}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </mesh>
      )}
      
      {/* Luz puntual desde el sol */}
      <pointLight 
        position={[0, 0, 0]} 
        intensity={2} 
        color="#ffffff"
        distance={100}
        decay={2}
      />

      {/* Etiqueta del Sol */}
      <PlanetLabel
        planetName="Sol"
        position={[0, 0, 0]}
        offset={[0, 3.5, 0]}
        color="#FFD700"
        fontSize={0.5}
      />
    </group>
  );
}
