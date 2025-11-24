import React, { useEffect, useRef } from "react";
import "./CursorTrail.css";

const CursorTrail = () => {
  const cursorRef = useRef(null);
  const coordsRef = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  useEffect(() => {
    const circles = cursorRef.current?.querySelectorAll(".circle");
    if (!circles) return;

    circlesRef.current = Array.from(circles);

    // Initialize circles
    circlesRef.current.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
    });

    // Mouse move handler
    const handleMouseMove = (e) => {
      coordsRef.current.x = e.clientX;
      coordsRef.current.y = e.clientY;
    };

    // Animation function
    const animateCircles = () => {
      let x = coordsRef.current.x;
      let y = coordsRef.current.y;

      circlesRef.current.forEach((circle, index) => {
        circle.style.left = x - 13 + "px";
        circle.style.top = y - 13 + "px";

        // Smoother proportional scaling - from 100% to 30% for better balance
        const scale =
          (circlesRef.current.length - index) / circlesRef.current.length;
        // More gradual scaling: 30% to 100% range
        circle.style.transform = `scale(${0.3 + scale * 0.7})`;

        // Add opacity fade for smoother tail effect (50% to 100%)
        circle.style.opacity = 0.5 + scale * 0.5;

        circle.x = x;
        circle.y = y;

        const nextCircle =
          circlesRef.current[index + 1] || circlesRef.current[0];
        // Tighter follow for slow movements, smoother trail
        x += (nextCircle.x - x) * 0.15;
        y += (nextCircle.y - y) * 0.15;
      });

      requestAnimationFrame(animateCircles);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor" ref={cursorRef}>
      {[...Array(50)].map((_, index) => (
        <div key={index} className="circle"></div>
      ))}
    </div>
  );
};

export default CursorTrail;
