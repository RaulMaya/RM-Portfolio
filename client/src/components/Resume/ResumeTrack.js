import React from "react";
import Awards from "./Awards";
import Experience from "./Experience";
import Education from "./Education";
import Languages from "./Languages";

const ResumeTrack = () => {
  return (
    <div className="container m-auto">
      <section className="flex flex-wrap gap-x-3 justify-evenly">
        <Experience />
        <Education />
        <Awards />
        <Languages />
      </section>
    </div>
  );
};

export default ResumeTrack;
