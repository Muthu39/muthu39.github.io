import React, { useState, useEffect } from "react";
import "./App.css";
import DarkLayer from "./components/DarkLayer";
import LightLayer from "./components/LightLayer";
import CursorTrail from "./components/CursorTrail";
import SplineBackground from "./components/SplineBackground";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="app-container">
      {/* Spline 3D Background - Interactive cursor following animation */}

      {/* Cursor Trail Effect */}
      <CursorTrail />

      {/* Dark Theme Layer (Cybersecurity) - Bottom Layer */}
      <DarkLayer />

      {/* Light Theme Layer (Web Development) - Top Layer */}
      <LightLayer isDark={isDark} />

      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        <div className={`toggle-track ${isDark ? "dark" : "light"}`}>
          <div className="toggle-thumb">{isDark ? "🌙" : "☀️"}</div>
        </div>
        <span className="toggle-label">
          {isDark ? "Cyber Security" : "Web Development"}
        </span>
      </button>

      {/* Floating Action Button */}
      <div className="fab-container">
        <a
          href={
            isDark
              ? "mailto:muthukkumaran@security.dev"
              : "mailto:muthukkumaran@webdev.com"
          }
          className="fab"
          title="Contact Me"
        >
          <span>💬</span>
        </a>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ opacity: scrollY > 300 ? 1 : 0 }}
      >
        ↑
      </button>
    </div>
  );
}

export default App;
