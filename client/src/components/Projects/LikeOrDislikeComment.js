import React from 'react';
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import { LIKE_COMMENT, DISLIKE_COMMENT, QUIT_DISLIKE_COMMENT, QUIT_LIKE_COMMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

import Auth from '../../utils/auth';

const CommentActions = ({ likedUsers, dislikedUsers, netLikes, userId, refetch, comID }) => {

    const [likeComment, { error: likeCommentError }] = useMutation(LIKE_COMMENT);
    const [dislikeComment, { error: dislikeCommentError }] = useMutation(DISLIKE_COMMENT);
    const [quitLikeComment, { error: quitLikeCommentError }] = useMutation(QUIT_LIKE_COMMENT);
    const [quitDislikeComment, { error: quitDislikeCommentError }] = useMutation(QUIT_DISLIKE_COMMENT);

    // Check if the user has liked or disliked the comment
    console.log(likedUsers, userId)
    console.log(dislikedUsers, userId)
    const hasLiked = likedUsers.includes(userId);
    const hasDisliked = dislikedUsers.includes(userId);

    // Check if the user is authenticated
    const isAuthenticated = Auth.getUser() != null;

    // Get the user data
    const userData = isAuthenticated ? Auth.getUser().data : null;

    const handleLikeComment = async (commentId) => {
        try {
            if (userData) {
                await likeComment({
                    variables: {
                        userId: userData._id, // Use userData._id here
                        commentId,
                    },
                });

                if (hasDisliked) {
                    console.log("Quit Dislike")
                    handleQuitDislikeComment(commentId)
                } else {
                    refetch();
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleDislikeComment = async (commentId) => {
        try {
            if (userData) {
                await dislikeComment({
                    variables: {
                        userId: userData._id, // Use userData._id here
                        commentId,
                    },
                });

                if (hasLiked) {
                    console.log("Quit Like")
                    handleQuitLikeComment(commentId)
                } else {
                    refetch();
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleQuitLikeComment = async (commentId) => {
        try {
            if (userData) {
                await quitLikeComment({
                    variables: {
                        userId: userData._id, // Use userData._id here
                        commentId,
                    },
                });

                refetch();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleQuitDislikeComment = async (commentId) => {
        try {
            if (userData) {
                await quitDislikeComment({
                    variables: {
                        userId: userData._id, // Use userData._id here
                        commentId,
                    },
                });

                refetch();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex justify-start gap-x-3 items-center">
            {hasLiked ? (
                <FaThumbsUp onClick={() => { handleQuitLikeComment(comID) }} className="cursor-pointer hover:text-cyan-400 ease-in duration-200 text-green-500" />
            ) : (
                <FaRegThumbsUp onClick={() => { handleLikeComment(comID) }} className="cursor-pointer hover:text-cyan-400 ease-in duration-200" />
            )}
            {netLikes ? (<p>{netLikes}</p>) : (<p>0</p>)}
            {hasDisliked ? (
                <FaThumbsDown onClick={() => { handleQuitDislikeComment(comID) }} className="cursor-pointer hover:text-cyan-400 ease-in duration-200 text-red-600" />
            ) : (
                <FaRegThumbsDown onClick={() => { handleDislikeComment(comID) }} className="cursor-pointer hover:text-cyan-400 ease-in duration-200" />
            )}
        </div>
    );
};

export default CommentActions;