import { React, useEffect } from "react";
import IntroductionComponent from "../components/About/IntroductionComponent";
import PersonalComponent from "../components/About/PersonalComponent";
import Testimonials from "../components/About/Testimonials";
import TestimonialForm from "../components/About/TestimonialForm";
import LogSignHeader from "../components/LogInSignUp/LogSignHeaderComponent";

import NavBarComponent from "../components/NavBarComponent";

const About = ({ isLoggedIn }) => {
  console.log(isLoggedIn)
  useEffect(() => {
    document.title = "About Me";
  }, []);
  return (
    <>
      <LogSignHeader isLoggedIn={isLoggedIn} />
      <h1 className="text-center text-8xl md:text-10xl">ABOUT ME</h1>
      <IntroductionComponent />
      <PersonalComponent />
      <Testimonials />
      <TestimonialForm isLoggedIn={isLoggedIn}/>
      <NavBarComponent />
    </>
  );
};

export default About;
