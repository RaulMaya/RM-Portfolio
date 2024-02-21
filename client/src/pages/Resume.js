import { React, useEffect } from "react";
import NavBarComponent from "../components/NavBarComponent";
import ResumeComponent from "../components/Resume/ResumeComponent";
import LogSignHeader from "../components/LogInSignUp/LogSignHeaderComponent";

const Resume = () => {
  useEffect(() => {
    document.title = "Resume";
  }, []);

  return (
    <>
      <LogSignHeader />
      <h1 className="text-center text-10xl">MY RESUME</h1>
      <ResumeComponent />
      <NavBarComponent />
    </>
  );
};

export default Resume;
