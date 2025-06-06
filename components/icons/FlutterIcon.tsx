import React from "react";

const FlutterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="none"
    {...props}
  >
    <g>
      <polygon points="10,38 24,24 38,10 44,16 24,36 10,38" fill="#02569B"/>
      <polygon points="24,24 38,38 44,32 30,18 24,24" fill="#0175C2"/>
      <polygon points="24,36 38,22 44,28 30,42 24,36" fill="#13B9FD"/>
    </g>
  </svg>
);

export default FlutterIcon;
