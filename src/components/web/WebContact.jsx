import React from "react";

const WebContact = () => {
  return (
    <section className="contact-section-web">
      <h2 className="section-title web-title">Get In Touch</h2>
      <div className="contact-web-content">
        <div className="contact-card">
          <p className="contact-intro">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let's create something
            amazing together!
          </p>
          <div className="contact-methods">
            <a
              href="mailto:muthukkumaran003@gmail.com"
              className="contact-method"
            >
              <span className="contact-icon">📧</span>
              <div>
                <h3>Email</h3>
              </div>
            </a>
            <a
              href="https://github.com/Muthu39/"
              className="contact-method"
            >
              <span className="contact-icon">💻</span>
              <div>
                <h3>GitHub</h3>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/bmk03"
              className="contact-method"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">💼</span>
              <div>
                <h3>LinkedIn</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebContact;
