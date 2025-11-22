import React from "react";
import { webProjects } from "../../data/webData";

const WebProjects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title web-title">Featured Projects</h2>
      <div className="projects-grid">
        {webProjects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="card-header">
              <div className="folder-icon">📁</div>
              <div className="card-actions">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebProjects;
