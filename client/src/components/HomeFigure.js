import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const HomeFigure = ({ title, spanR, spanC }) => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = () => {
    setHoveredBox(title);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  const props = useSpring({
    width: hoveredBox === title ? 600 : 500,
    height: hoveredBox === title ? 300 : 200,
  });

  const defaultSize = `flex items-center justify-center border-2 border-black text-center p-10 cursor-pointer ${spanR} ${spanC}  ${
    hoveredBox === title ? "bg-green-400" : "bg-white"
  }`;
  return (
    <animated.div
      style={props}
      className={defaultSize}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="font-mono text-5xl p-5 lg:text-7xl lg:p-8 xl:p-10">
        {title}
      </div>
    </animated.div>
  );
};

export default HomeFigure;
