import React from "react";
import AnimateIn from "./AnimateIn";
import Icons from "./Icons";

const iconMap = {
  Email: Icons.mail,
  GitHub: Icons.github,
  LinkedIn: Icons.linkedin,
};

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <AnimateIn delay={100}>
        <div className="section-title-wrapper">
          <span className="section-number">05.</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>
      </AnimateIn>
      <div className="contact-content">
        <AnimateIn delay={200}>
          <div className="contact-header">
            <h3 className="contact-heading">Let's work together</h3>
            <p className="contact-intro">
              I'm currently seeking a Junior Web Developer role where I can
              contribute my skills in full-stack development, backend
              architecture, and modern frontend engineering. Feel free to reach
              out!
            </p>
          </div>
        </AnimateIn>

        <div className="contact-cards">
          <AnimateIn delay={250}>
            <a href="mailto:wailinnaing.dev@email.com" className="contact-card">
              <div className="contact-icon">{iconMap["Email"]}</div>
              <div className="contact-info">
                <h3 className="contact-label">Email</h3>
                <p className="contact-value">wailinnnaing.dev@email.com</p>
              </div>
            </a>
          </AnimateIn>

          <AnimateIn delay={300}>
            <a
              href="https://github.com/wailinnaing432019"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">{iconMap["GitHub"]}</div>
              <div className="contact-info">
                <h3 className="contact-label">GitHub</h3>
                <p className="contact-value">github.com/wailinnaing432019</p>
              </div>
            </a>
          </AnimateIn>

          <AnimateIn delay={350}>
            <a
              href="https://linkedin.com/in/wailinnaing"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">{iconMap["LinkedIn"]}</div>
              <div className="contact-info">
                <h3 className="contact-label">LinkedIn</h3>
                <p className="contact-value">linkedin.com/in/wailinnaing</p>
              </div>
            </a>
          </AnimateIn>
        </div>

        <AnimateIn delay={450}>
          <div className="contact-cta">
            <p>
              Open to Junior Web Developer opportunities, collaborative
              projects, and full-stack development roles.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Contact;
