import React from "react";

const DartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="none"
    {...props}
  >
    <g>
      <path d="M8.5 39.5L39.5 8.5C40.3284 7.67157 41.6716 7.67157 42.5 8.5C43.3284 9.32843 43.3284 10.6716 42.5 11.5L11.5 42.5C10.6716 43.3284 9.32843 43.3284 8.5 42.5C7.67157 41.6716 7.67157 40.3284 8.5 39.5Z" fill="#0175C2"/>
      <path d="M8.5 39.5L39.5 8.5C40.3284 7.67157 41.6716 7.67157 42.5 8.5C43.3284 9.32843 43.3284 10.6716 42.5 11.5L11.5 42.5C10.6716 43.3284 9.32843 43.3284 8.5 42.5C7.67157 41.6716 7.67157 40.3284 8.5 39.5Z" fill="url(#dart-gradient)" fillOpacity="0.2"/>
      <defs>
        <linearGradient id="dart-gradient" x1="8" y1="40" x2="40" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0175C2"/>
          <stop offset="1" stopColor="#13B9FD"/>
        </linearGradient>
      </defs>
    </g>
  </svg>
);

export default DartIcon;
