import React from "react";
import "./App.css";
import rmLogo from './rmLogo.png'; 

const App = () => {
  return (
    <div className="container flex justify-center h-screen min-w-full items-center">
      <section className="grid-menu bg-white grid">
        <div className="projects text-5xl font-sans flex justify-center items-center border-2 border-black w-0 h-0 min-w-full min-h-full cursor-pointer transition-all">
          Projects
        </div>
        <div className="about text-5xl font-sans flex justify-center items-center border-2 border-black w-0 h-0 min-w-full min-h-full cursor-pointer transition-all">
          Contact
        </div>
        <div className="connect text-5xl font-sans flex justify-center items-center border-2 border-black w-0 h-0 min-w-full min-h-full cursor-pointer transition-all">
          Resume
        </div>
        <div className="resume text-5xl font-sans  flex justify-center items-center border-2 border-black w-0 h-0 min-w-full min-h-full cursor-pointer transition-all">
          About
        </div>
        <div className="image bg-cyan-300 flex justify-center items-center border-2 border-black w-56 h-56 min-w-full min-h-full cursor-pointer transition-all">
          <img className="object-contain h-48 w-48" src={rmLogo} alt="Logo of Raul Maya" />
        </div>
      </section>
    </div>
  );
};

export default App;
