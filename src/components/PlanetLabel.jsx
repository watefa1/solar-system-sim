import { Text } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function PlanetLabel({ 
  planetName, 
  position = [0, 0, 0], 
  offset = [0, 1.5, 0],
  color = "#ffffff",
  fontSize = 0.3,
  visible = true 
}) {
  const textRef = useRef();

  // Hacer que el texto siempre mire hacia la cámara
  useFrame(({ camera }) => {
    if (textRef.current && visible) {
      textRef.current.lookAt(camera.position);
    }
  });

  if (!visible) return null;

  const finalPosition = [
    position[0] + offset[0],
    position[1] + offset[1],
    position[2] + offset[2]
  ];

  return (
    <Text
      ref={textRef}
      position={finalPosition}
      fontSize={fontSize}
      color={color}
      anchorX="center"
      anchorY="middle"
      fillOpacity={0.9}
      strokeWidth={0.005}
      strokeColor="#000000"
      strokeOpacity={0.8}
    >
      {planetName.charAt(0).toUpperCase() + planetName.slice(1)}
    </Text>
  );
}