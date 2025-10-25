import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Sun() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial emissive={"#ffcc33"} emissiveIntensity={1.5} />
    </mesh>
  );
}
