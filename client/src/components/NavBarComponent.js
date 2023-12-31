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
        className={`font-semibold tracking-wider border-2 border-black w-full text-center p-5 hover:bg-cyan-400 hover:cursor-pointer ${
          isActive("/projects") ? "bg-cyan-400" : "bg-white"
        }`}
      >
        PROJECTS
      </RouterLink>
      <RouterLink
        to="/about"
        className={`font-semibold tracking-wider border-2 border-black w-full text-center p-5 hover:bg-cyan-400 hover:cursor-pointer ${
          isActive("/about") ? "bg-cyan-400" : "bg-white"
        }`}
      >
        ABOUT
      </RouterLink>
      <RouterLink
        to="/"
        className={`flex justify-center border-2 border-black items-center w-full p-5 hover:bg-cyan-400 hover:cursor-pointer ${
          isActive("/") ? "bg-cyan-400" : "bg-white"
        }`}
      >
        <img
          className="text-center h-10 absolute"
          src={rmSVG}
          alt="Logo of Raul Maya"
        />
      </RouterLink>
      <RouterLink
        to="/resume"
        className={`font-semibold tracking-wider border-2 border-black w-full text-center p-5 hover:bg-cyan-400 hover:cursor-pointer ${
          isActive("/resume") ? "bg-cyan-400" : "bg-white"
        }`}
      >
        RESUME
      </RouterLink>
      <RouterLink
        to="/contact"
        className={`font-semibold tracking-wider border-2 border-black w-full text-center p-5 hover:bg-cyan-400 hover:cursor-pointer ${
          isActive("/contact") ? "bg-cyan-400" : "bg-white"
        }`}
      >
        CONTACT
      </RouterLink>
    </div>
  );
};

export default NavBarComponent;
