import React from "react";
import RaulImage from "./cvImage.jpg";
import RaulResume from "./Raul_Maya_Salazar_Resume.pdf";

const ResumeHero = () => {
  return (
    <div className="container flex justify-evenly m-auto">
      <section className="flex justify-evenly items-end">
        <article className="mx-10">
          <a
            href={RaulResume}
            download="Raul_Maya_Salazar_Resume.pdf"
            className=" bg-cyan-400 rounded-t-lg rounded-r-lg border-2 border-black py-3 px-5 transition-all duration-300 hover:bg-cyan-300"
          >
            Download Resume
          </a>
          <div className="border-2 border-black w-96 p-10 rounded-lg">
            <p className="text-xl mb-3 tracking-wide">Greetings!</p>
            <p>
              I'm a Web Developer and Data Analytics aficionado, blending the
              precision of my Industrial Engineering roots with an insatiable
              thirst for knowledge. Proudly certified by Tecnológico de
              Monterrey's elite Data Analytics & Visualization and Web
              Development Bootcamps. My forte? Weaving creativity with
              analytical prowess to transform intricate data into intuitive
              applications. Colleagues often tip their hats to my keen eye for
              detail, ensuring no project, no matter its complexity, slips
              through the cracks.
            </p>
          </div>
        </article>

        <article className="mx-10">
          <div className="flex justify-start items-end">
            <p className="text-3xl me-5 tracking-wider">Raul</p>
            <img
              className="object-cover w-72 h-96"
              src={RaulImage}
              alt="Raul smiling"
            />
          </div>
          <p className="text-6xl tracking-wider">Maya Salazar</p>
        </article>
      </section>
    </div>
  );
};

export default ResumeHero;
