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
      <article className="basis-3/4">
        <ul className="me-7 text-xl tracking-wide">
          <li>
            🎸 Rocking the web as a Developer and Data Analytics Engineer, with a
            sprinkle of Industrial Engineering flair. 🛠️
          </li>
          <li>
            🎓 Graduated with flying colors from the Tecnológico de Monterrey's
            elite Data Analytics & Visualization Bootcamp. Oh, and did I mention
            the Web Development Bootcamp too? Double threat! 🚀
          </li>
          <li>
            🎨 Got data? I'll turn it into a Picasso! Crafting user-friendly
            apps is my jam, blending creativity with some serious
            problem-solving chops.
          </li>
          <li>
            🔍 Known in the office as the "Detail Detective" – no project too
            big, no detail too tiny! 🕵️‍♂️
          </li>
        </ul>
      </article>
    </section>
  );
};

export default IntroductionComponent;
