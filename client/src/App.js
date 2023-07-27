import HomeFigure from "./components/HomeFigure";
import React, { useState } from "react";

// const App = () => {
//   const [hoveredBox, setHoveredBox] = useState(null);
//   const boxes = Array(5).fill(null);
//   return (
//     <div className="container bg-green-500 border-1 border-indigo-600 max-w-full flex items-center justify-center min-h-screen">
//       <div className="grid grid-rows-5 grid-flow-col w-11/12">
//         {boxes.map((_, index) => (
//           <div
//             key={index}
//             className={`box-border grid-item flex items-center justify-center row-span-2 col-span-2 p-4 border-t-2 border-s-2 transition-all ${
//               hoveredBox === index
//                 ? "h-40 w-40 bg-purple-600"
//                 : "h-36 w-36 bg-orange-500"
//             }`}
//             onMouseEnter={() => setHoveredBox(index)}
//             onMouseLeave={() => setHoveredBox(null)}
//           >
//             Box {index + 1}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const App = () => {
  return (
    <div className="container bg-blue-500 border-2 border-indigo-600 max-w-full flex items-center justify-center min-h-screen">
      <div className="grid grid-flow-row-dense grid-cols-10 grid-rows-10">
        <HomeFigure title={"Home"} span={"row-span-4 col-span-6"} />
        <HomeFigure title={"Connect"} span={"row-span-6 col-span-4"} />
        <HomeFigure title={"About"} span={"row-span-6 col-span-4"} />
        <HomeFigure title={"RM"} span={"row-span-2 col-span-2"} />
        <HomeFigure title={"Resume"} span={"row-span-4 col-span-6"} />
      </div>
    </div>
  );
};

export default App;
