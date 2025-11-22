import React from "react";
import { cyberSkills } from "../../data/cyberData";

const CyberSkills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title cyber-title">
        <span className="bracket">[</span> SKILLS{" "}
        <span className="bracket">]</span>
      </h2>
      <div className="skills-cyber">
        {cyberSkills.map((skill, index) => (
          <div
            key={index}
            className="skill-tag-cyber"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <span className="terminal-prompt">root@security:~#</span> {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CyberSkills;
