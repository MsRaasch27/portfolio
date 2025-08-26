import { useState } from "react";
import { useSEO } from "../hooks/useSEO";
import "../styles/home.css";
import exampleImage from "../assets/hardhat.png";
import engineerhatImage from "../assets/wizardhat.png";
import teacherhatImage from "../assets/gradhat.png";
import entrepreneurImage from "../assets/captainhat.png";

export default function Home() {
  const [hoveredQuadrant, setHoveredQuadrant] = useState(null);
  
  useSEO({
    title: "Ray Raasch - Portfolio | Full-Stack Engineer, Educator & Entrepreneur",
    description: "Ray Raasch is a versatile professional wearing many hats: full-stack web development engineer, educator, and entrepreneur. Explore my portfolio showcasing engineering projects, educational services, and entrepreneurial ventures.",
    keywords: ["Ray Raasch", "full-stack engineer", "web developer", "educator", "entrepreneur", "React", "Node.js", "portfolio", "tutoring", "e-commerce"],
    url: "https://rayraasch.com/"
  });
  
  const tiles = [
    { id: 1, className: "q1", text: "Engineer", image: engineerhatImage, tooltip: "Check out my GitHub" }, // top-left
    { id: 2, className: "q2", text: "Educator", image: teacherhatImage, tooltip: "Book me as a tutor" }, // top-right 
    { id: 3, className: "q3", text: "Entrepreneur", image: entrepreneurImage, tooltip: "Visit my E-Commerce site" }, // bottom-left
    { id: 4, className: "q4", text: "Example", image: exampleImage, tooltip: "See my volunteer work" }, // bottom-right
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ray Raasch",
          "jobTitle": "Full-Stack Web Development Engineer",
          "description": "Full-stack web development engineer, educator, and entrepreneur",
          "url": "https://rayraasch.com",
          "sameAs": [
            "https://github.com/MsRaasch27"
          ],
          "knowsAbout": [
               "Python", "PHP", "JavaScript", "TypeScript", "Laravel", "Flask", "Django", "React", "Node.js", "NestJs",
    "Relational/Non-Relational DBs", "SQL", "AWS", "Docker", "Git", "LangChain", "OpenAI", "API"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Filament Games"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Fox Valley Technical College"
          }
        })}
      </script>
      
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
                window.location.href = '/engineer';
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
    </>
  );
}
