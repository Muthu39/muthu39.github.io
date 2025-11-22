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
          <div
            key={index}
            className="achievement-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-glow"></div>
            <div className="achievement-icon">{achievement.icon}</div>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
            <div className="cyber-border"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CyberAchievements;
