import { Link as RouterLink } from "react-router-dom";

import rmLogo from "../rmLogo.png";
import "../App.css";

const MainMenu = () => {
  const gridStyles = {
    gridTemplateAreas: `
          "resume projects connect"
          "resume image connect"
          "about about about"
        `,
    gridTemplateColumns: "1fr 1fr 1fr",
  };

  return (
    <>
      <section
        className="grid shadow bg-white min-h-full min-w-full"
        style={gridStyles}
      >
        <RouterLink
          to="/"
          className="projects text-2xl lg:text-4xl font-mono flex justify-center items-center w-0 h-28 hover:h-60 min-w-full min-h-full cursor-pointer transition-all hover:bg-cyan-300"
        >
          Projects
        </RouterLink>
        <RouterLink
          to="/"
          className="connect text-2xl lg:text-4xl font-mono flex justify-center items-center border-s-4 border-black w-32 h-0 hover:w-144 hover:h-144 min-w-full min-h-full cursor-pointer transition-all hover:bg-cyan-300"
        >
          Contact
        </RouterLink>
        <RouterLink
          to="/"
          className="resume text-2xl lg:text-4xl font-mono flex justify-center items-center border-e-4 border-black w-32 h-0 hover:w-144 hover:h-144 min-w-full min-h-full cursor-pointer transition-all hover:bg-cyan-300"
        >
          Resume
        </RouterLink>
        <RouterLink
          to="/"
          className="about text-2xl lg:text-4xl font-mono flex justify-center items-center border-t-4 border-black w-0 h-28 hover:h-60 min-w-full min-h-full cursor-pointer transition-all hover:bg-cyan-300"
        >
          About
        </RouterLink>
        <RouterLink
          to="/"
          className="image bg-cyan-300 flex grayscale justify-center items-center border-t-4 border-black h-44 w-44 hover:h-72 hover:w-144 min-w-full min-h-full cursor-pointer transition-all hover:grayscale-0"
        >
          <img
            className="object-contain h-48 w-48"
            src={rmLogo}
            alt="Logo of Raul Maya"
          />
        </RouterLink>
      </section>
    </>
  );
};

export default MainMenu;
