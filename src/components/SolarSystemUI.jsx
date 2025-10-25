import { useState, useEffect } from "react";

export default function SolarSystemUI({ onPlanetClick, selectedPlanet }) {
  const [showInfo, setShowInfo] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const planetData = [
    { name: "Sol", key: "sol", distance: "0 AU", period: "N/A", color: "#ffaa00" },
    { name: "Mercurio", key: "mercurio", distance: "0.39 AU", period: "88 días", color: "#b8a082" },
    { name: "Venus", key: "venus", distance: "0.72 AU", period: "225 días", color: "#ff8c55" },
    { name: "Tierra", key: "tierra", distance: "1.00 AU", period: "365 días", color: "#2E7DD2" },
    { name: "Marte", key: "marte", distance: "1.52 AU", period: "687 días", color: "#ff6347" },
    { name: "Júpiter", key: "jupiter", distance: "5.20 AU", period: "12 años", color: "#ff8c42" },
    { name: "Saturno", key: "saturno", distance: "9.54 AU", period: "29 años", color: "#ffde7a" },
    { name: "Urano", key: "urano", distance: "19.22 AU", period: "84 años", color: "#7dd3fc" },
    { name: "Neptuno", key: "neptuno", distance: "30.11 AU", period: "165 años", color: "#6495ed" }
  ];

  return (
    <>
      {/* Panel de información principal */}
      {showInfo && (
        <div className="ui-overlay">
          <div className="planet-info" style={{ pointerEvents: "auto" }}>
            <h3 style={{ margin: "0 0 10px 0", color: "#ffffff" }}>
              🌌 Sistema Solar 3D
            </h3>
            <div style={{ marginBottom: "10px", fontSize: "12px", opacity: 0.8 }}>
              {currentTime.toLocaleTimeString()}
            </div>

            {/* Instrucciones interactivas */}
            <div style={{
              background: "rgba(65, 105, 225, 0.2)",
              border: "1px solid #4169e1",
              borderRadius: "6px",
              padding: "8px",
              marginBottom: "12px",
              fontSize: "11px"
            }}>
              <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
                🖱️ ¡Interactivo!
              </div>
              <div>• Haz clic en cualquier planeta para ver su información detallada</div>
              <div>• Los planetas se iluminan al pasar el cursor</div>
              <div>• Usa la rueda del ratón para hacer zoom</div>
            </div>
            
            <div style={{ maxHeight: "180px", overflowY: "auto" }}>
              {planetData.map((planet, index) => {
                const isSelected = selectedPlanet === planet.key;
                return (
                  <div 
                    key={index} 
                    onClick={() => onPlanetClick && onPlanetClick(planet.key)}
                    style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      margin: "4px 0",
                      fontSize: "11px",
                      cursor: "pointer",
                      padding: "6px",
                      borderRadius: "4px",
                      transition: "all 0.2s ease",
                      background: isSelected ? "rgba(65, 105, 225, 0.3)" : "transparent",
                      border: isSelected ? "1px solid #4169e1" : "1px solid transparent",
                      transform: isSelected ? "scale(1.02)" : "scale(1)"
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    <div 
                      style={{ 
                        width: "10px", 
                        height: "10px", 
                        backgroundColor: planet.color,
                        borderRadius: "50%",
                        marginRight: "8px",
                        boxShadow: isSelected 
                          ? `0 0 8px ${planet.color}, 0 0 12px ${planet.color}` 
                          : `0 0 4px ${planet.color}`,
                        animation: isSelected ? "pulse 2s infinite" : "none"
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <strong style={{ 
                        color: isSelected ? "#ffffff" : "#e0e0e0"
                      }}>
                        {planet.name}
                      </strong>
                      {isSelected && (
                        <span style={{ 
                          marginLeft: "6px", 
                          fontSize: "10px",
                          color: "#4169e1" 
                        }}>
                          ← Seleccionado
                        </span>
                      )}
                    </div>
                    <div style={{ 
                      fontSize: "10px", 
                      opacity: isSelected ? 1 : 0.7,
                      textAlign: "right",
                      minWidth: "60px",
                      fontWeight: isSelected ? "bold" : "normal"
                    }}>
                      {planet.distance}<br/>
                      {planet.period}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <button 
              onClick={() => setShowInfo(false)}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "10px",
                width: "100%",
                pointerEvents: "auto"
              }}
            >
              Ocultar Panel
            </button>
          </div>
        </div>
      )}

      {/* Botón para mostrar info cuando está oculta */}
      {!showInfo && (
        <button 
          onClick={() => setShowInfo(true)}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: 100,
            padding: "8px 12px",
            background: "rgba(0,0,0,0.7)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "white",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "12px",
            pointerEvents: "auto"
          }}
        >
          📊 Mostrar Panel
        </button>
      )}

      {/* Controles de ayuda actualizados */}
      <div className="controls-help">
        <div><strong>🖱️ Controles:</strong></div>
        <div>• Clic en planetas: Ver información</div>
        <div>• Clic + Arrastrar: Rotar vista</div>
        <div>• Rueda del ratón: Zoom</div>
        <div>• Clic derecho + Arrastrar: Mover</div>
        <div>• ESC: Cerrar modal</div>
      </div>
    </>
  );
}