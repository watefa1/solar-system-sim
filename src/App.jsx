import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Sun from "./components/Sun";
import Planet from "./components/Planet";

function App() {
  return (
    <div className="scene-container">
      <Canvas camera={{ position: [0, 10, 25], fov: 45 }}>
        <OrbitControls enableDamping dampingFactor={0.04} />
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={2} />
        <Sun />
        <Planet distance={6} size={0.8} speed={0.6} color="#5DB3FF" /> {/* Tierra */}
        <Planet distance={10} size={1.4} speed={0.3} color="#b76d32" /> {/* Marte */}
      </Canvas>
    </div>
  );
}

export default App;
