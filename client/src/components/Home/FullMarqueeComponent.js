import MarqueXComponent from "./MarqueeXComponent";
import MarqueYComponent from "./MarqueeYComponent";

const FullMarquee = () => {
  const topValues = ["JavaScript", "Python", "Django", "Web Scraping"];
  const marqueeTop = topValues.map((val) => {
    return <MarqueXComponent key={val} topic={val} />;
  });
  const bottomValues = ["React", "Handlebars", "Node", "Express"];
  const marqueeBottom = bottomValues.map((val) => {
    return <MarqueXComponent key={val} topic={val} />;
  });
  const leftValues = ["React", "Flask", "Django"];
  const marqueeLeft = leftValues.map((val) => {
    return <MarqueYComponent  className={'rotate-270'} key={val} topic={val} deg={270} />;
  });
  const rightValues = ["HTML", "CSS", "Vite"];
  const marqueeRight = rightValues.map((val) => {
    return <MarqueYComponent className={'rotate-90'} key={val} topic={val} deg={90} />;
  });
  return (
    <>
      <section className="hidden md:block absolute bg-white min-w-full top-0 h-10 border-y-4 border-black">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marqueeX flex min-w-full shrink-0 items-center justify-evenly">
            {marqueeTop}
          </div>
          <div className="absolute animate-marqueeX2 flex min-w-full shrink-0 items-center justify-evenly">
            {marqueeTop}
          </div>
        </div>
      </section>
      <section className="hidden md:block absolute bg-white min-h-full left-0 w-10 border-x-4 border-black">
        <div className="relative flex overflow-y-hidden">
          <div className="animate-marqueeY flex shrink-0 items-center justify-evenly h-screen flex-col whitespace-nowrap w-9">
            {marqueeLeft}
          </div>
          <div className="absolute flex shrink-0 items-center justify-evenly h-screen animate-marqueeY2 flex-col whitespace-nowrap w-9">
            {marqueeLeft}
          </div>
        </div>
      </section>
      <section className="hidden md:block absolute bg-white min-h-full right-0 w-10 border-x-4 border-black">
        <div className="relative flex overflow-y-hidden">
          <div className="animate-marqueeY flex shrink-0 items-center justify-evenly h-screen flex-col whitespace-nowrap w-9">
            {marqueeRight}
          </div>

          <div className="absolute flex shrink-0 items-center justify-evenly h-screen animate-marqueeY2 flex-col whitespace-nowrap w-9">
            {marqueeRight}
          </div>
        </div>
      </section>
      <section className="hidden md:block absolute bg-white min-w-full bottom-0 h-10 border-y-4 border-black">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marqueeX flex min-w-full shrink-0 items-center justify-evenly">
            {marqueeBottom}
          </div>

          <div className="absolute animate-marqueeX2 flex min-w-full shrink-0 items-center justify-evenly">
            {marqueeBottom}
          </div>
        </div>
      </section>
    </>
  );
};

export default FullMarquee;
