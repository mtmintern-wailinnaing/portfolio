import React from 'react'
import AnimateIn from './AnimateIn'
import Icons from './Icons'

const iconMap = {
  'Backend & Databases': Icons.backend,
  'Frontend': Icons.frontend,
  'Machine Learning & Data': Icons.ai,
  'Developer Tools': Icons.tools,
}

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend & Databases',
      icon: '⚙️',
      skills: [
        'PHP 8+',
        'Laravel',
        'MySQL',
        'REST APIs',
        'Sanctum / Passport',
        'Eloquent ORM',
        'Inertia.js'
      ]
    },
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        'JavaScript',
        'React.js',
        'Next.js',
        'Angular',
        'HTML5',
        'CSS3 / Tailwind',
        'Responsive Design'
      ]
    },
    {
      title: 'Machine Learning & Data',
      icon: '🤖',
      skills: [
        'Python',
        'NLP / Transformers',
        'Hugging Face',
        'Pandas / NumPy',
        'Scikit-learn',
        'LoRA / Quantization'
      ]
    },
    {
      title: 'Developer Tools',
      icon: '🛠️',
      skills: [
        'Git / GitHub',
        'Composer',
        'npm / yarn',
        'Vite',
        'Postman',
        'VS Code',
        'Prisma ORM'
      ]
    }
  ]

  const skillLevels = {
    'PHP 8+': 90,
    'Laravel': 92,
    'MySQL': 88,
    'REST APIs': 90,
    'Sanctum / Passport': 85,
    'Eloquent ORM': 88,
    'Inertia.js': 80,
    'JavaScript': 85,
    'React.js': 88,
    'Next.js': 82,
    'Angular': 75,
    'HTML5': 95,
    'CSS3 / Tailwind': 90,
    'Responsive Design': 92,
    'UI/UX Fundamentals': 78,
    'Python': 80,
    'NLP / Transformers': 75,
    'Hugging Face': 72,
    'Pandas / NumPy': 70,
    'Scikit-learn': 78,
    'LoRA / Quantization': 68,
    'Git / GitHub': 90,
    'Composer': 85,
    'npm / yarn': 88,
    'Vite': 82,
    'Postman': 85,
    'VS Code': 92,
    'Prisma ORM': 75,
  }

  return (
    <section className="section skills" id="skills">
      <AnimateIn delay={100}>
        <div className="section-title-wrapper">
          <span className="section-number">01.</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>
      </AnimateIn>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <AnimateIn key={index} delay={150 + index * 100}>
            <div className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{iconMap[category.title]}</span>
                <h3 className="skill-card-title">{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => {
                  const level = skillLevels[skill] || 80
                  return (
                    <li key={idx} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-bullet">▹</span>
                        <span className="skill-name">{skill}</span>
                        <span className="skill-level">{level}%</span>
                      </div>
                      <div className="skill-bar-wrapper">
                        <div className="skill-bar" style={{ '--level': `${level}%` }}>
                          <div className="skill-bar-fill" data-level={level}></div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}

export default Skills
