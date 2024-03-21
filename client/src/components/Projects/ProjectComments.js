import { useState } from "react"

import ProjectReplies from "./ProjectReplies";
import ReplyModal from "./Modals/ReplyModalForm";
import { FaReply } from "react-icons/fa";
import { FaTrashAlt, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

import { DELETE_COMMENT, LIKE_COMMENT, DISLIKE_COMMENT, QUIT_DISLIKE_COMMENT, QUIT_LIKE_COMMENT } from "../../utils/mutations";
import { useMutation } from '@apollo/client';
import Auth from "../../utils/auth";

import DeleteConfirmationModal from "./Modals/DeleteConfirmationModal";
import CommentActions from "./LikeOrDislikeComment";


const ProjectComments = ({ isLoggedIn, commentDetail, refetch }) => {
    const currentDate = new Date();
    console.log(commentDetail)
    const [replyModalStates, setReplyModalStates] = useState({});
    const [showReplies, setShowReplies] = useState(false)

    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [commentToDelete, setCommentToDelete] = useState(null);

    const [likeComment, { error: likeCommentError }] = useMutation(LIKE_COMMENT);
    const [quitLikeComment, { error: quitLikeCommentError }] = useMutation(QUIT_LIKE_COMMENT);

    const [dislikeComment, { error: dislikeCommentError }] = useMutation(DISLIKE_COMMENT);
    const [quitDislikeComment, { error: quitDislikeCommentError }] = useMutation(QUIT_DISLIKE_COMMENT);

    // Check if the user is authenticated
    const isAuthenticated = Auth.getUser() != null;

    // Get the user data
    const userData = isAuthenticated ? Auth.getUser().data : null;

    // Then in your async functions:
    const handleLikeComment = async (commentId) => {
        try {
            if (userData) {
                await likeComment({
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

    // Then in your async functions:
    const handleDislikeComment = async (commentId) => {
        try {
            if (userData) {
                await dislikeComment({
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

    const toggleReplyModal = (commentId) => {
        setReplyModalStates(prev => ({ ...prev, [commentId]: !prev[commentId] }));
    };

    const closeReplyModal = (commentId) => {
        setReplyModalStates(prev => ({ ...prev, [commentId]: false }));
    };

    const promptDeleteComment = (commentId) => {
        setCommentToDelete(commentId);
        setShowDeleteConfirmation(true);
    };

    const confirmDeleteComment = () => {
        if (commentToDelete) {
            // Place your existing deletion logic here
            handleCommentDelete(commentToDelete);
        }
        // Close the modal and reset the comment to delete
        setShowDeleteConfirmation(false);
        setCommentToDelete(null);
    };

    const cancelDelete = () => {
        setShowDeleteConfirmation(false);
        setCommentToDelete(null);
    };


    const [deleteComment, { error: deleteCommentError }] = useMutation(DELETE_COMMENT);

    const handleClick = () => {
        setShowReplies(!showReplies)
    }

    const handleCommentDelete = async (commentId) => {
        try {
            await deleteComment({
                variables: {
                    userId: Auth.getUser().data._id,
                    commentId,
                },
            });

            refetch();
        } catch (error) {
            console.error(error);
        }
    };


    const projComments = commentDetail.map(comment => {
        const commentDate = new Date(Number(comment.createdAt))

        const diff = currentDate - commentDate;
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        let since;
        if (days) {
            since = `${days}d`
        } else if (hours) {
            since = `${hours}h`
        } else {
            since = `${minutes}m`
        }
        return (
            <div key={comment._id} className="container mx-auto mt-5 pt-5 px-5 rounded-md shadow-lg border border-black">
                <div className="flex justify-start gap-x-4 mb-5">
                    <div className="flex flex-col justify-start items-center">
                        <div className="bg-cyan-300 px-3 py-3 w-12 h-12 text-sm font-semibold rounded-full shadow-sm flex items-center justify-center">{comment.user.username[0]}</div>
                    </div>

                    <section className="flex flex-col justify-start w-full">
                        <div className="flex justify-between">
                            <div className="text-cyan-400 font-semibold">{comment.user.username}</div>
                            <div className="text-gray-600 font-semibold">{since}</div>
                        </div>
                        <div className="pt-2 pb-4">{comment.comment}</div>
                        {isLoggedIn && (
                            <section className="flex justify-between">
                                <div className="flex justify-start gap-x-3 items-center">
                                    <FaReply className="cursor-pointer hover:text-cyan-400 ease-in duration-200" onClick={() => toggleReplyModal(comment._id)} />
                                    {comment.user._id === Auth.getUser().data._id && (
                                        <>
                                            <FaTrashAlt className="cursor-pointer hover:text-cyan-400 ease-in duration-200" onClick={() => promptDeleteComment(comment._id)} />
                                            <CiEdit className="cursor-pointer hover:text-cyan-400 ease-in duration-200" />
                                        </>
                                    )}
                                </div>
                                <CommentActions
                                    likedUsers={comment.likes.map(user => user._id)}
                                    dislikedUsers={comment.dislikes.map(user => user._id)}
                                    netlikes={comment.netLikes}
                                />
                            </section>
                        )}

                        {showDeleteConfirmation && (
                            <DeleteConfirmationModal confirmDeleteComment={confirmDeleteComment} cancelDelete={cancelDelete} />
                        )}
                    </section>
                </div>
                {showReplies ? (
                    <>
                        <hr className="my-5 ease-in duration-300" />
                        <ProjectReplies isLoggedIn={isLoggedIn} replies={comment.replies} refetch={refetch} />
                        <button className="border-t-2 border-cyan-400 font-semibold text-gray-400 hover:text-black transition-all min-w-full mt-5 tracking-widest py-2 text-sm" onClick={handleClick}>Hide Replies</button>
                    </>) : (<button className="border-t-2 border-cyan-400 font-semibold text-gray-400 hover:text-black transition-all min-w-full mt-5 tracking-widest py-2 text-sm" onClick={handleClick}>Show Replies ({comment.replies.length})</button>)}
                <ReplyModal commentId={comment._id} isOpen={replyModalStates[comment._id]} onClose={() => closeReplyModal(comment._id)} refetch={refetch} />
            </div>
        )
    })
    return (
        <>
            {projComments}
        </>
    )
}

export default ProjectComments