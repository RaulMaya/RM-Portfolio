import React from "react";
import { FaRegHeart, FaHeart, FaEye } from "react-icons/fa";
import { Link as RouterLink } from 'react-router-dom';
import Auth from "../../utils/auth";
import { LIKE_PROJECT, DISLIKE_PROJECT } from "../../utils/mutations";
import { useMutation } from '@apollo/client';



const ProjectCardComponent = ({ title, image, id, views, likes, userLiked, refetch }) => {

  const [likeProject, { error: likeProjectError }] = useMutation(LIKE_PROJECT);
  const [dislikeProject, { error: dislikeProjectError }] = useMutation(DISLIKE_PROJECT);

  // Check if the user is authenticated
  const isAuthenticated = Auth.getUser() != null;

  // Get the user data
  const userData = isAuthenticated ? Auth.getUser().data : null;

  // Then in your async functions:
  const handleLikeProject = async (projectId) => {
    try {
      if (userData) {
        await likeProject({
          variables: {
            userId: userData._id, // Use userData._id here
            projectId,
          },
        });

        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDislikeProject = async (projectId) => {
    try {
      if (userData) {
        await dislikeProject({
          variables: {
            userId: userData._id, // Use userData._id here
            projectId,
          },
        });

        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };


  const routeTo = "/project/" + id

  const isStringInArray = (userId, likesId) => {
    return likesId.includes(userId);
  }

  const likeIcon = isAuthenticated ? (
    isStringInArray(Auth.getUser().data._id, userLiked) ? (
      <FaHeart
        onClick={() => handleDislikeProject(id)}
        className="ease-linear duration-300 cursor-pointer pt-3 me-1 text-red-500 hover:text-red-700 text-3xl"
      />
    ) : (
      <FaRegHeart
        onClick={() => handleLikeProject(id)}
        className="ease-linear duration-300 cursor-pointer pt-3 me-1 text-red-500 hover:text-red-700 text-3xl"
      />
    )
  ) : (
    <FaRegHeart
      className="ease-linear duration-300 pt-3 me-1 text-gray-500 text-3xl"
    />
  );
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
              {likeIcon}
              <p className="text-sm pt-3">{likes}</p>
            </div>
            <div className="flex justify-center">
              <FaEye className="pt-3 me-1 text-3xl" />
              <p className="text-sm pt-3">{views}</p>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default ProjectCardComponent;
