import { React, useEffect } from "react";
import NavBarComponent from "../components/NavBarComponent";

const About = () => {
  useEffect(()=> {
    document.title ="About Me"
  },[])
  return (
    <>
      <h1 className="text-center text-10xl">ABOUT ME</h1>
      <NavBarComponent />
    </>
  );
};

export default About;
