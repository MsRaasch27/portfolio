import { useState } from "react";
import "../styles/home.css";
import exampleImage from "../assets/hardhat.png";
import engineerhatImage from "../assets/wizardhat.png";
import teacherhatImage from "../assets/gradhat.png";
import entrepreneurImage from "../assets/captainhat.png";

export default function Home() {
  const [hoveredQuadrant, setHoveredQuadrant] = useState(null);
  
  const tiles = [
    { id: 1, className: "q1", text: "Engineer", image: engineerhatImage }, // top-left
    { id: 2, className: "q2", text: "Educator", image: teacherhatImage }, // top-right 
    { id: 3, className: "q3", text: "Entrepreneur", image: entrepreneurImage }, // bottom-left
    { id: 4, className: "q4", text: "Example", image: exampleImage }, // bottom-right
  ];

  return (
    <section className="viewport">
      {/* Bottom layer: 2x2 grid with colored quadrants and text */}
      <div className="grid-2x2">
        {tiles.map(t => (
          <div 
            key={t.id} 
            className={`quad ${t.className}`}
            onMouseEnter={() => setHoveredQuadrant(t.className)}
            onMouseLeave={() => setHoveredQuadrant(null)}
          >
            <div>{t.text}</div>
          </div>
        ))}
      </div>

      {/* Top layer: Hat images and center overlay */}
      <div className="overlay-layer">
        {/* Center overlay */}
        <div className="center-overlay" aria-hidden="true" />
        
        {/* Hat images positioned relative to center overlay */}
        {tiles.map(t => (
          <img 
            key={`hat-${t.id}`} 
            src={t.image} 
            alt="" 
            className={`hat-image ${t.className}-hat ${hoveredQuadrant === t.className ? 'hovered' : ''}`}
          />
        ))}
      </div>
    </section>
  );
}
