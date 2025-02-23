'use client';

import React from 'react';

const AnimatedText = () => {
  return (
    <div className="w-full h-64 flex items-center justify-center overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 100"
        className="w-full max-w-lg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D2A030" />
            <stop offset="34.4%" stopColor="#865D00" />
            <stop offset="56.9%" stopColor="#D2A030" />
            <stop offset="77.9%" stopColor="#755100" />
            <stop offset="100%" stopColor="#D2A030" />
          </linearGradient>
        </defs>
        <style>
          {`
            @keyframes handwrite {
              5% {
                stroke-dashoffset: 1200;
                fill-opacity: 0;
              }
              30.67% { /* 4s / 15s */
                stroke-dashoffset: 800; /* Linear progress: 1200 * (1 - 4/15) */
                fill-opacity: 1; /* Fill still invisible */
              }
              40% { /* 6s / 15s */
                stroke-dashoffset: 720; /* Linear progress: 1200 * (1 - 6/15) */
                fill-opacity: 1; /* Fade in complete after 2s */
              }
              100% {
                stroke-dashoffset: 0;
                fill-opacity: 1;
              }
            }
            .animated-text {
              font-family: sans-serif;
              font-size: 72px;
              font-style: italic;
              fill: url(#goldGradient);
              fill-opacity: 0; /* Start with no fill */
              stroke: url(#goldGradient);
              stroke-width: 1.5;
              stroke-dasharray: 1200;
              stroke-dashoffset: 1200;
              animation: handwrite 15s linear forwards;
            }
          `}
        </style>
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          className="animated-text"
        >
          Bizniz
        </text>
      </svg>
    </div>
  );
};

export default AnimatedText;