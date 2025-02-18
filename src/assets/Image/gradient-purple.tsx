import React from "react";

export default function GradientPurpleSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
      <defs>
        <linearGradient
          id="purpleBlueGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            style={{
              stopColor: "#8B5CF6",
            }}
            //   style="stop-color:#8B5CF6"
          />
          <stop
            offset="100%"
            style={{
              stopColor: "#3B82F6",
            }}
          />
        </linearGradient>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#purpleBlueGradient)"
        rx="16"
      />
    </svg>
  );
}
