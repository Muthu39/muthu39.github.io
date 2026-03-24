import React from "react";
import { cyberSkills } from "../../data/cyberData";

const CyberSkills = () => {
  const skillLogs = [...cyberSkills, ...cyberSkills, ...cyberSkills];

  return (
    <section className="skills-section">
      <h2 className="section-title cyber-title">
        <span className="bracket">[</span> SKILLS{" "}
        <span className="bracket">]</span>
      </h2>
      <div className="skills-cyber-terminal">
        <div className="terminal-topbar">
          <div className="terminal-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <p className="terminal-title-cyber">root@security:~ /my_skills && /tools</p>
          <span className="terminal-alert">H A C K E D !</span>
        </div>

        <div className="terminal-screen-mask">
          <div className="terminal-stream">
            {skillLogs.map((skill, index) => (
              <div key={`${skill}-${index}`} className="terminal-log-line">
                <span className="terminal-time">[{`00:${String(index).padStart(2, "0")}:13`}]</span>
                <span className="skills-terminal-prompt">root@security:~#</span>
                <span className="command">ping </span>
                <span className="skill-highlight">"{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberSkills;