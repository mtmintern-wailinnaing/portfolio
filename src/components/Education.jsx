import React from "react";
import AnimateIn from "./AnimateIn";
import Icons from "./Icons";

const Education = () => {
  const education = [
    {
      type: "degree",
      title: "Degree in Computer Science",
      institution:
        "University of Computer Studies(Meiktila) / Mg Wai Linn Naing, Meiktila, Myanmar",
      year: "2027(expected)",
    },
  ];

  const certifications = [
    "Full-Stack Web Development (5 years of applied, project-based learning)",
    "PHP & Laravel Ecosystem Deep-Dive (Eloquent, Queues, Events, API Resources, Inertia.js)",
    "Modern JavaScript & React Ecosystem (State Management, Performance Optimization, Testing)",
    "Angular Framework (TypeScript, Component Architecture, Services)",
    "Machine Learning & NLP with Python, Hugging Face, and Transformers",
    "Data Mining & Market Basket Analysis (FP-Growth, Association Rules)",
  ];

  const currentlyLearning = [
    "Next.js (App Router, Server Components, Server Actions, ISR/SSR)",
    "Advanced Laravel Patterns (Queues, Events, Broadcasting, Horizon)",
    "Testing with PHPUnit, Pest, and Jest/React Testing Library",
    "TypeScript integration with Laravel, React, and Angular",
  ];

  return (
    <section className="section education" id="education">
      <AnimateIn delay={100}>
        <div className="section-title-wrapper">
          <span className="section-number">04.</span>
          <h2 className="section-title">Education & Continuous Learning</h2>
        </div>
      </AnimateIn>

      <div className="education-block">
        <AnimateIn delay={150}>
          <h3 className="subsection-title">
            <span className="subsection-icon">{Icons.education}</span>
            Formal Education
          </h3>
        </AnimateIn>
        {education.map((edu, index) => (
          <AnimateIn key={index} delay={200}>
            <div className="education-item">
              <div className="education-title">{edu.title}</div>
              <div className="education-institution">
                {edu.institution} — {edu.year}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      <div className="education-block">
        <AnimateIn delay={250}>
          <h3 className="subsection-title">
            <span className="subsection-icon">{Icons.certificate}</span>
            Certifications & Self-Directed Training
          </h3>
        </AnimateIn>
        <ul className="education-list">
          {certifications.map((cert, index) => (
            <AnimateIn key={index} delay={300 + index * 80}>
              <li>{cert}</li>
            </AnimateIn>
          ))}
        </ul>
      </div>

      <div className="education-block">
        <AnimateIn delay={500}>
          <h3 className="subsection-title">
            <span className="subsection-icon">{Icons.rocket}</span>
            Currently Learning
          </h3>
        </AnimateIn>
        <ul className="education-list learning-list">
          {currentlyLearning.map((item, index) => (
            <AnimateIn key={index} delay={550 + index * 80}>
              <li>{item}</li>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
