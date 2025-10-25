import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import dayMap from "../assets/textures/earth_day.jpg";
import nightMap from "../assets/textures/earth.jpg";
import cloudsMap from "../assets/textures/clouds.jpg";

export default function Earth({ distance = 6, speed = 0.6, scale = 1 }) {
  const orbitRef = useRef();
  const earthRef = useRef();
  const cloudsRef = useRef();
  const moonOrbitRef = useRef();
  const moonRef = useRef();

  const textureDay = new THREE.TextureLoader().load(dayMap);
  const textureNight = new THREE.TextureLoader().load(nightMap);
  const textureClouds = new THREE.TextureLoader().load(cloudsMap);

  useFrame((state, delta) => {
    orbitRef.current.rotation.y += delta * speed; // órbita Tierra
    if (earthRef.current) earthRef.current.rotation.y += 0.002; // rotación Tierra
    if (cloudsRef.current) cloudsRef.current.rotation.y += 0.0015; // nubes

    // Luna
    if (moonOrbitRef.current) moonOrbitRef.current.rotation.y += delta * 1; // órbita Luna
    if (moonRef.current) moonRef.current.rotation.y += 0.001; // rotación Luna
  });

  return (
    <group ref={orbitRef}>
      {/* Tierra */}
      <Sphere ref={earthRef} args={[scale, 64, 64]} position={[distance, 0, 0]}>
        <meshStandardMaterial
          map={textureDay}
          emissive={new THREE.Color(0xffffff)}
          emissiveMap={textureNight}
          emissiveIntensity={0.3}
          roughness={1}
          metalness={0}
        />
      </Sphere>

      {/* Nubes */}
      <Sphere ref={cloudsRef} args={[scale * 1.01, 64, 64]} position={[distance, 0, 0]}>
        <meshStandardMaterial
          map={textureClouds}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </Sphere>

      {/* Glow azul */}
      <Sphere args={[scale * 1.05, 64, 64]} position={[distance, 0, 0]}>
        <meshBasicMaterial
          color="#3db7ff"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Luna */}
      <group ref={moonOrbitRef} position={[distance, 0, 0]}>
        <Sphere ref={moonRef} args={[scale * 0.27, 32, 32]} position={[2, 0, 0]}>
          <meshStandardMaterial color="#aaaaaa" roughness={1} metalness={0} />
        </Sphere>
      </group>
    </group>
  );
}
