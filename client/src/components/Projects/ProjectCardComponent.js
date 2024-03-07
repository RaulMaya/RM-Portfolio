import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link as RouterLink } from 'react-router-dom';

const ProjectCardComponent = ({ title, image, id, views }) => {

  const routeTo = "/project/" + id
  console.log(routeTo)
  return (
    <>
      <div className="max-w-sm mx-3">
        <RouterLink to={routeTo}>
          <img
            className="shadow-lg rounded object-cover h-56 w-96 "
            src={image}
            alt={title}
          />
        </RouterLink>
        <div className="flex justify-between pb-4">
          <div className="pt-1 text-xl mb-2">{title}</div>
          <div className="flex justify-between gap-x-4">
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="pt-3 me-1 text-red-500 hover:text-red-700"
                icon={faHeart}
              />
              <p className="text-sm pt-3">3</p>
            </div>
            <div className="flex justify-center">
              <FontAwesomeIcon className="pt-3 me-1" icon={faEye} />
              <p className="text-sm pt-3">{views}</p>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default ProjectCardComponent;
