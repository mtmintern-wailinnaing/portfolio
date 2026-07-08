import React from 'react'
import AnimateIn from './AnimateIn'

const Footer = () => {
  return (
    <footer className="footer">
      <AnimateIn delay={100}>
        <div className="footer-content">
          <p className="footer-text">
            References and full project portfolio available upon request.
          </p>
          <div className="footer-links">
            <a href="mailto:wailinnaing.dev@email.com" className="footer-link">Email</a>
            <a href="https://github.com/wailinnaing432019" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href="https://linkedin.com/in/wailinnaing" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="https://wailinnaing-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="footer-link">Portfolio</a>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Wai Linn Naing. Built with React.js.
          </p>
        </div>
      </AnimateIn>
    </footer>
  )
}

export default Footer
