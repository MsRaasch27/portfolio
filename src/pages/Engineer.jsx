import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import "../styles/Engineer.css";

export default function Engineer() {
  useSEO({
    title: "Ray Raasch - Full-Stack Web Development Engineer | Portfolio",
    description: "Full-stack web development engineer specializing in React, Node.js, Python, and modern web technologies. View client projects, GitHub contributions, and technical skills.",
    keywords: ["Ray Raasch", "full-stack engineer", "web developer", "Python", "PHP", "JavaScript", "TypeScript", "Laravel", "Flask", "Django", "React", "Node.js", "NestJs",
      "Relational/Non-Relational DBs", "SQL", "AWS", "Docker", "Git", "LangChain", "OpenAI", "client projects", "work for hire"],
    url: "https://rayraasch.com/engineer"
  });

  const engineerOptions = [
    {
      id: 1,
      title: "Client Projects",
      description: "View my portfolio of completed client work",
      icon: "💼",
      link: "/client-projects",
      external: false,
      color: "var(--accent)"
    },
    {
      id: 2,
      title: "GitHub Profile",
      description: "Explore my open source contributions and code repositories",
      icon: "🐙",
      link: "https://github.com/MsRaasch27",
      external: true,
      color: "#333"
    },
    {
      id: 3,
      title: "Let's Talk",
      description: "Got a project idea?  Tell me all about it!",
      icon: "📅",
      link: "https://forms.gle/SKGoLbEzbmkNUcVf9",
      external: true,
      color: "#28a745"
    }
  ];

  const skills = [
    "Python", "PHP", "JavaScript", "TypeScript", "Laravel", "Flask", "Django", "React", "Node.js", "NestJs",
    "Relational/Non-Relational DBs", "SQL", "AWS", "Docker", "Git", "LangChain", "OpenAI"
  ];

  return (
    <div className="engineer-page">

      <div className="options-grid">
        {engineerOptions.map(option => (
          <div key={option.id} className="option-card">
            <div className="option-icon" style={{ backgroundColor: option.color }}>
              <span className="icon">{option.icon}</span>
            </div>
            <div className="option-content">
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <a 
                href={option.link} 
                className="option-link"
                target={option.external ? "_blank" : "_self"}
                rel={option.external ? "noopener noreferrer" : ""}
              >
                {option.title === "Book Me" ? "Get Started" : "View Details"}
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="about-section">
        <h2>About My Engineering Work</h2>
        <div className="about-content">
          <p>
            I specialize in building scalable, user-friendly web applications using modern technologies. 
            With expertise in both frontend and backend development, I create complete solutions that 
            solve real business problems.
          </p>
          <p>
            My approach combines technical excellence with clear communication, ensuring that every 
            project is delivered on time and exceeds expectations. Whether you need a new application 
            built from scratch or improvements to existing systems, I'm here to help.
          </p>
        </div>
      </div>
    </div>
  );
} 