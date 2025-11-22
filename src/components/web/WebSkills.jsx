import React from "react";
import { webSkills } from "../../data/webData";

const WebSkills = ({ isDark }) => {
  return (
    <section className="skills-web-section">
      <h2 className="section-title web-title">Technical Skills</h2>
      <div className="skills-container">
        {webSkills.map((skill, index) => (
          <div
            key={index}
            className="skill-bar-container"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{
                  width: isDark ? "0%" : `${skill.level}%`,
                  transitionDelay: `${index * 0.1}s`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebSkills;
