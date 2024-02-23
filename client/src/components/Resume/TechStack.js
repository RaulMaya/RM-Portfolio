import React from "react";
import { GiTechnoHeart } from "react-icons/gi";

const techStackObj = [{
  "name": "Python",
  "image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
},
{
  "name": "JavaScript",
  "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png "
}]


const TechStack = () => {
  const stacks = techStackObj.map(o => {
    return <img className="object-contain h-20 w-20" src={o.image} alt={o.name} />
  })
  return (
    <article className="container m-auto border-2 border-black shadow-xl rounded-lg px-5 pt-5 mb-12 w-full">
      <p className="mb-7 flex justify-center gap-x-4 items-center font-semibold tracking-widest text-xl">
        <GiTechnoHeart />
        My Tech Stack
      </p>
      <div className="container flex justify-evenly flex-wrap">
        {stacks}
      </div>
      <a href="/projects"><button className="border-t-2 border-cyan-400 font-semibold text-gray-400 hover:text-black transition-all min-w-full mt-5 tracking-widest py-2 text-sm">Visit Projects</button></a>
    </article >
  );
};

export default TechStack;
