import React from "react";
import AnimateIn from "./AnimateIn";
import Icons from "./Icons";

const iconMap = {
  "Core — PHP / Laravel / Inertia": Icons.backend,
  Frontend: Icons.frontend,
  "Developer Tools": Icons.tools,
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Core — PHP / Laravel / Inertia",
      icon: "⚙️",
      description:
        "Backend architecture, RESTful APIs, and database design with Laravel & Inertia.js.",
      skills: [
        "PHP 8+",
        "Laravel",
        "Inertia.js",
        "Eloquent ORM",
        "MySQL",
        "REST APIs",
        "Sanctum / Passport",
      ],
    },
    {
      title: "Frontend",
      icon: "🎨",
      description: "SPA user interfaces with React, Next.js, and Tailwind CSS.",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Responsive Design",
      ],
    },
    {
      title: "Developer Tools",
      icon: "🛠️",
      description: "Daily workflow: version control, builds, and API testing.",
      skills: [
        "Git / GitHub",
        "Composer",
        "npm / yarn",
        "Vite",
        "Postman",
        "VS Code",
      ],
    },
  ];

  return (
    <section className="section skills" id="skills">
      <AnimateIn delay={100}>
        <div className="section-title-wrapper">
          <span className="section-number">01.</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <p className="skills-subtitle">
          Currently deepening: Next.js App Router &amp; React Server Components
        </p>
      </AnimateIn>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <AnimateIn key={index} delay={150 + index * 100}>
            <div className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{iconMap[category.title]}</span>
                <h3 className="skill-card-title">{category.title}</h3>
              </div>
              <p className="skill-desc">{category.description}</p>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => {
                  return (
                    <li key={idx} className="skill-row">
                      <span className="skill-name">{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </AnimateIn>
        ))}
      </div>
      <p className="skills-familiar" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '1.5rem', textAlign: 'center' }}>Also familiar / exploring: Livewire · Python · Java · C# · Spring Boot</p>
    </section>
  );
};

export default Skills;
