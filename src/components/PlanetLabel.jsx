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
  visible = true,
  isSelected = false
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
    position[1] + offset[1] * (isSelected ? 1.2 : 1),
    position[2] + offset[2]
  ];

  const finalFontSize = fontSize * (isSelected ? 1.3 : 1);

  return (
    <Text
      ref={textRef}
      position={finalPosition}
      fontSize={finalFontSize}
      color={color}
      anchorX="center"
      anchorY="middle"
      fillOpacity={isSelected ? 1.0 : 0.95}
      strokeWidth={isSelected ? 0.012 : 0.008}
      strokeColor="#000000"
      strokeOpacity={isSelected ? 1.0 : 0.9}
      textAlign="center"
      maxWidth={200}
      lineHeight={1}
      letterSpacing={0.02}
      curveSegments={12}
      bevelEnabled={false}
    >
      {planetName.charAt(0).toUpperCase() + planetName.slice(1)}
    </Text>
  );
}