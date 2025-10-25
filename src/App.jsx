import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import "./App.css";
import Sun from "./components/Sun";
import EnhancedPlanet from "./components/EnhancedPlanet";
import Earth from "./components/Earth";
import Orbit from "./components/Orbit";
import SpaceBackground from "./components/SpaceBackground";
import SolarSystemUI from "./components/SolarSystemUI";
import PerformanceControls from "./components/PerformanceControls";
import PlanetModal from "./components/PlanetModal";
import { Suspense, useState } from "react";

function App() {
  const [showOrbits, setShowOrbits] = useState(true);
  const [showEffects, setShowEffects] = useState(false);
  const [showFPS, setShowFPS] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [performanceSettings, setPerformanceSettings] = useState({
    planetDetail: 'medium',
    starCount: 'medium',
    effects: false,
    orbits: true,
    showFPS: false
  });

  const handleSettingsChange = (newSettings) => {
    setPerformanceSettings(newSettings);
    setShowEffects(newSettings.effects);
    setShowOrbits(newSettings.orbits);
    setShowFPS(newSettings.showFPS);
  };

  const handlePlanetClick = (planetName) => {
    console.log(`Planeta clickeado: ${planetName}`);
    setSelectedPlanet(planetName);
  };

  const handleCloseModal = () => {
    setSelectedPlanet(null);
  };

  return (
    <div className="scene-container">
      {/* UI superpuesta */}
      <SolarSystemUI 
        onPlanetClick={handlePlanetClick}
        selectedPlanet={selectedPlanet}
      />
      
      {/* Controles de rendimiento */}
      <PerformanceControls 
        onSettingsChange={handleSettingsChange}
        showOrbits={showOrbits}
        showEffects={showEffects}
        onToggleOrbits={() => setShowOrbits(!showOrbits)}
        onToggleEffects={() => setShowEffects(!showEffects)}
      />

      {/* Modal de información del planeta */}
      {selectedPlanet && (
        <PlanetModal 
          selectedPlanet={selectedPlanet}
          onClose={handleCloseModal}
        />
      )}
      
      <Canvas 
        camera={{ position: [0, 15, 30], fov: 45 }}
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
          precision: "highp",
          preserveDrawingBuffer: false
        }}
        dpr={[1, 2]}
        frameloop="always"
        performance={{ min: 0.5 }}
        shadows={false}
      >
        {/* Fondo del espacio */}
        <color attach="background" args={["#000011"]} />
        
        <Suspense fallback={null}>
          {/* Fondo espacial */}
          <SpaceBackground count={performanceSettings.starCount === 'low' ? 500 : performanceSettings.starCount === 'high' ? 2000 : 1000} />
          
          {/* Luces optimizadas */}
          <ambientLight intensity={0.4} color="#ffffff" />
          <directionalLight 
            position={[0, 0, 5]} 
            intensity={0.6} 
            color="#ffffff"
            castShadow={false}
          />
          <hemisphereLight 
            skyColor="#ffffff" 
            groundColor="#444444" 
            intensity={0.2} 
          />
          
          {/* Controles optimizados */}
          <OrbitControls 
            enableDamping 
            dampingFactor={0.05}
            minDistance={5}
            maxDistance={100}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxPolarAngle={Math.PI}
            rotateSpeed={0.3}
            zoomSpeed={0.8}
            panSpeed={0.5}
            screenSpacePanning={false}
          />

          {/* Órbitas visuales opcionales */}
          {showOrbits && (
            <>
              <Orbit radius={2.5} opacity={0.2} color="#ff6b35" />
              <Orbit radius={4} opacity={0.2} color="#ffa500" />
              <Orbit radius={6} opacity={0.2} color="#4169e1" />
              <Orbit radius={8.5} opacity={0.2} color="#cd5c5c" />
              <Orbit radius={14} opacity={0.2} color="#daa520" />
              <Orbit radius={20} opacity={0.2} color="#ffd700" />
              <Orbit radius={26} opacity={0.2} color="#4fd0e3" />
              <Orbit radius={32} opacity={0.2} color="#4169e1" />
            </>
          )}

          {/* Sol clickeable */}
          <Sun 
            onPlanetClick={handlePlanetClick}
            isSelected={selectedPlanet === 'sol'}
          />

          {/* Mercurio */}
          <EnhancedPlanet 
            distance={2.5} 
            size={0.3} 
            speed={2.0} 
            color="#b8a082"
            emissive="#4a3c2a"
            emissiveIntensity={0.1}
            rotationSpeed={0.02}
            tilt={0.1}
            planetName="mercurio"
            onPlanetClick={handlePlanetClick}
            isSelected={selectedPlanet === 'mercurio'}
          />
          
          {/* Venus */}
          <EnhancedPlanet 
            distance={4} 
            size={0.45} 
            speed={1.2} 
            color="#ff8c55"
            emissive="#ff4500"
            emissiveIntensity={0.15}
            rotationSpeed={-0.005}
            tilt={3.1}
            planetName="venus"
            onPlanetClick={handlePlanetClick}
            isSelected={selectedPlanet === 'venus'}
          />

          {/* Tierra */}
          <Earth 
            distance={6} 
            scale={0.5} 
            speed={0.8}
            onPlanetClick={handlePlanetClick}
            isSelected={selectedPlanet === 'tierra'}
          />

          {/* Marte */}
          <EnhancedPlanet 
            distance={8.5} 
            size={0.4} 
            speed={0.5} 
            color="#ff6347"
            emissive="#8b0000"
            emissiveIntensity={0.12}
            rotationSpeed={0.018}
            tilt={0.4}
            planetName="marte"
            onPlanetClick={handlePlanetClick}
            isSelected={selectedPlanet === 'marte'}
          />

          {/* Júpiter */}
          <EnhancedPlanet 
            distance={14} 
            size={1.2} 
            speed={0.2} 
            color="#ff8c42"
            emissive="#8b4513"
            emissiveIntensity={0.15}
            rotationSpeed={0.04}
            tilt={0.05}
            planetName="jupiter"
            onPlanetClick={handlePlanetClick}
            isSelected={selectedPlanet === 'jupiter'}
          />

          {/* Saturno */}
          <EnhancedPlanet 
            distance={20} 
            size={1.0} 
            speed={0.12} 
            color="#ffde7a"
            emissive="#daa520"
            emissiveIntensity={0.12}
            rotationSpeed={0.038}
            tilt={0.47}
            hasRings={true}
            planetName="saturno"
            onPlanetClick={handlePlanetClick}
            isSelected={selectedPlanet === 'saturno'}
          />

          {/* Urano */}
          <EnhancedPlanet 
            distance={26} 
            size={0.8} 
            speed={0.08} 
            color="#7dd3fc"
            emissive="#0077be"
            emissiveIntensity={0.1}
            rotationSpeed={0.03}
            tilt={1.7}
            hasRings={true}
            planetName="urano"
            onPlanetClick={handlePlanetClick}
            isSelected={selectedPlanet === 'urano'}
          />

          {/* Neptuno */}
          <EnhancedPlanet 
            distance={32} 
            size={0.75} 
            speed={0.06} 
            color="#6495ed"
            emissive="#191970"
            emissiveIntensity={0.1}
            rotationSpeed={0.032}
            tilt={0.5}
            planetName="neptuno"
            onPlanetClick={handlePlanetClick}
            isSelected={selectedPlanet === 'neptuno'}
          />
        </Suspense>

        {/* Efectos de post-procesado opcionales */}
        {showEffects && (
          <EffectComposer multisampling={0}>
            <Bloom 
              intensity={0.2} 
              width={150} 
              height={150} 
              kernelSize={2} 
              luminanceThreshold={0.4} 
              luminanceSmoothing={0.2} 
            />
          </EffectComposer>
        )}
        
        {/* Stats para debugging - opcional */}
        {showFPS && <Stats showPanel={0} className="stats" />}
      </Canvas>
      
      {/* Debug: Indicador de clicks */}
      <div style={{
        position: "absolute",
        top: "10px",
        right: "50%",
        transform: "translateX(50%)",
        color: "white",
        fontSize: "27px",
        padding: "8px 15px",
        fontFamily: "Arial",
        zIndex: 999
      }}>
        {selectedPlanet ? `✅ ${selectedPlanet.toUpperCase()} seleccionado` : "🖱️ Haz clic en un planeta"}
      </div>

      {/* Indicador de rendimiento */}
      <div style={{
        position: "absolute",
        bottom: "60px",
        right: "20px",
        color: "white",
        fontSize: "11px",
        background: "rgba(0,0,0,0.6)",
        padding: "5px 8px",
        borderRadius: "4px",
        fontFamily: "monospace"
      }}>
        🎮 Modo: {performanceSettings.planetDetail === 'low' ? 'Rendimiento' : 
                   performanceSettings.planetDetail === 'high' ? 'Calidad' : 'Balanceado'}
        {showFPS && <><br />📊 FPS visible</>}
      </div>

      {/* Indicador de planeta seleccionado */}
      {selectedPlanet && (
        <div style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          color: "white",
          fontSize: "12px",
          background: "rgba(0,0,0,0.8)",
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid #4169e1",
          fontFamily: "Arial",
          zIndex: 999
        }}>
          🎯 {selectedPlanet.charAt(0).toUpperCase() + selectedPlanet.slice(1)} seleccionado
          <br />
          <span style={{ fontSize: "10px", opacity: 0.8 }}>
            Haz clic en el fondo para deseleccionar
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
