import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";

const ProjectCardComponent = ({ title, image }) => {
  return (
    <>
      <div className="max-w-sm mx-3">
        <img
          className="shadow-lg rounded object-cover h-56 w-96 "
          src={image}
          alt={title}
        />
        <div className="flex justify-between pb-4">
          <div className="pt-1 text-xl mb-2">{title}</div>
          <div className="flex">
            <FontAwesomeIcon
              className="pt-3 me-2 text-red-500 hover:text-red-700"
              icon={faHeart}
            />
            <FontAwesomeIcon className="pt-3" icon={faEye} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCardComponent;
