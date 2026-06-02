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
              muthukkumaran003@gmail.com
            </p>
            <p className="terminal-output">
              <span className="contact-label">GitHub:</span>{" "}
              <a href="https://github.com/Muthu39" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color:'white'}}>github.com/Muthu39</a>
            </p>
            <p className="terminal-output">
              <span className="contact-label">LinkedIn:</span>{" "}
              <a href="https://www.linkedin.com/in/bmk03" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color:'white'}}>www.linkedin.com/in/bmk03
</a>
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
