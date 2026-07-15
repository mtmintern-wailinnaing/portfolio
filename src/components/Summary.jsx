import React from 'react'
import AnimateIn from './AnimateIn'

const Summary = () => {
  return (
    <section className="section summary" id="about">
      <AnimateIn delay={100}>
        <div className="section-title-wrapper">
          <span className="section-number">00.</span>
          <h2 className="section-title">Professional Summary</h2>
        </div>
      </AnimateIn>
      <div className="summary-content">
        <AnimateIn delay={200}>
          <p>
            Results-driven Junior Full-Stack Developer with <strong>5 years of self-directed study and hands-on project work</strong>,
            with applied projects consolidated on GitHub. Primary focus is <strong>PHP & Laravel backend architecture</strong> —
            RESTful APIs, MVC patterns, Eloquent ORM, and database optimization.
          </p>
        </AnimateIn>
        <AnimateIn delay={300}>
          <p>
            Specializing in modern full-stack delivery with <strong>Laravel + Inertia.js + React</strong>, building SPA-style dashboards,
            clean API layers, and polished interfaces with <strong>Tailwind CSS</strong>. Comfortable across a broader stack —
            <strong>Next.js</strong>, <strong>Livewire</strong>, <strong>Python</strong>, <strong>Java</strong>, and <strong>C# / Spring Boot</strong> —
            gained through active, continuous learning. Currently deepening <strong>Next.js App Router / Server Components</strong>
            during an internship at MTM Myanmar.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}

export default Summary
