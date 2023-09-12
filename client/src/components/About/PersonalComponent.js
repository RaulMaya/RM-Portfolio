import React from "react";
import raulFutbol from "./RaulFutbol.jpg";

const PersonalComponent = () => {
  return (
    <>
      <section className="container flex justify-evenly my-12 min-w-full">
        <article className="bg-white text-center border border-black rounded-lg shadow-lg p-5 w-64 h-96 ">
          <img
            className="object-contain m-auto w-32 h-32"
            src="https://www.pngmart.com/files/1/2014-World-Cup-Soccer-Ball-PNG.png"
            alt="Brazuca ball"
          />
          <p>Playing Soccer</p>
          <p>Is my favorite sport</p>
        </article>
        <article className="bg-white text-center border border-black rounded-lg shadow-lg p-5 w-64 h-96 ">
          <img
            className="object-contain m-auto w-32 h-32"
            src="https://c1.neweggimages.com/ProductImageCompressAll1280/79-261-901-V09.jpg"
            alt="Brazuca ball"
          />
          <p>Videogames</p>
          <p>Is my favorite sport</p>
        </article>
        <article className="bg-white text-center border border-black rounded-lg shadow-lg p-5 w-64 h-96 ">
          <img
            className="object-contain m-auto w-32 h-32"
            src="https://pngimg.com/uploads/dumbbell/dumbbell_PNG16376.png"
            alt="Brazuca ball"
          />
          <p>Lifting Weights</p>
          <p>Is my favorite sport</p>
        </article>
        <article className="bg-white text-center border border-black rounded-lg shadow-lg p-5 w-64 h-96 ">
          <img
            className="object-contain m-auto w-32 h-32"
            src="https://www.freepnglogos.com/uploads/film-reel-png/film-reel-the-movies-owens-valley-12.png"
            alt="Brazuca ball"
          />
          <p>Watch Movies</p>
          <p>Is my favorite sport</p>
        </article>
        <article className="bg-white text-center border border-black rounded-lg shadow-lg p-5 w-64 h-96 ">
          <img
            className="object-contain m-auto w-32 h-32"
            src="https://www.megaidea.net/wp-content/uploads/2022/01/Lego-4-1024x837.png"
            alt="Brazuca ball"
          />
          <p>Build Legos</p>
          <p>Is my favorite sport</p>
        </article>
      </section>

      <section className="container my-12 min-w-full flex flex-row justify-center">
        <article className="basis-3/4">
          <p className="ms-12 mb-5 text-2xl tracking-wide">
            Hey there! I'm Raul Maya, a dedicated web developer and data
            engineer with a passion that's only rivaled by my love for coffee.
            Each cup fuels my creativity, helping me craft seamless digital
            solutions. Based in vibrant Mexico, I cherish moments with my
            family, our Shih-Tzu being the star, of course. While football
            captures my athletic side, my intellectual pursuits involve
            assembling intricate Lego Technic sets and delving into suspenseful
            reads, with "The Analyst" by John Katzenbach being a recent
            favorite. With a blend of technical prowess and a rich palette of
            interests, I strive to bring a unique perspective to every project.
          </p>
        </article>
        <article className="basis-1/4 flex justify-center">
          <img
            className="object-cover w-64 h-64 drop-shadow-xl"
            src={raulFutbol}
            alt="Raul Maya in the americas tower"
          />
        </article>
      </section>
    </>
  );
};

export default PersonalComponent;
