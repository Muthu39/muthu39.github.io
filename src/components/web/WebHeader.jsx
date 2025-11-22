import React from "react";

const WebHeader = () => {
  return (
    <header className="web-header">
      <div className="header-content">
        <h1 className="web-title">
          <span className="wave">👋</span> Hi, I'm Muthukkumaran
        </h1>
        <p className="web-subtitle">
          Full-Stack Web Developer | Building Modern Web Applications
        </p>
        <div className="role-tag">
          <span className="code-bracket">&lt;</span>
          Student Developer
          <span className="code-bracket">/&gt;</span>
        </div>
      </div>
    </header>
  );
};

export default WebHeader;
