import { React, useEffect, useState } from "react";
import NavBarComponent from "../components/NavBarComponent";
import ProjectListComponent from "../components/ProjectListComponent";
import ProjectSearchBox from "../components/ProjectSearchComponent";

const objArr = [
  {
    id: 1,
    title: "A Night In The Library",
    img: "https://d1v9pyzt136u2g.cloudfront.net/blog/wp-content/uploads/2021/09/05164111/1623680067938615-dark-academia-1.jpg",
  },
  {
    id: 2,
    title: "Evenings in Paris",
    img: "https://evenz.qantumthemes.xyz/demo/wp-content/uploads/2019/08/14323-1170x780.jpg",
  },
  {
    id: 3,
    title: "Tony Starks House",
    img: "https://images.adsttc.com/media/images/6338/66d8/4dba/6e52/5dde/7256/slideshow/post-human-aesthetics-in-architecture-interview-with-matias-del-campo_7.jpg?1664640807",
  },
  {
    id: 4,
    title: "Spirals Into Museum",
    img: "https://d251cvb8f7e7p0.cloudfront.net/images/Article_Images/ImageForArticle_8421_16342131650378108.jpg",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(objArr)
  useEffect(() => {
    document.title = "Projects";
  }, []);

  const searchInput = (searchText) => {
    const arrResult = objArr.filter((project) =>
      project.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setProjects(arrResult)
  };

  return (
    <>
      <h1 className="text-center text-10xl">PROJECTS</h1>
      <ProjectSearchBox searchInput={searchInput} />
      <ProjectListComponent projects={projects} />
      <NavBarComponent />
    </>
  );
};

export default Projects;
