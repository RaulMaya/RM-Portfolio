import React from "react";
import rmSVG from "../rmSVG.svg";

const MarqueXComponent = ({ topic }) => {
  return (
    <>
      <span className="text-xl mx-4">{topic}</span>
      <span className="flex items-center mt-1">
        <img
          className="object-contain h-4 w-6"
          src={rmSVG}
          alt="Tiny Logo of Raul Maya"
        />
      </span>
    </>
  );
};

export default MarqueXComponent;
