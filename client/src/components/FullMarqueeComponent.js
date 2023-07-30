import MarqueXComponent from "./MarqueeXComponent";
import MarqueYComponent from "./MarqueeYComponent";

const FullMarquee = () => {
  const topValues = ["JavaScript", "Python", "Django"];
  const marqueeTop = topValues.map((val) => {
    return <MarqueXComponent topic={val} />;
  });
  const marqueeLeft = topValues.map((val) => {
    return <MarqueYComponent topic={val} deg={270} />;
  });
  const marqueeRight = topValues.map((val) => {
    return <MarqueYComponent topic={val} deg={90} />;
  });
  return (
    <>
      <section className="absolute bg-white min-w-full top-0 h-10 border-y-4 border-black">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marqueeX flex min-w-full shrink-0 items-center justify-around">
            {marqueeTop}
          </div>
          <div className="absolute animate-marqueeX2 flex min-w-full shrink-0 items-center justify-around">
            {marqueeTop}
          </div>
        </div>
      </section>
      <section className="absolute bg-white min-h-full left-0 w-10 border-x-4 border-black">
        <div className="relative flex overflow-y-hidden">
          <div className="animate-marqueeY flex shrink-0 items-center justify-around h-screen flex-col whitespace-nowrap w-9">
            {marqueeLeft}
          </div>
          <div className="absolute flex shrink-0 items-center justify-around h-screen animate-marqueeY2 flex-col whitespace-nowrap w-9">
            {marqueeLeft}
          </div>
        </div>
      </section>
      <section className="absolute bg-white min-h-full right-0 w-10 border-x-4 border-black">
        <div className="relative flex overflow-y-hidden">
          <div className="animate-marqueeY flex shrink-0 items-center justify-around h-screen flex-col whitespace-nowrap w-9">
            {marqueeRight}
          </div>

          <div className="absolute flex shrink-0 items-center justify-around h-screen animate-marqueeY2 flex-col whitespace-nowrap w-9">
            {marqueeRight}
          </div>
        </div>
      </section>
      <section className="absolute bg-white min-w-full bottom-0 h-10 border-y-4 border-black">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marqueeX flex min-w-full shrink-0 items-center justify-around">
            {marqueeTop}
          </div>

          <div className="absolute animate-marqueeX2 flex min-w-full shrink-0 items-center justify-around">
            {marqueeTop}
          </div>
        </div>
      </section>
    </>
  );
};

export default FullMarquee;
