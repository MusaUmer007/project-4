import React, { useState, useEffect } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // increase speed if needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ margin: "20px 0" }}>
      <h3>📊 Progress Bar</h3>
      <div style={{
        width: "100%",
        height: "30px",
        background: "#eee",
        borderRadius: "5px",
        overflow: "hidden"
      }}>
        <div style={{
          width: `${progress}%`,
          height: "100%",
          background: "linear-gradient(to right, #4caf50, #81c784)",
          transition: "width 0.2s ease"
        }}></div>
      </div>
      <p>{progress}%</p>
    </div>
  );
}

export default ProgressBar;
