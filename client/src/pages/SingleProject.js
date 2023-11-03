import React from "react";
import NavBarComponent from "../components/NavBarComponent";
import SingleProjectComponent from "../components/Projects/SingleProjectComponent"

const SingleProject = () => {
  return (
    <>
      <h1 className="text-center text-10xl">ART NOUVEAU</h1>
      <SingleProjectComponent />
      <NavBarComponent />
    </>
  );
};

export default SingleProject;
