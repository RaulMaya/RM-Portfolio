import { React, useEffect } from "react";
import IntroductionComponent from "../components/About/IntroductionComponent";
import NavBarComponent from "../components/NavBarComponent";

const About = () => {
  useEffect(() => {
    document.title = "About Me";
  }, []);
  return (
    <>
      <h1 className="text-center text-10xl">ABOUT ME</h1>
      <IntroductionComponent />
      <NavBarComponent />
    </>
  );
};

export default About;
