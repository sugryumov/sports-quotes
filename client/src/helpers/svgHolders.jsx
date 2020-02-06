import React from "react";

const rectStyle = {
  fill: "#dd5927"
};

const textStyle = {
  fontSize: "25px",
  fontFamily: "Ubuntu",
	fill: "#ffffff",
	textAnchor:"middle",
	textAlign:"center"
};

const logoStyle = {
  width: "200px",
  height: "50px"
}

export const svgHolder = {
  logotype: (
    <svg>
      <rect style={rectStyle} height="50" width="200" />
      <text>
        <tspan style={textStyle} y="32" x="100">
          sports quotes
        </tspan>
      </text>
    </svg>
  )
};
