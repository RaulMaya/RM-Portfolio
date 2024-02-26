import React from "react";
import NavBarComponent from "../components/NavBarComponent";
import SingleProjectComponent from "../components/Projects/SingleProjectComponent"
import LogSignHeader from "../components/LogInSignUp/LogSignHeaderComponent";

const SingleProject = ({ isLoggedIn }) => {
  return (
    <>
      <LogSignHeader isLoggedIn={isLoggedIn}/>
      <h1 className="text-center text-8xl md:text-10xl">ART NOUVEAU</h1>
      <SingleProjectComponent isLoggedIn={isLoggedIn}/>
      <NavBarComponent />
    </>
  );
};

export default SingleProject;
