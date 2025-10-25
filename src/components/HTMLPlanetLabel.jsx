import { Html } from "@react-three/drei";

export default function HTMLPlanetLabel({ 
  planetName, 
  position = [0, 0, 0], 
  offset = [0, 1.5, 0],
  color = "#ffffff",
  fontSize = "14px",
  isSelected = false,
  visible = true 
}) {
  if (!visible) return null;

  const finalPosition = [
    position[0] + offset[0],
    position[1] + offset[1] * (isSelected ? 1.2 : 1),
    position[2] + offset[2]
  ];

  const finalFontSize = isSelected ? `${parseInt(fontSize) * 1.3}px` : fontSize;

  return (
    <Html
      position={finalPosition}
      center
      distanceFactor={10}
      occlude={false}
      style={{
        pointerEvents: 'none',
        userSelect: 'none'
      }}
    >
      <div
        style={{
          color: color,
          fontSize: finalFontSize,
          fontFamily: 'Arial, sans-serif',
          fontWeight: isSelected ? 'bold' : 'normal',
          textAlign: 'center',
          textShadow: `
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000,
            0 0 ${isSelected ? '8px' : '4px'} rgba(0,0,0,0.8)
          `,
          filter: isSelected ? 'drop-shadow(0 0 6px rgba(255,255,255,0.5))' : 'none',
          transition: 'all 0.3s ease',
          transform: isSelected ? 'scale(1.1)' : 'scale(1)',
          opacity: isSelected ? 1 : 0.9,
          whiteSpace: 'nowrap'
        }}
      >
        {planetName.charAt(0).toUpperCase() + planetName.slice(1)}
      </div>
    </Html>
  );
}