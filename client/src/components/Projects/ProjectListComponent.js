import { React } from "react";
import ProjectCardComponent from "./ProjectCardComponent";

const ProjectListComponent = ({ projects }) => {
  return (
    <div className="flex flex-wrap justify-center justify-evenly mb-12 pb-5">
      {projects.map((project) => (
        <ProjectCardComponent
          key={project.id}
          title={project.title}
          image={project.img}
        />
      ))}
    </div>
  );
};

export default ProjectListComponent;
