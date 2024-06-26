import { React } from "react";
import ProjectCardComponent from "./ProjectCardComponent";

const ProjectListComponent = ({ projects, refetch }) => {
  return (
    <div className="flex flex-wrap justify-center justify-evenly mb-12 pb-5">
      {projects.map((project) => (
        <ProjectCardComponent
          key={project._id}
          title={project.name}
          image={project.portrait}
          id={project._id}
          views={project.viewsCount}
          likes={project.likesCount}
          userLiked={project.likedUsers.map(user => user._id)}
          refetch={refetch}
        />
      ))
      }
    </div>
  );
};

export default ProjectListComponent;
