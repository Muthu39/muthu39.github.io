import React from "react";
import profileImage from "../../data/me.png";

const WebAbout = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="profile-card">
          <img src={profileImage} alt="Profile" className="avatar-placeholder" />
          <h2>About Me</h2>
          <p>
            I'm Muthukkumaran, a passionate student developer specializing in
            modern web technologies. I craft responsive, user-friendly web
            applications using cutting-edge frameworks and best practices. From
            frontend to backend, I love building complete solutions that solve
            real-world problems.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Years Coding Practice</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAbout;
