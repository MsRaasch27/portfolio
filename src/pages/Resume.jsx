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
  {
    title: "Process Automation Specialist",
    company: "Skyline Technologies",
    date: "May 2018 to June 2019",
    duties:
      "Worked with a team to create technology solutions to fit clients’ business needs. Created custom Sharepoint sites and performed data migration using Sharegate. Built large scale process automation solutions for clients using Nintex, Microsoft Flow and PowerApps. Trained others on process automation tools. Prepared mockups and knowledge sharing presentations to explain current projects.",
  },
  {
    title: "Alderperson",
    company: "City of Appleton Wisconsin",
    date: "April 2018 to June 2019",
    duties:
      "Representing District 6 at Appleton's Common Council. Maintaining communication between constituents and local government through outreach and social media presence. Currently serving on the Utilities Committee, Board of Health, and as Chair of the Human Resources/Information Technology Committee. Previously served as Chair of the Historic Preservation Commission.Representing District 6 at Appleton's Common Council. Maintaining communication between constituents and local government through outreach and social media presence. Currently serving on the Utilities Committee, Board of Health, and as Chair of the Human Resources/Information Technology Committee. Previously served as Chair of the Historic Preservation Commission.",
  },
  {
    title: "Certified Nursing Assistant",
    company: "BrightStar Care",
    date: "December 2014 to June 2019",
    duties:
      "Identified patient needs and delivered quality care including housekeeping duties, range of motion exercises, hygiene, medication reminders, billpaying/written correspondence, conversation and errands. Empowered patients to become more independent, and collaborated with family members to ensure superior results.",
  },
  {
    title: "Community Health Promoter",
    company: "Diverse & Resilient Inc",
    date: "June 2017 to June 2018",
    duties:
      "Orchestrated community discussions to promote public health, designed and implemented social media campaigns to teach others about issues of diversity, attended workshops and educational events, and recorded and analyzed interactions to develop best practices. One year program, funded by grant money.",
  },
  {
    title: "Information Technology Contractor",
    company: "TEKSystems",
    date: "November 2017 to May 2018",
    duties:
      "Provide short term technical support to clients such as Hospital Sisters Health System and Greatland Corporation. Contracts are limited term and based on client's volume of support requests. Contracts require the ability to quickly become familiar with client's services and/or products, strong technical knowledge, and excellent customer service skills to provide support over the phone and via chat.",
  },
  {
    title: "Clinical Assistant",
    company: "Fox Valley Hematology & Oncology",
    date: "September 2016 to August 2017",
    duties:
      "Scheduled patients with complex medical needs across multiple facilities.  Coordinated all aspects of patient medical care, prepped patients for outpatient procedures and recorded medical intake information.",
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
  "Python", "PHP", "JavaScript", "TypeScript", "Laravel", "Flask", "Django", "React", "Node.js", "NestJs",
  "Relational/Non-Relational DBs", "SQL", "AWS", "Docker", "Git", "LangChain", "OpenAI", "API",
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
