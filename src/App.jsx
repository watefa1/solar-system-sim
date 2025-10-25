import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Sun from "./components/Sun";
import Planet from "./components/Planet";
import Earth from "./components/Earth";
import Moon from "./components/Moon";
import { useRef } from "react";

function App() {
  const earthRef = useRef();

  return (
    <div className="scene-container">
      <Canvas camera={{ position: [0, 10, 25], fov: 45 }}>
        {/* Fondo */}
        <color attach="background" args={["#050011"]} />

        {/* Luces */}
        <ambientLight intensity={0.25} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[4, 4, 4]} intensity={1.5} color="#00f6ff" />
        <pointLight position={[-4, -4, -4]} intensity={1.2} color="#ff00f6" />

        {/* Controles */}
        <OrbitControls enableDamping dampingFactor={0.04} />

        {/* Sol y planetas */}
        <Sun />
        <Planet distance={6} size={0.8} speed={0.6} color="#5DB3FF" />
        <Planet distance={4} size={0.4} speed={0.6} color="#ffffffff" />

        {/* Tierra con ref para la Luna */}
        <Earth ref={earthRef} distance={6} scale={1.2} speed={0.6} />

        {/* Luna orbitando la Tierra */}
        {earthRef.current && <Moon earthRef={earthRef} distance={2} scale={0.27} speed={1} />}

        <Planet distance={10} size={1.4} speed={0.3} color="#b76d32" />
      </Canvas>
    </div>
  );
}

export default App;
