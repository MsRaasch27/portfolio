import { useState } from "react";
import "../styles/home.css";
import exampleImage from "../assets/hardhat.png";
import engineerhatImage from "../assets/wizardhat.png";
import teacherhatImage from "../assets/gradhat.png";
import entrepreneurImage from "../assets/captainhat.png";

export default function Home() {
  const [hoveredQuadrant, setHoveredQuadrant] = useState(null);
  
  const tiles = [
    { id: 1, className: "q1", text: "Engineer", image: engineerhatImage, tooltip: "Check out my GitHub" }, // top-left
    { id: 2, className: "q2", text: "Educator", image: teacherhatImage, tooltip: "Book me as a tutor" }, // top-right 
    { id: 3, className: "q3", text: "Entrepreneur", image: entrepreneurImage, tooltip: "Visit my E-Commerce site" }, // bottom-left
    { id: 4, className: "q4", text: "Example", image: exampleImage, tooltip: "See my volunteer work" }, // bottom-right
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
            onClick={() => {
              if (t.className === 'q1') {
                window.open('https://github.com/MsRaasch27', '_blank');
              } else if (t.className === 'q2') {
                window.open('https://raystutorsite.web.app/', '_blank');
              } else if (t.className === 'q3') {
                window.open('https://digitalcuriocabinet.com/', '_blank');
              } else if (t.className === 'q4') {
                window.location.href = '/volunteer';
              }
            }}
            style={{ cursor: 'pointer' }}
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
        
        {/* Tooltips */}
        {tiles.map(t => (
          t.tooltip && (
            <div 
              key={`tooltip-${t.id}`}
              className={`tooltip ${t.className}-tooltip ${hoveredQuadrant === t.className ? 'visible' : ''}`}
            >
              {t.tooltip}
            </div>
          )
        ))}
      </div>
    </section>
  );
}
