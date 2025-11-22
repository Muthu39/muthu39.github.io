import React from "react";
import CyberHeader from "./cyber/CyberHeader";
import CyberAchievements from "./cyber/CyberAchievements";
import CyberProjects from "./cyber/CyberProjects";
import CyberSkills from "./cyber/CyberSkills";
import CyberContact from "./cyber/CyberContact";

const DarkLayer = () => {
  return (
    <div className="dark-layer">
      <div className="cyber-bg">
        <div className="matrix-rain"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="content-wrapper">
        <CyberHeader />
        <CyberAchievements />
        <CyberProjects />
        <CyberSkills />
        <CyberContact />
      </div>
    </div>
  );
};

export default DarkLayer;
