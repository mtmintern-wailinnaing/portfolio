import React from 'react'
import AnimateIn from './AnimateIn'

const Projects = () => {
  const projects = [
    {
      title: 'Student Management System',
      subtitle: 'Laravel + Inertia.js + React + MySQL',
      description: 'A comprehensive system designed for tracking student academic records, featuring complex performance analysis and heavy query optimization.',
      highlights: [
        'Built with Laravel backend, Inertia.js for seamless SPA experience, and React frontend',
        'Implemented database indexing for performance optimization and complex query handling',
        'Developed custom GPA calculation logic with clean dashboard UI using Tailwind CSS',
        'Managed student records, course enrollments, and academic performance tracking'
      ],
      tech: ['Laravel', 'Inertia.js', 'React', 'MySQL', 'Tailwind CSS'],
      github: 'https://github.com/wailinnaing432019/Student-Management-Sys'
    },
    {
      title: 'Electrical POS System',
      subtitle: 'Laravel + React + Tailwind CSS',
      description: 'A robust Point of Sale system built to manage inventory, track transactions, and generate analytical sales reports.',
      highlights: [
        'Developed full-featured POS system with Laravel API backend and React frontend',
        'Implemented real-time stock alerts and inventory management with low-stock notifications',
        'Built smooth transaction handling with secure authentication and role-based access',
        'Generated analytical sales reports with data visualization and export capabilities'
      ],
      tech: ['Laravel', 'React', 'Tailwind CSS', 'MySQL', 'REST API'],
      github: 'https://github.com/wailinnaing432019/electronic_pos_market_basket'
    },
    {
      title: 'Myanmar Text Summarization Model',
      subtitle: 'Python + Hugging Face + NLP',
      description: 'An NLP project focused on fine-tuning an encoder-decoder model to automatically generate concise summaries of text in the Myanmar language.',
      highlights: [
        'Fine-tuned mbart-large-50 model for Myanmar text summarization using Hugging Face Transformers',
        'Implemented LoRA and 4-bit Quantization for efficient training on Google Colab',
        'Successfully trained on Myanmar datasets to produce contextual text summaries',
        'Explored data mining techniques including Association Rule Mining and FP-Growth'
      ],
      tech: ['Python', 'Hugging Face', 'NLP', 'LoRA', 'Google Colab', 'mbart-large-50'],
      github: 'https://github.com/wailinnaing432019/market-basket-analysis'
    },
    {
      title: 'Finance Tracker App',
      subtitle: 'Laravel + PHP + MySQL',
      description: 'A personal finance management application for tracking expenses, income, and financial goals.',
      highlights: [
        'Built with Laravel framework featuring user authentication and transaction management',
        'Designed MySQL database with optimized relationships for financial data tracking',
        'Implemented expense categorization, budget limits, and financial reporting features',
        'Created responsive UI with clean architecture and RESTful API design'
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Blade'],
      github: 'https://github.com/wailinnaing432019/FinanceTrackerAppWithLaravel'
    },
    {
      title: 'Canteen Management System',
      subtitle: 'Laravel + PHP + MySQL',
      description: 'A digital canteen management solution for handling orders, menu items, and customer transactions.',
      highlights: [
        'Developed full-stack application with Laravel backend and responsive frontend',
        'Implemented order management system with real-time updates and notifications',
        'Built inventory tracking for food items with stock management features',
        'Designed clean, user-friendly interface with role-based access for staff and customers'
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Blade'],
      github: 'https://github.com/wailinnaing432019/CanteenManagementSystem-Laravel-'
    },
    {
      title: 'CyberSocial',
      subtitle: 'JavaScript + Social Platform',
      description: 'A social media platform concept built with modern JavaScript featuring interactive user interfaces.',
      highlights: [
        'Built interactive social platform with vanilla JavaScript and modern ES6+ features',
        'Implemented real-time messaging, post creation, and user interaction features',
        'Designed responsive UI with clean code architecture and component-based development patterns',
        'Practiced modern frontend workflows using Git, npm, and Vite'
      ],
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
      github: 'https://github.com/wailinnaing432019/CyberSocial'
    }
  ]

  return (
    <section className="section projects" id="projects">
      <AnimateIn delay={100}>
        <div className="section-title-wrapper">
          <span className="section-number">02.</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
      </AnimateIn>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <AnimateIn key={index} delay={150 + index * 100}>
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-subtitle">{project.subtitle}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub →
                </a>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}

export default Projects
