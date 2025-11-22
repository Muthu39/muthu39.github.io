import React from "react";
import WebHeader from "./web/WebHeader";
import WebAbout from "./web/WebAbout";
import WebProjects from "./web/WebProjects";
import WebSkills from "./web/WebSkills";
import WebContact from "./web/WebContact";

const LightLayer = ({ isDark }) => {
  return (
    <div className={`light-layer ${isDark ? "fade-out" : "fade-in"}`}>
      <div className="light-bg">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="shape"
              style={{
                left: `${i * 20 + 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + i}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="content-wrapper">
        <WebHeader />
        <WebAbout />
        <WebProjects />
        <WebSkills isDark={isDark} />
        <WebContact />
      </div>
    </div>
  );
};

export default LightLayer;
