import { useEffect } from "react";
import moonImage from "../assets/real-images/moon.jpg";
import jupiterImage from "../assets/real-images/jupiter.jpg";
import marteImage from "../assets/real-images/marte.jpg";
import mercurioImage from "../assets/real-images/mercurio.jpg";
import uranoImage from "../assets/real-images/urano.jpg";
import tierraImage from "../assets/real-images/tierra.jpg";
import venusImage from "../assets/real-images/venus.jpg";
import saturnoImage from "../assets/real-images/saturno.jpg";
import solImage from "../assets/real-images/sol.jpg";
import neptuneImage from "../assets/real-images/neptune.jpg";

const planetData = {
  sol: {
    name: "Sol",
    type: "Estrella",
    diameter: "1,392,700 km",
    mass: "1.989 × 10³⁰ kg",
    temperature: "5,778 K (superficie)",
    composition: "73% Hidrógeno, 25% Helio",
    age: "4.6 mil millones de años",
    realImage: solImage,
    source: "https://science.nasa.gov/sun/",
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
    realImage: mercurioImage,
    source: "https://science.nasa.gov/mercury/",
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
    realImage: venusImage,
    source: "https://science.nasa.gov/venus/",
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
    realImage: tierraImage,
    source: "https://science.nasa.gov/earth/facts/",
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
    realImage: marteImage,
    source: "https://science.nasa.gov/mars/",
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
    realImage: jupiterImage,
    source: "https://science.nasa.gov/jupiter/",
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
    realImage: saturnoImage,
    source: "https://science.nasa.gov/saturn/",
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
    realImage: uranoImage,
    source: "https://science.nasa.gov/uranus/",
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
    realImage: neptuneImage,
    source: "https://science.nasa.gov/neptune/",
    facts: [
      "El planeta más alejado del Sol",
      "Tiene los vientos más fuertes: hasta 2,100 km/h",
      "Su luna más grande, Tritón, orbita en sentido retrógrado",
      "Fue descubierto mediante cálculos matemáticos",
      "Emite más energía de la que recibe del Sol"
    ],
    color: "#4169e1"
  },
  luna: {
    name: "Luna",
    type: "Satélite natural",
    diameter: "3,474 km",
    mass: "7.342 × 10²² kg",
    distance: "384,400 km de la Tierra",
    period: "27.3 días terrestres",
    temperature: "120°C (día) / -230°C (noche)",
    realImage: moonImage,
    source: "https://science.nasa.gov/moon/",
    facts: [
      "Es el quinto satélite más grande del sistema solar",
      "Siempre muestra la misma cara a la Tierra (rotación sincrónica)",
      "Se formó hace 4.5 mil millones de años por un gran impacto",
      "Se aleja de la Tierra 3.8 cm cada año",
      "Sus fases lunares han sido usadas como calendario por milenios",
      "El lado oscuro de la Luna no recibe señales de radio de la Tierra"
    ],
    color: "#c0c0c0"
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

        {/* Sección de foto real */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ 
            color: planet.color, 
            marginBottom: '10px',
            fontSize: '18px'
          }}>
            📸 Imagen Real
          </h3>
          <div style={{
            border: `2px solid ${planet.color}40`,
            borderRadius: '8px',
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            textAlign: 'center'
          }}>
            {planet.realImage ? (
              <img 
                src={planet.realImage}
                alt={`Imagen real de ${planet.name}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '200px',
                  borderRadius: '6px',
                  objectFit: 'cover',
                  border: `1px solid ${planet.color}60`
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
            ) : (
              <div style={{
                padding: '40px 20px',
                fontSize: '14px',
                opacity: 0.7,
                color: planet.color
              }}>
                📷 Imagen en preparación
                <br />
                <span style={{ fontSize: '12px', opacity: 0.5 }}>
                  Pronto se agregará una imagen real de {planet.name}
                </span>
              </div>
            )}
            <div style={{
              display: planet.realImage ? 'none' : 'block',
              padding: '40px 20px',
              fontSize: '14px',
              opacity: 0.7,
              color: planet.color
            }}>
              📷 Imagen en preparación
              <br />
              <span style={{ fontSize: '12px', opacity: 0.5 }}>
                Pronto se agregará una imagen real de {planet.name}
              </span>
            </div>
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

        {/* Fuente */}
        {planet.source && (
          <div style={{
            marginTop: '20px',
            paddingTop: '15px',
            borderTop: `1px solid ${planet.color}40`,
            fontSize: '12px'
          }}>
            <div style={{
              color: planet.color,
              fontWeight: 'bold',
              marginBottom: '8px',
              fontSize: '14px'
            }}>
              📚 Fuente de Información
            </div>
            <a 
              href={planet.source}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#87ceeb',
                textDecoration: 'none',
                fontSize: '12px',
                opacity: 0.9,
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.color = planet.color;
                e.target.style.textDecoration = 'underline';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#87ceeb';
                e.target.style.textDecoration = 'none';
              }}
            >
              🔗 NASA Science - {planet.name}
            </a>
          </div>
        )}

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