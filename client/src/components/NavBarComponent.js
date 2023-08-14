import React from "react";
import { Link as RouterLink } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <div class="flex justify-between fixed bottom-0 left-0 right-0">
      <RouterLink to="/projects" className="border-2 border-black w-full text-center p-5 bg-white hover:bg-cyan-400 hover:cursor-pointer">
        Projects
      </RouterLink>
      <RouterLink to="/about" className="border-2 border-black w-full text-center p-5 bg-white hover:bg-cyan-400 hover:cursor-pointer">
        About
      </RouterLink>
      <RouterLink to="/" className="border-2 border-black w-full text-center p-5 bg-white hover:bg-cyan-400 hover:cursor-pointer">
        Home
      </RouterLink>
      <RouterLink to="/resume" className="border-2 border-black w-full text-center p-5 bg-white hover:bg-cyan-400 hover:cursor-pointer">
        Resume
      </RouterLink>
      <RouterLink to="/contact" className="border-2 border-black w-full text-center p-5 bg-white hover:bg-cyan-400 hover:cursor-pointer">
        Contact
      </RouterLink>
    </div>
  );
};

export default NavBarComponent