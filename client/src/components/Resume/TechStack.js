import React from "react";
import { GiTechnoHeart } from "react-icons/gi";

const TechStack = () => {
  return (
    <article className="container m-auto border-2 border-black shadow-xl rounded-lg px-5 pt-5 mb-12 w-full">
      <p className="mb-7 flex justify-center gap-x-4 items-center font-semibold tracking-widest text-xl">
      <GiTechnoHeart />
        My Tech Stack
      </p>
      <button className="border-t-2 border-cyan-400 font-semibold text-gray-400 hover:text-black transition-all min-w-full mt-5 tracking-widest py-2 text-sm">View All Awards</button>
    </article>
  );
};

export default TechStack;
