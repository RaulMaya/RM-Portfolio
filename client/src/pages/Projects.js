import React from "react";
import NavBarComponent from "../components/NavBarComponent";
import ProjectCardComponent from "../components/ProjectCardComponent";
import ProjectSearchBox from "../components/ProjectSearchComponent";

const Projects = () => {
  return (
    <>
      <h1 className="text-center text-10xl">PROJECTS</h1>
      <ProjectSearchBox />
      <div className="flex flex-wrap justify-center justify-evenly">
        <ProjectCardComponent
          className="basis-1/4"
          image={
            "https://d1v9pyzt136u2g.cloudfront.net/blog/wp-content/uploads/2021/09/05164111/1623680067938615-dark-academia-1.jpg"
          }
        />
        <ProjectCardComponent
          className="basis-1/4"
          image={
            "https://evenz.qantumthemes.xyz/demo/wp-content/uploads/2019/08/14323-1170x780.jpg"
          }
        />
        <ProjectCardComponent
          className="basis-1/4"
          image={
            "https://images.adsttc.com/media/images/6338/66d8/4dba/6e52/5dde/7256/slideshow/post-human-aesthetics-in-architecture-interview-with-matias-del-campo_7.jpg?1664640807"
          }
        />
        <ProjectCardComponent
          className="basis-1/4"
          image={
            "https://images.adsttc.com/media/images/6338/66d8/4dba/6e52/5dde/7256/slideshow/post-human-aesthetics-in-architecture-interview-with-matias-del-campo_7.jpg?1664640807"
          }
        />
      </div>
      <NavBarComponent />
    </>
  );
};

export default Projects;
