import React from "react";
import raulImage from "./raulImage.jpg";

const IntroductionComponent = () => {
  return (
    <section className="flex flex-row justify-center">
      <article className="basis-1/4 flex justify-center">
        <img
          className="object-cover w-64 h-64 drop-shadow-xl"
          src={raulImage}
          alt="Raul Maya in the americas tower"
        />
      </article>
      <article className="basis-3/4 text-center">
        <p className="me-7 text-xl tracking-wide">
          Web Developer and Data Analytics Engineer with a background in
          Industrial Engineering and life-long dedication to learning. Certified
          by Tecnológico de Monterrey Data Analytics & Visualization Bootcamp,
          and by Tecnológico de Monterrey Web Development Bootcamp. Effective at
          combining creativity and problem solving to make sense of your
          information and build easy-to-use applications based on it. Recognized
          among employees for his sharp mind and attention to detail, no matter
          how complex the project.
        </p>
      </article>
    </section>
  );
};

export default IntroductionComponent;
