import React from "react";

const CyberContact = () => {
  return (
    <section className="contact-section-cyber">
      <h2 className="section-title cyber-title">
        <span className="bracket">[</span> CONTACT{" "}
        <span className="bracket">]</span>
      </h2>
      <div className="contact-cyber-content">
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
          </div>
          <div className="terminal-body">
            <p className="terminal-line">
              <span className="terminal-prompt">root@muthu:~#</span> cat
              contact.txt
            </p>
            <p className="terminal-output">
              <span className="contact-label">Email:</span>{" "}
              muthukkumaran@security.dev
            </p>
            <p className="terminal-output">
              <span className="contact-label">GitHub:</span>{" "}
              github.com/muthukkumaran
            </p>
            <p className="terminal-output">
              <span className="contact-label">LinkedIn:</span>{" "}
              linkedin.com/in/muthukkumaran
            </p>
            <p className="terminal-line">
              <span className="terminal-prompt">root@muthu:~#</span>{" "}
              <span className="cursor-blink">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberContact;
