import { useEffect } from "react";

const planetData = {
  sol: {
    name: "Sol",
    type: "Estrella",
    diameter: "1,392,700 km",
    mass: "1.989 × 10³⁰ kg",
    temperature: "5,778 K (superficie)",
    composition: "73% Hidrógeno, 25% Helio",
    age: "4.6 mil millones de años",
    facts: [
      "Contiene el 99.86% de la masa del sistema solar",
      "Su núcleo alcanza 15 millones de grados Celsius",
      "Convierte 4 millones de toneladas de materia en energía cada segundo",
      "La luz del Sol tarda 8 minutos en llegar a la Tierra"
    ],
    color: "#ffaa00"
  },
  mercurio: {
    name: "Mercurio",
    type: "Planeta rocoso",
    diameter: "4,879 km",
    mass: "3.301 × 10²³ kg",
    distance: "57.9 millones de km del Sol",
    period: "88 días terrestres",
    temperature: "427°C (día) / -173°C (noche)",
    facts: [
      "El planeta más pequeño del sistema solar",
      "No tiene atmósfera ni lunas",
      "Un día en Mercurio dura 59 días terrestres",
      "Tiene la mayor variación de temperatura entre día y noche"
    ],
    color: "#8c7853"
  },
  venus: {
    name: "Venus",
    type: "Planeta rocoso",
    diameter: "12,104 km",
    mass: "4.867 × 10²⁴ kg",
    distance: "108.2 millones de km del Sol",
    period: "225 días terrestres",
    temperature: "462°C (promedio)",
    facts: [
      "El planeta más caliente del sistema solar",
      "Rota en sentido contrario a la mayoría de planetas",
      "Su atmósfera es 96% dióxido de carbono",
      "Un día en Venus dura más que un año venusiano"
    ],
    color: "#ff6b35"
  },
  tierra: {
    name: "Tierra",
    type: "Planeta rocoso",
    diameter: "12,756 km",
    mass: "5.972 × 10²⁴ kg",
    distance: "149.6 millones de km del Sol",
    period: "365.25 días",
    temperature: "15°C (promedio)",
    facts: [
      "El único planeta conocido con vida",
      "71% de su superficie está cubierta de agua",
      "Tiene una luna que estabiliza su rotación",
      "Su atmósfera es 78% nitrógeno y 21% oxígeno",
      "Posee campo magnético que nos protege de radiación solar"
    ],
    color: "#4169e1"
  },
  marte: {
    name: "Marte",
    type: "Planeta rocoso",
    diameter: "6,792 km",
    mass: "6.417 × 10²³ kg",
    distance: "227.9 millones de km del Sol",
    period: "687 días terrestres",
    temperature: "-65°C (promedio)",
    facts: [
      "Conocido como el 'Planeta Rojo' por el óxido de hierro",
      "Tiene dos pequeñas lunas: Fobos y Deimos",
      "Posee el volcán más grande del sistema solar: Monte Olimpo",
      "Sus días duran 24 horas y 37 minutos",
      "Hay evidencia de que tuvo agua líquida en el pasado"
    ],
    color: "#cd5c5c"
  },
  jupiter: {
    name: "Júpiter",
    type: "Gigante gaseoso",
    diameter: "142,984 km",
    mass: "1.898 × 10²⁷ kg",
    distance: "778.5 millones de km del Sol",
    period: "12 años terrestres",
    temperature: "-110°C (promedio)",
    facts: [
      "El planeta más grande del sistema solar",
      "Tiene más de 80 lunas conocidas",
      "Su Gran Mancha Roja es una tormenta gigante",
      "Actúa como 'aspiradora cósmica' protegiendo planetas internos",
      "Está compuesto principalmente de hidrógeno y helio"
    ],
    color: "#d2691e"
  },
  saturno: {
    name: "Saturno",
    type: "Gigante gaseoso",
    diameter: "120,536 km",
    mass: "5.683 × 10²⁶ kg",
    distance: "1.432 mil millones de km del Sol",
    period: "29 años terrestres",
    temperature: "-140°C (promedio)",
    facts: [
      "Famoso por sus espectaculares anillos",
      "Tiene más de 80 lunas, incluyendo Titán",
      "Es menos denso que el agua",
      "Sus anillos están hechos de hielo y roca",
      "Titán tiene lagos de metano líquido"
    ],
    color: "#fad5a5"
  },
  urano: {
    name: "Urano",
    type: "Gigante de hielo",
    diameter: "51,118 km",
    mass: "8.681 × 10²⁵ kg",
    distance: "2.867 mil millones de km del Sol",
    period: "84 años terrestres",
    temperature: "-195°C (promedio)",
    facts: [
      "Rota de lado, con inclinación de 98 grados",
      "Tiene anillos débiles y 27 lunas conocidas",
      "Es el planeta más frío del sistema solar",
      "Está compuesto de agua, metano y hielo de amoníaco",
      "Un día dura 17 horas terrestres"
    ],
    color: "#4fd0e3"
  },
  neptuno: {
    name: "Neptuno",
    type: "Gigante de hielo",
    diameter: "49,528 km",
    mass: "1.024 × 10²⁶ kg",
    distance: "4.515 mil millones de km del Sol",
    period: "165 años terrestres",
    temperature: "-200°C (promedio)",
    facts: [
      "El planeta más alejado del Sol",
      "Tiene los vientos más fuertes: hasta 2,100 km/h",
      "Su luna más grande, Tritón, orbita en sentido retrógrado",
      "Fue descubierto mediante cálculos matemáticos",
      "Emite más energía de la que recibe del Sol"
    ],
    color: "#4169e1"
  }
};

export default function PlanetModal({ selectedPlanet, onClose }) {
  const planet = planetData[selectedPlanet];

  useEffect(() => {
    console.log(`Modal abierto para: ${selectedPlanet}`);
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose, selectedPlanet]);

  if (!planet) return null;

  return (
    <>
      {/* Overlay de fondo */}
      <div 
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          backdropFilter: 'blur(2px)'
        }}
      />
      
      {/* Modal */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(10, 10, 46, 0.95)',
        border: `2px solid ${planet.color}`,
        borderRadius: '12px',
        padding: '20px',
        maxWidth: '500px',
        width: '90%',
        maxHeight: '80vh',
        overflowY: 'auto',
        zIndex: 1001,
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        boxShadow: `0 0 30px ${planet.color}40`,
        backdropFilter: 'blur(10px)'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '15px',
          borderBottom: `1px solid ${planet.color}`,
          paddingBottom: '10px'
        }}>
          <div 
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: planet.color,
              borderRadius: '50%',
              marginRight: '12px',
              boxShadow: `0 0 10px ${planet.color}`
            }}
          />
          <h2 style={{ 
            margin: 0, 
            color: planet.color,
            fontSize: '24px',
            textShadow: `0 0 10px ${planet.color}`
          }}>
            {planet.name}
          </h2>
          <button 
            onClick={onClose}
            style={{
              marginLeft: 'auto',
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '5px',
              borderRadius: '50%',
              width: '35px',
              height: '35px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ×
          </button>
        </div>

        {/* Tipo */}
        <div style={{
          backgroundColor: `${planet.color}20`,
          border: `1px solid ${planet.color}`,
          borderRadius: '6px',
          padding: '8px 12px',
          marginBottom: '15px',
          display: 'inline-block',
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          {planet.type}
        </div>

        {/* Datos básicos */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ 
            color: planet.color, 
            marginBottom: '10px',
            fontSize: '18px'
          }}>
            📊 Datos Básicos
          </h3>
          <div style={{ 
            display: 'grid', 
            gap: '8px',
            fontSize: '14px',
            lineHeight: '1.4'
          }}>
            <div><strong>🌍 Diámetro:</strong> {planet.diameter}</div>
            <div><strong>⚖️ Masa:</strong> {planet.mass}</div>
            {planet.distance && <div><strong>📏 Distancia al Sol:</strong> {planet.distance}</div>}
            <div><strong>🔄 Período orbital:</strong> {planet.period}</div>
            <div><strong>🌡️ Temperatura:</strong> {planet.temperature}</div>
            {planet.composition && <div><strong>⚗️ Composición:</strong> {planet.composition}</div>}
            {planet.age && <div><strong>⏰ Edad:</strong> {planet.age}</div>}
          </div>
        </div>

        {/* Datos curiosos */}
        <div>
          <h3 style={{ 
            color: planet.color, 
            marginBottom: '10px',
            fontSize: '18px'
          }}>
            ✨ Datos Curiosos
          </h3>
          <ul style={{ 
            margin: 0, 
            paddingLeft: '20px',
            fontSize: '14px',
            lineHeight: '1.5'
          }}>
            {planet.facts.map((fact, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>
                {fact}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '20px',
          paddingTop: '15px',
          borderTop: `1px solid ${planet.color}40`,
          textAlign: 'center',
          fontSize: '12px',
          opacity: 0.7
        }}>
          💡 Haz clic fuera del modal o presiona ESC para cerrar
        </div>
      </div>
    </>
  );
}