import React from 'react';
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';


const CommentActions = ({ likedUsers, dislikedUsers, netLikes, userId }) => {

    // Check if the user has liked or disliked the comment
    const hasLiked = likedUsers.includes(userId);
    const hasDisliked = dislikedUsers.includes(userId);

    return (
        <div className="flex justify-start gap-x-3 items-center">
            {hasLiked ? (
                <FaThumbsUp className="cursor-pointer hover:text-cyan-400 ease-in duration-200" />
            ) : (
                <FaRegThumbsUp className="cursor-pointer hover:text-cyan-400 ease-in duration-200" />
            )}
            <p>{netLikes}</p>
            {hasDisliked ? (
                <FaThumbsDown className="cursor-pointer hover:text-cyan-400 ease-in duration-200" />
            ) : (
                <FaRegThumbsDown className="cursor-pointer hover:text-cyan-400 ease-in duration-200" />
            )}
        </div>
    );
};

export default CommentActions;