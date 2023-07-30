import MarqueXComponent from "./MarqueeXComponent";
import MarqueYComponent from "./MarqueeYComponent";

const FullMarquee = () => {

  return (
    <>
      <section className="absolute bg-white min-w-full top-0 h-10 border-y-4 border-black">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marqueeX flex min-w-full shrink-0 items-center justify-around">
            <MarqueXComponent topic={"JavaScript"} />
          </div>

          <div className="absolute animate-marqueeX2 flex min-w-full shrink-0 items-center justify-around">
            <MarqueXComponent topic={"JavaScript"} />
          </div>
        </div>
      </section>
      <section className="absolute bg-white min-h-full left-0 w-10 border-x-4 border-black">
        <div className="relative flex overflow-y-hidden">
          <div className="animate-marqueeY flex shrink-0 items-center justify-around h-screen flex-col whitespace-nowrap w-9">
            <MarqueYComponent topic={"Data Analytics"} deg={270} />
          </div>
          <div className="absolute flex shrink-0 items-center justify-around h-screen animate-marqueeY2 flex-col whitespace-nowrap w-9">
            <MarqueYComponent topic={"Data Analytics"} deg={270} />
          </div>
        </div>
      </section>
      <section className="absolute bg-white min-h-full right-0 w-10 border-x-4 border-black">
        <div className="relative flex overflow-y-hidden">
          <div className="animate-marqueeY flex shrink-0 items-center justify-around h-screen flex-col whitespace-nowrap w-9">
            <MarqueYComponent topic={"Data Analytics"} deg={90} />
          </div>

          <div className="absolute flex shrink-0 items-center justify-around h-screen animate-marqueeY2 flex-col whitespace-nowrap w-9">
            <MarqueYComponent topic={"Data Analytics"} deg={90} />
          </div>
        </div>
      </section>
      <section className="absolute bg-white min-w-full bottom-0 h-10 border-y-4 border-black">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marqueeX flex min-w-full shrink-0 items-center justify-around">
            <MarqueXComponent topic={"JavaScript"} />
          </div>

          <div className="absolute animate-marqueeX2 flex min-w-full shrink-0 items-center justify-around">
            <MarqueXComponent topic={"JavaScript"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FullMarquee