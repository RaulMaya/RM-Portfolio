import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import rmSVG from "../rmSVG.svg";

const NavBarComponent = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex justify-between fixed bottom-0 left-0 right-0">
      <RouterLink
        to="/projects"
        className={`text-sm md:text-base font-semibold tracking-wider border-2 border-black w-full text-center p-5 hover:bg-cyan-400 hover:cursor-pointer ease-in duration-300 ${
          isActive("/projects") ? "bg-cyan-400" : "bg-white"
        }`}
      >
        PROJECTS
      </RouterLink>
      <RouterLink
        to="/about"
        className={`text-sm md:text-base font-semibold tracking-wider border-2 border-black w-full text-center p-5 hover:bg-cyan-400 hover:cursor-pointer ease-in duration-300 ${
          isActive("/about") ? "bg-cyan-400" : "bg-white"
        }`}
      >
        ABOUT
      </RouterLink>
      <RouterLink
        to="/"
        className={`flex justify-center border-2 border-black items-center w-full p-5 hover:bg-cyan-400 hover:cursor-pointer ease-in duration-300 ${
          isActive("/") ? "bg-cyan-400" : "bg-white"
        }`}
      >
        <img
          className="text-center h-5 md:h-10 absolute"
          src={rmSVG}
          alt="Logo of Raul Maya"
        />
      </RouterLink>
      <RouterLink
        to="/resume"
        className={`text-sm md:text-base font-semibold tracking-wider border-2 border-black w-full text-center p-5 hover:bg-cyan-400 hover:cursor-pointer ease-in duration-300 ${
          isActive("/resume") ? "bg-cyan-400" : "bg-white"
        }`}
      >
        RESUME
      </RouterLink>
      <RouterLink
        to="/contact"
        className={`text-sm md:text-base font-semibold tracking-wider border-2 border-black w-full text-center p-5 hover:bg-cyan-400 hover:cursor-pointer ease-in duration-300 ${
          isActive("/contact") ? "bg-cyan-400" : "bg-white"
        }`}
      >
        CONTACT
      </RouterLink>
    </div>
  );
};

export default NavBarComponent;
