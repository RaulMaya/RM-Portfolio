import { React, useEffect } from "react";
import IntroductionComponent from "../components/About/IntroductionComponent";
import PersonalComponent from "../components/About/PersonalComponent";
import TestimonialForm from "../components/About/TestimonialForm";

import NavBarComponent from "../components/NavBarComponent";

const About = () => {
  useEffect(() => {
    document.title = "About Me";
  }, []);
  return (
    <>
      <h1 className="text-center text-10xl">ABOUT ME</h1>
      <IntroductionComponent />
      <PersonalComponent />
      <TestimonialForm />
      <NavBarComponent />
    </>
  );
};

export default About;
