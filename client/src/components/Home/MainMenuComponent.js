import React from "react";
import { Link as RouterLink } from "react-router-dom";

import rmLogo from "../../rmLogo.png";
import "../../Grid.css";

const MainMenu = () => {
  return (
    <>
      <section
        className="grid grid-container shadow bg-white min-h-full min-w-full"
      >
        <RouterLink
          to="/projects"
          className="projects text-2xl lg:text-4xl font-mono flex justify-center items-center border-t-4 border-black md:border-0 w-0 h-28 hover:h-60 min-w-full min-h-full cursor-pointer transition-all duration-500 hover:bg-cyan-300"
        >
          Projects
        </RouterLink>
        <RouterLink
          to="/contact"
          className="connect text-2xl lg:text-4xl font-mono flex justify-center items-center border-t-4 md:border-s-4 md:border-t-0 border-black w-32 h-0 hover:w-144 hover:h-144 min-w-full min-h-full cursor-pointer transition-all duration-500 hover:bg-cyan-300"
        >
          Contact
        </RouterLink>
        <RouterLink
          to="/resume"
          className="resume text-2xl lg:text-4xl font-mono flex justify-center items-center border-t-4 md:border-e-4 md:border-t-0 border-black w-32 h-0 hover:w-144 hover:h-144 min-w-full min-h-full cursor-pointer transition-all duration-500 hover:bg-cyan-300"
        >
          Resume
        </RouterLink>
        <RouterLink
          to="/about"
          className="about text-2xl lg:text-4xl font-mono flex justify-center items-center border-t-4 border-black w-0 h-28 hover:h-60 min-w-full min-h-full cursor-pointer transition-all duration-500 hover:bg-cyan-300"
        >
          About
        </RouterLink>
        <RouterLink
          to="/"
          className="image bg-cyan-300 flex grayscale justify-center items-center border-0 md:border-t-4 border-black h-44 w-44 hover:h-72 hover:w-144 min-w-full min-h-full cursor-pointer transition-all duration-500 hover:grayscale-0"
        >
          <img
            className="object-contain h-32 w-32"
            src={rmLogo}
            alt="Logo of Raul Maya"
          />
        </RouterLink>
      </section>
    </>
  );
};

export default MainMenu;
