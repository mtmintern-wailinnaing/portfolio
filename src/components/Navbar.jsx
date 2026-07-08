import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">WLN</span>
          <span className="logo-bracket">/&gt;</span>
        </a>
        
        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className="navbar-link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar-theme-item">
            <ThemeToggle />
          </li>
          <li className="navbar-cv-item">
            <a href="/MyResume.pdf" download className="navbar-cv-button">
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
