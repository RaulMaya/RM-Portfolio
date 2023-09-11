import React from "react";
import raulImage from "./raulImage.jpg";

const PersonalComponent = () => {
  <section className="flex flex-row justify-center mb-10">
    <article className="basis-3/4">
      <h3>Personal</h3>
      <p>Raul Maya Salazar</p>
      <p>
        Web Developer and Data Analytics Engineer with a background in
        Industrial Engineering and life-long dedication to learning. Certified
        by Tecnológico de Monterrey Data Analytics & Visualization Bootcamp, and
        by Tecnológico de Monterrey Web Development Bootcamp. Effective at
        combining creativity and problem solving to make sense of your
        information and build easy-to-use applications based on it. Recognized
        among employees for his sharp mind and attention to detail, no matter
        how complex the project.
      </p>
    </article>
    <article className="basis-1/4 flex justify-center">
      <img
        className="object-cover w-56 h-56"
        src={raulImage}
        alt="Raul Maya in the americas tower"
      />
    </article>
  </section>;
};

export default PersonalComponent