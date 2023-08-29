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
        className={`border-2 border-black w-full text-center p-5 hover:bg-cyan-400 hover:cursor-pointer ${
          isActive("/projects") ? "bg-cyan-400" : "bg-white"
        }`}
      >
        Projects
      </RouterLink>
      <RouterLink
        to="/about"
        className={`border-2 border-black w-full text-center p-5 hover:bg-cyan-400 hover:cursor-pointer ${
          isActive("/about") ? "bg-cyan-400" : "bg-white"
        }`}
      >
        About
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
        className={`border-2 border-black w-full text-center p-5 hover:bg-cyan-400 hover:cursor-pointer ${
          isActive("/resume") ? "bg-cyan-400" : "bg-white"
        }`}
      >
        Resume
      </RouterLink>
      <RouterLink
        to="/contact"
        className={`border-2 border-black w-full text-center p-5 hover:bg-cyan-400 hover:cursor-pointer ${
          isActive("/contact") ? "bg-cyan-400" : "bg-white"
        }`}
      >
        Contact
      </RouterLink>
    </div>
  );
};

export default NavBarComponent;
