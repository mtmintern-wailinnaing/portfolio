import React from "react";
import TypingCode from "./TypingCode";
import AnimateIn from "./AnimateIn";

const codeText = `class Developer {
  public function __construct() {
    $this->backend = ['PHP', 'Laravel', 'MySQL'];
    $this->frontend = ['React', 'Next.js', 'Tailwind'];
    $this->focus = 'Laravel + Inertia';
    $this->passion = 'Clean Code & UX';
  }
}`;

const Hero = () => {
  return (
    <header className="hero" id="about">
      <div className="hero-bg-shapes">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
      </div>
      <div className="hero-content">
        <AnimateIn delay={0}>
          <div className="hero-profile">
            <img
              src="https://avatars.githubusercontent.com/u/159546038?v=4"
              alt="Wai Linn Naing"
              className="hero-avatar"
            />
            <div className="hero-badge">Junior Full-Stack Developer</div>
          </div>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h1 className="hero-title">Wai Linn Naing</h1>
        </AnimateIn>
        <AnimateIn delay={200}>
          <p className="hero-subtitle">
            Full-Stack Web Developer focused on PHP & Laravel, building modern
            full-stack apps with Laravel + Inertia.js + React. Continuously
            expanding into Next.js and a broad full-stack toolset.
          </p>
        </AnimateIn>
        <AnimateIn delay={300}>
          <p className="hero-tagline">
            Currently seeking a Junior Web Developer role to contribute to
            real-world software solutions.
          </p>
        </AnimateIn>
        <AnimateIn delay={400}>
          <div className="hero-contact">
            <a href="mailto:wailinnaing.dev@email.com" className="contact-link">
              Email Me
            </a>
            <a
              href="https://github.com/wailinnaing432019"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/wailinnaing"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
            <a href="#contact" className="contact-link contact-link-primary">
              Contact
            </a>
          </div>
        </AnimateIn>
      </div>
      <AnimateIn delay={500}>
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre className="code-content">
              <TypingCode code={codeText} speed={60} />
            </pre>
          </div>
        </div>
      </AnimateIn>
    </header>
  );
};

export default Hero;
