import { React, useEffect, useState } from "react";
import NavBarComponent from "../components/NavBarComponent";
import ProjectListComponent from "../components/Projects/ProjectListComponent";
import ProjectSearchBox from "../components/Projects/ProjectSearchComponent";
import LogSignHeader from "../components/LogInSignUp/LogSignHeaderComponent";

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
  {
    id: 5,
    title: "Frank Gehry’s Home",
    img: "https://mymodernmet.com/wp/wp-content/uploads/2021/04/contemporary-architecture-top-buildings-frank-gehry-zaha-hadid-sydney-opera-house-my-modern-met-12.jpg",
  },
  {
    id: 6,
    title: "The Vessel by Heatherwick Studio",
    img: "https://mymodernmet.com/wp/wp-content/uploads/2021/04/contemporary-architecture-top-buildings-frank-gehry-zaha-hadid-sydney-opera-house-my-modern-met-13.jpg",
  },
  {
    id: 7,
    title: "Vertical Forest of Milan",
    img: "https://mymodernmet.com/wp/wp-content/uploads/2021/04/contemporary-architecture-top-buildings-frank-gehry-zaha-hadid-sydney-opera-house-my-modern-met-14.jpg",
  },
  {
    id: 8,
    title: "Spirals Into Museum",
    img: "https://mymodernmet.com/wp/wp-content/uploads/2021/04/contemporary-architecture-top-buildings-frank-gehry-zaha-hadid-sydney-opera-house-my-modern-met-3.jpg",
  },
  {
    id: 9,
    title: "The Shard in London",
    img: "https://d1v9pyzt136u2g.cloudfront.net/blog/wp-content/uploads/2021/09/05164111/1623680067938615-dark-academia-1.jpg",
  },
  {
    id: 10,
    title: "Casa Batlló in Barcelona",
    img: "https://mymodernmet.com/wp/wp-content/uploads/2021/02/art-nouveau-buildings-architecture-style-art-nouveau-examples-my-modern-met-casa-batlo-gaudi-barcelona-1.jpg",
  },
  {
    id: 11,
    title: "Métro Entrances in Paris, France",
    img: "https://mymodernmet.com/wp/wp-content/uploads/2021/02/art-nouveau-buildings-architecture-style-art-nouveau-examples-my-modern-met-metro-entrances-metropolitan-paris-hector-guimard-3.jpg",
  },
  {
    id: 12,
    title: "Secession Building in Vienna, Austria",
    img: "https://mymodernmet.com/wp/wp-content/uploads/2021/02/art-nouveau-buildings-architecture-style-art-nouveau-examples-my-modern-met-secession-building-vienna-austria-8.jpg",
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
      <LogSignHeader />
      <div className="text-center">
        <h1 className="text-8xl md:text-10xl">PROJECTS</h1>
      </div>
      <ProjectSearchBox searchInput={searchInput} />
      <ProjectListComponent projects={projects} />
      <NavBarComponent />
    </>
  );
};

export default Projects;
