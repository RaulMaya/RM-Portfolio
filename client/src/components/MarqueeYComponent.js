import React from "react";
import rmSVG from "../rmSVG.svg";

const MarqueYComponent = ({ topic, deg }) => {
  const degreesOne =
    deg === 270 ? `rotate-${deg} me-2 my-10` : `rotate-${deg} my-10`;
  const degreesTwo = `rotate-${deg} my-10`;
  return (
    <>
      <div className={degreesOne}>
        <span className="text-base">{topic}</span>
      </div>
      <div className={degreesTwo}>
        <span className="flex items-center">
          <img
            className="object-contain h-4 w-6"
            src={rmSVG}
            alt="Tiny Logo of Raul Maya"
          />
        </span>
      </div>
    </>
  );
};

export default MarqueYComponent;
