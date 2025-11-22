import React from "react";
import { cyberProjects } from "../../data/cyberData";

const CyberProjects = () => {
  return (
    <section className="cyber-projects-section">
      <h2 className="section-title cyber-title">
        <span className="bracket">[</span> PROJECTS{" "}
        <span className="bracket">]</span>
      </h2>
      <div className="cyber-projects-grid">
        {cyberProjects.map((project, index) => (
          <div
            key={index}
            className="cyber-project-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="cyber-card-header">
              <span className="cyber-icon">🔐</span>
              <span className="status-indicator">
                <span className="status-dot"></span>
                ACTIVE
              </span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="cyber-tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="cyber-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="cyber-footer">
              <span className="access-level">ACCESS: ROOT</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CyberProjects;
