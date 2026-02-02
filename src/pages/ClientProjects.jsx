import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import wilsonCenterVideo from "../assets/wilson_center.mp4";
import "../styles/ClientProjects.css";

export default function ClientProjects() {
  useSEO({
    title: "Ray Raasch - Client Projects | Web Development Portfolio",
    description: "View Ray Raasch's client projects including the Wilson Center Orbit Interactive data visualization platform. Showcasing impactful web applications built with React, D3.js, and modern technologies.",
    keywords: ["Ray Raasch", "client projects", "web development", "Wilson Center", "data visualization", "React", "D3.js", "Pixi.js", "interactive applications", "portfolio"],
    url: "https://rayraasch.com/client-projects"
  });

  return (
    <div className="client-projects-page">
      <div className="page-header">
        <Link to="/engineer" className="back-button">
          ← Back to Engineer
        </Link>
      </div>

      <h2 className="project-title">Wilson Center Orbit Interactive</h2>

      <div className="project-section">
        <div className="project-info">
          <div className="project-details">
            <div className="project-tech">
              <h3>Technologies Used:</h3>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">D3.js</span>
                <span className="tech-tag">Pixi.js</span>
                <span className="tech-tag">Vite</span>
                <span className="tech-tag">Redux</span>
                <span className="tech-tag">HTML/CSS</span>
              </div>
            </div>
            <p>
              I developed an interactive data visualization platform for the Wilson Center, 
              a prestigious think tank in Washington, DC. This project showcases their extensive 
              research and analysis through an engaging, user-friendly interface.
            </p>
            <div className="project-links">
              <a 
                href="https://www.wilsoncenter.org/interactives/orbit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit Live Site →
              </a>
            </div>
          </div>
        </div>

        <div className="iframe-container">
          <video
            src={wilsonCenterVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="project-iframe"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="more-projects">
        <h2>More Projects Coming Soon</h2>
        <p>
          I'm currently working on additional client projects that will be showcased here. 
          Each project demonstrates my commitment to creating meaningful, impactful web applications 
          that solve real-world problems.
        </p>
      </div>
    </div>
  );
} 