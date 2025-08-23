import { useSEO } from "../hooks/useSEO";
import "./../styles/resume.css";

const jobs = [
  {
    title: "Web Development Team Lead",
    company: "Filament Games",
    date: "January 2023 to July 2025",
    duties:
      "Providing technical leadership in determining system architecture for bespoke educational experiences based on client needs. Managing a team of developers and facilitating their professional development. Communicating across different departments and working with project managers to manage technical dependencies and communication with stakeholders. Performing code reviews and research spikes into new technologies. Developing both internal tools and applications for clients using TypeScript, React, WordPress, PHP, Python, Django, Flask, NestJS and more. Subject Matter Expert in LangChain & OpenAI.",
  },
  {
    title: "Lead Software Engineer I",
    company: "Best Egg",
    date: "September 2022 to January 2023",
    duties:
      "Maintained codebase for a loan application funnel. Technical stack included WordPress, Django, Flask, Python and PHP scripts, and TypeScript.",
  },
  {
    title: "PHP Developer II",
    company: "Web Courseworks",
    date: "July 2019 to September 2022",
    duties:
      "Fixed bugs, made improvements, and helped fix user problems in the existing codebase in object oriented PHP, HTML, CSS, JSON, JQuery, AJAX, Bootstrap, and JavaScript. Researched, designed and implemented new features in the system including business analysis, technical blueprints, new development, technical review, and quality assurance. Designed and built custom integrations with AMS platforms such as NetForum, Shopify, iMIS & Personify and made improvements to the overall integration process to reduce the need for additional work. Used git to interact with git repository and followed git review and approval workflow. Developed in an agile workflow, monitored work queue in a JIRA ticket system, and completed assigned sprint tickets on time.",
  },

];

const education = [
  {
    title: "AAS in Software Engineering",
    company: "Fox Valley Technical College - Appleton, WI",
    date: "September 2017 to May 2019",
  },
  {
    title: "Bachelor of Arts in History",
    company: "University of Wisconsin - Oshkosh",
    date: "2012",
  },
];

const skills = [
  "PHP", "JavaScript", "Angular", "NestJS", "HTML", "CSS", "SQL",
  "MongoDB", "Java", "Python", "React", "REST APIs",
];

const certifications = ["Certified Scrum Master", "CNA", "TEFL"];

export default function Resume() {
  useSEO({
    title: "Ray Raasch - Resume | Web Development Team Lead & Software Engineer",
    description: "Professional resume of Ray Raasch, Web Development Team Lead at Filament Games with expertise in React, TypeScript, Python, and educational technology. View experience, education, and technical skills.",
    keywords: ["Ray Raasch", "resume", "web development team lead", "software engineer", "Filament Games", "React", "TypeScript", "Python", "educational technology", "LangChain", "OpenAI"],
    url: "https://rayraasch.com/resume"
  });

  return (
    <div className="resume-container">
      <section className="resume-section">
        <h2>Professional Experience</h2>
        {jobs.map((job, idx) => (
          <article className="job-entry" key={idx}>
            <div className="job-title">{job.title}</div>
            <div className="company-name">{job.company}</div>
            <div className="job-date">{job.date}</div>
            {job.duties && <p className="job-duties">{job.duties}</p>}
          </article>
        ))}
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        {education.map((ed, idx) => (
          <article className="job-entry" key={idx}>
            <div className="job-title">{ed.title}</div>
            <div className="company-name">{ed.company}</div>
            <div className="job-date">{ed.date}</div>
          </article>
        ))}
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((s, idx) => (
            <div className="skill-item" key={idx}>{s}</div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        <div className="skills-grid">
          {certifications.map((c, idx) => (
            <div className="skill-item" key={idx}>{c}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
