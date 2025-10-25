import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Planet({ distance = 6, size = 0.8, speed = 0.01, color = "#4fa3ff" }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.x = Math.cos(t * speed) * distance;
    ref.current.position.z = Math.sin(t * speed) * distance;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
