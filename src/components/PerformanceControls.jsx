import { useState } from "react";

export default function PerformanceControls({ 
  onSettingsChange,
  showOrbits, 
  showEffects,
  onToggleOrbits,
  onToggleEffects 
}) {
  const [showPanel, setShowPanel] = useState(false);
  const [settings, setSettings] = useState({
    planetDetail: 'medium', // low, medium, high
    starCount: 'medium',    // low, medium, high
    effects: false,
    orbits: true,
    frameRate: 60,
    showFPS: false          // Nuevo: mostrar FPS oculto por defecto
  });

  const handleSettingChange = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    onSettingsChange?.(newSettings);
  };

  return (
    <>
      {/* Botón para mostrar/ocultar panel */}
      <button 
        onClick={() => setShowPanel(!showPanel)}
        style={{
          position: "absolute",
          top: "60px",
          right: "20px",
          zIndex: 101,
          padding: "8px 12px",
          background: "rgba(0,0,0,0.8)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "12px"
        }}
      >
        ⚙️ {showPanel ? "Ocultar" : "Configuración"}
      </button>

      {/* Panel de configuración */}
      {showPanel && (
        <div style={{
          position: "absolute",
          top: "100px",
          right: "20px",
          zIndex: 100,
          background: "rgba(0,0,0,0.9)",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "8px",
          padding: "15px",
          color: "white",
          fontSize: "12px",
          minWidth: "200px",
          backdropFilter: "blur(10px)"
        }}>
          <h4 style={{ margin: "0 0 15px 0", color: "#ffffff" }}>
            ⚡ Configuración de Rendimiento
          </h4>
          
          {/* Calidad de planetas */}
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              🪐 Calidad de Planetas:
            </label>
            <select 
              value={settings.planetDetail}
              onChange={(e) => handleSettingChange('planetDetail', e.target.value)}
              style={{
                width: "100%",
                padding: "4px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                borderRadius: "4px"
              }}
            >
              <option value="low">Baja (8 segmentos)</option>
              <option value="medium">Media (16 segmentos)</option>
              <option value="high">Alta (32 segmentos)</option>
            </select>
          </div>

          {/* Cantidad de estrellas */}
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              ⭐ Estrellas de Fondo:
            </label>
            <select 
              value={settings.starCount}
              onChange={(e) => handleSettingChange('starCount', e.target.value)}
              style={{
                width: "100%",
                padding: "4px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                borderRadius: "4px"
              }}
            >
              <option value="low">Pocas (500)</option>
              <option value="medium">Medias (1000)</option>
              <option value="high">Muchas (2000)</option>
            </select>
          </div>

          {/* Toggle órbitas */}
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <input 
                type="checkbox"
                checked={showOrbits}
                onChange={onToggleOrbits}
                style={{ marginRight: "8px" }}
              />
              🌀 Mostrar Órbitas
            </label>
          </div>

          {/* Toggle efectos */}
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <input 
                type="checkbox"
                checked={showEffects}
                onChange={onToggleEffects}
                style={{ marginRight: "8px" }}
              />
              ✨ Efectos Visuales
            </label>
          </div>

          {/* Toggle FPS */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <input 
                type="checkbox"
                checked={settings.showFPS}
                onChange={(e) => handleSettingChange('showFPS', e.target.checked)}
                style={{ marginRight: "8px" }}
              />
              📊 Mostrar FPS
            </label>
          </div>

          {/* Presets rápidos */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "10px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
              🎯 Presets:
            </label>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              <button 
                onClick={() => {
                  handleSettingChange('planetDetail', 'low');
                  handleSettingChange('starCount', 'low');
                  handleSettingChange('showFPS', false);
                  onToggleEffects(false);
                }}
                style={{
                  padding: "4px 8px",
                  background: "rgba(255,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "10px"
                }}
              >
                🚀 Máximo Rendimiento
              </button>
              
              <button 
                onClick={() => {
                  handleSettingChange('planetDetail', 'medium');
                  handleSettingChange('starCount', 'medium');
                  handleSettingChange('showFPS', false);
                  onToggleEffects(false);
                }}
                style={{
                  padding: "4px 8px",
                  background: "rgba(255,165,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "10px"
                }}
              >
                ⚖️ Balanceado
              </button>
              
              <button 
                onClick={() => {
                  handleSettingChange('planetDetail', 'high');
                  handleSettingChange('starCount', 'high');
                  handleSettingChange('showFPS', true);
                  onToggleEffects(true);
                }}
                style={{
                  padding: "4px 8px",
                  background: "rgba(0,255,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "10px"
                }}
              >
                💎 Máxima Calidad
              </button>
            </div>
          </div>

          {/* Info de rendimiento */}
          <div style={{ 
            marginTop: "10px", 
            fontSize: "10px", 
            opacity: 0.7,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "8px"
          }}>
            💡 Tip: Si tienes lag, usa "Máximo Rendimiento"
          </div>
        </div>
      )}
    </>
  );
}