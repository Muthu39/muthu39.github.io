import React from "react";
import { cyberAchievements } from "../../data/cyberData";

const CyberAchievements = () => {
  return (
    <section className="achievements-section">
      <h2 className="section-title cyber-title">
        <span className="bracket">[</span> ACHIEVEMENTS{" "}
        <span className="bracket">]</span>
      </h2>
      <div className="achievements-grid">
        {cyberAchievements.map((achievement, index) => (
          <a
            key={index}
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-link"
            
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className="achievement-card"
            >
              <div className="card-glow"></div>
              <div className="achievement-icon">{achievement.icon}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
              <div className="cyber-border"></div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CyberAchievements;
