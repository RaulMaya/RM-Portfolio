import { React, useEffect } from "react";
import NavBarComponent from "../components/NavBarComponent";
import raulImage from "../raulImage.jpg";

const About = () => {
  useEffect(() => {
    document.title = "About Me";
  }, []);
  return (
    <>
      <h1 className="text-center text-10xl">ABOUT ME</h1>
      <section className="flex flex-row justify-center">
        <article className="basis-1/4 flex justify-center">
          <img
            className="object-cover w-56 h-56"
            src={raulImage}
            alt="Raul Maya in the americas tower"
          />
        </article>
        <article className="basis-3/4">
          <h3>Introduction</h3>
          <p>Raul Maya Salazar</p>
          <p>
            Web Developer and Data Analytics Engineer with a background in
            Industrial Engineering and life-long dedication to learning.
            Certified by Tecnológico de Monterrey Data Analytics & Visualization
            Bootcamp, and by Tecnológico de Monterrey Web Development Bootcamp.
            Effective at combining creativity and problem solving to make sense
            of your information and build easy-to-use applications based on it.
            Recognized among employees for his sharp mind and attention to
            detail, no matter how complex the project.
          </p>
        </article>
      </section>
      <NavBarComponent />
    </>
  );
};

export default About;
