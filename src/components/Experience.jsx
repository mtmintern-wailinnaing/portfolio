import React from 'react'
import AnimateIn from './AnimateIn'

const Experience = () => {
  const experiences = [
    {
      title: 'Backend Security & API Design',
      description: 'Implementing secure authentication flows, role-based authorization, input sanitization, and CSRF protection in Laravel applications.'
    },
    {
      title: 'Database Optimization',
      description: 'Designing normalized schemas, writing efficient queries, managing migrations and seeders, and leveraging Eloquent relationships for data integrity.'
    },
    {
      title: 'Frontend Engineering',
      description: 'Building reusable, component-based UIs with React.js and Next.js, managing state with Hooks and Context API, and ensuring responsive layouts across devices.'
    },
    {
      title: 'Broader Stack & Exploration',
      description: 'Familiar with Livewire, Python, Java, C#, and Spring Boot, picked up through continuous, self-directed learning alongside the core PHP/Laravel/React focus.'
    },
    {
      title: 'Code Quality & Version Control',
      description: 'Writing clean, well-documented code; conducting code reviews; and maintaining organized Git workflows across all my projects.'
    },
    {
      title: 'Continuous Learning',
      description: 'Actively expanding expertise in Next.js App Router, modern PHP patterns, advanced Laravel features, and contemporary frontend tooling.'
    }
  ]

  return (
    <section className="section experience" id="experience">
      <AnimateIn delay={100}>
        <div className="section-title-wrapper">
          <span className="section-number">03.</span>
          <h2 className="section-title">Practical & Project Experience</h2>
        </div>
      </AnimateIn>
      <div className="experience-grid">
        {experiences.map((item, index) => (
          <AnimateIn key={index} delay={150 + index * 100}>
            <div className="experience-card">
              <div className="experience-icon">▹</div>
              <div className="experience-content">
                <h3 className="experience-title">{item.title}</h3>
                <p className="experience-description">{item.description}</p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}

export default Experience
