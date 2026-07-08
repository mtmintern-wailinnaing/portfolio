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
            Results-driven Junior Full-Stack Developer with <strong>5 years of dedicated study and practical project development</strong> across 
            <strong> 32+ public GitHub repositories</strong>. Deep specialization in <strong>PHP & Laravel backend architecture</strong> with proven 
            expertise in RESTful API design, MVC patterns, and database management.
          </p>
        </AnimateIn>
        <AnimateIn delay={300}>
          <p>
            Strong frontend foundation with <strong>React.js</strong>, <strong>Next.js</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>Tailwind CSS</strong>, 
            focused on building responsive, accessible, and performant user interfaces. Additionally experienced in 
            <strong> Machine Learning & NLP</strong> with Python, Hugging Face Transformers, and data mining techniques. 
            Passionate about writing clean, maintainable code and contributing to collaborative engineering teams.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}

export default Summary
