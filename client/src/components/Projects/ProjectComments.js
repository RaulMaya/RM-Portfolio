import { useState } from "react"

import ProjectReplies from "./ProjectReplies";
import { FaReply } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

import { DELETE_COMMENT } from "../../utils/mutations";
import { useMutation } from '@apollo/client';
import Auth from "../../utils/auth";

const ProjectComments = ({ isLoggedIn, commentDetail, refetch }) => {
    const currentDate = new Date();

    const [showReplies, setShowReplies] = useState(false)
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
                            <section className="flex justify-start gap-x-3">
                                <FaReply className="cursor-pointer" />
                                <AiOutlineLike className="cursor-pointer" />
                                <FaTrashAlt className="cursor-pointer" onClick={() => handleCommentDelete(comment._id)} />
                                <CiEdit className="cursor-pointer" />
                            </section>
                        )
                        }


                    </section>
                </div>
                {showReplies ? (
                    <>
                        <hr className="my-5 ease-in duration-300" />
                        <ProjectReplies isLoggedIn={isLoggedIn} replies={comment.replies} />
                        <button className="border-t-2 border-cyan-400 font-semibold text-gray-400 hover:text-black transition-all min-w-full mt-5 tracking-widest py-2 text-sm" onClick={handleClick}>Hide Replies</button>
                    </>) : (<button className="border-t-2 border-cyan-400 font-semibold text-gray-400 hover:text-black transition-all min-w-full mt-5 tracking-widest py-2 text-sm" onClick={handleClick}>Show Replies ({comment.replies.length})</button>)}

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