import React from "react";
import raulFutbol from "./RaulFutbol.jpg";

const hobbiesArr = [{
  id: 1,
  title: "Soccer",
  description: "Passionate about soccer, I've played at university and fervently support Tottenham Hotspur and Bayern München, embodying the teamwork and strategy I bring to my professional life.",
  image: "https://www.pngmart.com/files/1/2014-World-Cup-Soccer-Ball-PNG.png",
  bg: "https://w0.peakpx.com/wallpaper/431/548/HD-wallpaper-fifa-19-stadium-iphone-xs-max-background-and-soccer-pitch.jpg"
}, {
  id: 2,
  title: "Videogames",
  description: "Immersed in the virtual worlds of 'Red Dead Redemption' and 'FIFA', I currently find adventure swinging through New York City in 'Spider-Man: Miles Morales'.",
  image: "https://cdn.pixabay.com/photo/2020/06/21/20/43/playstation-5326719_1280.png",
  bg: "https://mcdn.wallpapersafari.com/medium/29/15/0WoCwm.png"
}, {
  id: 3,
  title: "Lifting Weights",
  description: "My daily morning visits to the gym are a testament to my dedication to fitness, embodying the discipline and stoicism that guide my pursuit of self-improvement.",
  image: "https://pngimg.com/uploads/dumbbell/dumbbell_PNG102651.png",
  bg: "https://wallpapers.com/images/high/gym-iphone-okdize5crhlw5lcu.webp"
}, {
  id: 4,
  title: "Watch Movies",
  description: "I'm captivated by the mind-bending twists of 'The Butterfly Effect' and the intense drama of 'Breaking Bad', my go-to film and series for a narrative thrill",
  image: "https://www.freepnglogos.com/uploads/film-reel-png/film-reel-the-movies-owens-valley-12.png",
  bg: "https://e1.pxfuel.com/desktop-wallpaper/773/9/desktop-wallpaper-breaking-bad-iphone-breaking-bad-phone.jpg"
}, {
  id: 5,
  title: "Build Legos",
  description: "The art of assembly fuels my passion, as I meticulously piece together the complex world of LEGO Technic models.",
  image: "https://www.lego.com/cdn/cs/set/assets/bltc2661d66536e8c5d/42127.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  bg: "https://wallpapers.com/images/high/lego-bricks-red-iphone-nw72nlgfqug6tq1o.webp"
},]

const PersonalComponent = () => {

  const renderHobbies = hobbiesArr.map((hobbie) => {
    return <div class="cursor-pointer group h-120 w-80 [perspective:1000px] my-5">
      <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div class="absolute inset-0">
          <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={hobbie.bg} alt="" />
        </div>
        <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div class="flex min-h-full flex-col items-center justify-center">
            <h1 class="text-3xl font-bold">{hobbie.title}</h1>
            <p class="text-base">{hobbie.description}</p>
          </div>
        </div>
      </div>
    </div>

  })
  return (
    <>
      <section className="container flex flex-wrap justify-evenly my-12 min-w-full">
        {renderHobbies}
      </section>

      <section className="container my-12 min-w-full flex flex-row justify-center">
        <article className="basis-3/4">
          <p className="mx-12 mb-5 xl:text-4xl lg:text-xl md:text-lg sm:text-base tracking-wide">
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
            className="object-cover w-full h-auto drop-shadow-xl max-w-md"
            src={raulFutbol}
            alt="Raul Maya in the americas tower"
          />
        </article>
      </section>
    </>
  );
};

export default PersonalComponent;
