import React from "react";
import NavBarComponent from "../components/NavBarComponent";
import SingleProjectComponent from "../components/Projects/SingleProjectComponent"
import LogSignHeader from "../components/LogInSignUp/LogSignHeaderComponent";

const SingleProject = ({ isLoggedIn }) => {
  return (
    <>
      <LogSignHeader isLoggedIn={isLoggedIn}/>
      <SingleProjectComponent isLoggedIn={isLoggedIn}/>
      <NavBarComponent />
    </>
  );
};

export default SingleProject;
