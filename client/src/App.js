import React from "react";
import "./App.css";
import rmLogo from "./rmLogo.png";

const App = () => {
  const gridStyles = {
    gridTemplateAreas: `
      "projects projects connect"
      "resume image connect"
      "resume about about"
    `,
    gridTemplateColumns: "1fr 1fr 1fr",
  };

  return (
    <div className="container relative flex justify-center h-screen min-w-full items-center bg-blue-400">
      <section className="grid bg-white h-screen min-w-full p-10" style={gridStyles}>
        <div className="projects text-4xl lg:text-7xl font-sans flex justify-center items-center border-2 border-black w-0 h-0 min-w-full min-h-full cursor-pointer transition-all hover:bg-cyan-300">
          Projects
        </div>
        <div className="connect text-4xl lg:text-7xl font-sans flex justify-center items-center border-2 border-black w-0 h-0  min-w-full min-h-full cursor-pointer transition-all hover:bg-cyan-300">
          Contact
        </div>
        <div className="resume text-4xl lg:text-7xl font-sans flex justify-center items-center border-2 border-black w-0 h-0 min-w-full min-h-full cursor-pointer transition-all hover:bg-cyan-300">
          Resume
        </div>
        <div className="about text-4xl lg:text-7xl font-sans flex justify-center items-center border-2 border-black w-0 h-0 min-w-full min-h-full cursor-pointer transition-all hover:bg-cyan-300">
          About
        </div>
        <div className="image bg-cyan-300 flex justify-center items-center border-2 border-black h-52 h-52 min-w-full min-h-full cursor-pointer transition-all">
          <img
            className="object-contain h-48 w-48"
            src={rmLogo}
            alt="Logo of Raul Maya"
          />
        </div>
      </section>
    </div>
  );
};

export default App;
