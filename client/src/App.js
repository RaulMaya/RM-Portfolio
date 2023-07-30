import React from "react";
import "./App.css";
import rmLogo from "./rmLogo.png";

const App = () => {
  const gridStyles = {
    gridTemplateAreas: `
      "resume projects connect"
      "resume image connect"
      "about about about"
    `,
    gridTemplateColumns: "1fr 1fr 1fr",
  };

  return (
    <div className="container relative flex justify-center h-screen min-w-full items-center bg-gray-100 p-10">
      <section className="absolute bg-white min-w-full top-0 h-10 border-4 border-black">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marqueeX flex min-w-full shrink-0 items-center justify-around">
            <span className="text-xl mx-4">Java Script</span>
            <span className="text-xl mx-4">Python</span>
            <span className="text-xl mx-4">Data Analytics</span>
            <span className="text-xl mx-4">Web Development</span>
            <span className="text-xl mx-4">React.JS</span>
            <span className="text-xl mx-4">Handlebars.JS</span>
            <span className="text-xl mx-4">Front End Developer</span>
          </div>

          <div className="absolute animate-marqueeX2 flex min-w-full shrink-0 items-center justify-around">
            <span className="text-xl mx-4">Java Script</span>
            <span className="text-xl mx-4">Python</span>
            <span className="text-xl mx-4">Data Analytics</span>
            <span className="text-xl mx-4">Web Development</span>
            <span className="text-xl mx-4">React.JS</span>
            <span className="text-xl mx-4">Handlebars.JS</span>
            <span className="text-xl mx-4">Front End Developer</span>
          </div>
        </div>
      </section>
      <section className="absolute bg-white min-h-full left-0 w-10 border-4 border-black">
        <div className="relative flex">
          <div className="animate-marqueeY flex shrink-0 items-center justify-around h-screen flex-col whitespace-nowrap w-9">
            <div className="rotate-90 my-10">
              <span className="text-xl">Data Analyst</span>
            </div>
            <div className="rotate-90 my-10">
              <span className="text-xl">Python Developer</span>
            </div>
            <div className="rotate-90 my-10">
              <span className="text-xl">User Experience</span>
            </div>
          </div>

          <div className="absolute flex shrink-0 items-center justify-around h-screen animate-marqueeY2 flex-col whitespace-nowrap w-9">
            <div className="rotate-90 my-10">
              <span className="text-xl">Data Analyst</span>
            </div>
            <div className="rotate-90 my-10">
              <span className="text-xl">Python Developer</span>
            </div>
            <div className="rotate-90 my-10">
              <span className="text-xl">User Experience</span>
            </div>
          </div>
        </div>
      </section>
      <section className="absolute bg-white min-h-full right-0 w-10 border-4 border-black">
        <div className="relative flex">
          <div className="animate-marqueeY flex shrink-0 items-center justify-around h-screen flex-col whitespace-nowrap w-9">
            <div className="rotate-90 my-10">
              <span className="text-xl">Data Engineer</span>
            </div>
            <div className="rotate-90 my-10">
              <span className="text-xl">Software Engineer</span>
            </div>
            <div className="rotate-90 my-10">
              <span className="text-xl">APIs Requests</span>
            </div>
          </div>

          <div className="absolute flex shrink-0 items-center justify-around h-screen animate-marqueeY2 flex-col whitespace-nowrap w-9">
            <div className="rotate-90 my-10">
              <span className="text-xl">Data Engineer</span>
            </div>
            <div className="rotate-90 my-10">
              <span className="text-xl">Software Engineer</span>
            </div>
            <div className="rotate-90 my-10">
              <span className="text-xl">APIs Requests</span>
            </div>
          </div>
        </div>
      </section>
      <section className="absolute bg-white min-w-full bottom-0 h-10 border-4 border-black">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marqueeX flex min-w-full shrink-0 items-center justify-around">
            <span className="text-xl mx-4">Django</span>
            <span className="text-xl mx-4">Node.JS</span>
            <span className="text-xl mx-4">Express.JS</span>
            <span className="text-xl mx-4">Version Control</span>
            <span className="text-xl mx-4">Data Structures</span>
            <span className="text-xl mx-4">TailWindCSS</span>
            <span className="text-xl mx-4">Google Cloud Platform</span>
          </div>

          <div className="absolute animate-marqueeX2 flex min-w-full shrink-0 items-center justify-around">
            <span className="text-xl mx-4">Django</span>
            <span className="text-xl mx-4">Node.JS</span>
            <span className="text-xl mx-4">Express.JS</span>
            <span className="text-xl mx-4">Version Control</span>
            <span className="text-xl mx-4">Data Structures</span>
            <span className="text-xl mx-4">TailWindCSS</span>
            <span className="text-xl mx-4">Google Cloud Platform</span>
          </div>
        </div>
      </section>
      <section
        className="grid shadow bg-white min-h-full min-w-full"
        style={gridStyles}
      >
        <div className="projects text-4xl lg:text-6xl font-mono flex justify-center items-center w-0 h-28 hover:h-60 min-w-full min-h-full cursor-pointer transition-all hover:bg-cyan-300">
          Projects
        </div>
        <div className="connect text-4xl lg:text-6xl font-mono flex justify-center items-center border-s-4 border-black w-32 h-0 hover:w-144 hover:h-144 min-w-full min-h-full cursor-pointer transition-all hover:bg-cyan-300">
          Contact
        </div>
        <div className="resume text-4xl lg:text-6xl font-mono flex justify-center items-center border-e-4 border-black w-32 h-0 hover:w-144 hover:h-144 min-w-full min-h-full cursor-pointer transition-all hover:bg-cyan-300">
          Resume
        </div>
        <div className="about text-4xl lg:text-6xl font-mono flex justify-center items-center border-t-4 border-black w-0 h-28 hover:h-60 min-w-full min-h-full cursor-pointer transition-all hover:bg-cyan-300">
          About
        </div>
        <div className="image bg-cyan-300 flex grayscale justify-center items-center border-t-4 border-black h-52 h-52 hover:h-72 min-w-full min-h-full cursor-pointer transition-all hover:grayscale-0">
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
