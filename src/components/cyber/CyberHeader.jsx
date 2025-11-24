import React from "react";
import SplineBackground from "../SplineBackground";

const CyberHeader = () => {
  return (
    <header className="cyber-header">
      <SplineBackground />
      <div className="glitch-container">
        <h1 className="glitch">MUTHUKKUMARAN</h1>
      </div>
      <p className="cyber-subtitle">
        <span className="typing-effect">
          $ Cyber Security Specialist | Ethical Hacker
        </span>
      </p>
      <div className="cyber-intro">
        <p className="cyber-desc">
          Protecting digital infrastructure through advanced security research,
          penetration testing, and vulnerability analysis.
        </p>
      </div>
    </header>
  );
};

export default CyberHeader;
