import { useState } from "react"

import ProjectReplies from "./ProjectReplies";
import { FaReply } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

const ProjectComments = ({ isLoggedIn, commentDetail }) => {
    const [showReplies, setShowReplies] = useState(false)

    const handleClick = () => {
        setShowReplies(!showReplies)
    }

    console.log(commentDetail)

    const projComments = commentDetail.map(comment => {
        return (
            <div key={comment._id} className="container mx-auto mt-5 pt-5 px-5 rounded-md shadow-lg border border-black">
                <div className="flex justify-start gap-x-4 mb-5">
                    <div className="flex flex-col justify-start items-center">
                        <div className="bg-cyan-300 px-3 py-3 w-12 h-12 text-sm font-semibold rounded-full shadow-sm flex items-center justify-center">{comment.user.username[0]}</div>
                    </div>

                    <section className="flex flex-col justify-start w-full">
                        <div className="flex justify-between">
                            <div className="text-cyan-400 font-semibold">{comment.user.username}</div>
                            <div className="text-gray-600 font-semibold">{comment.createdAt}</div>
                        </div>
                        <div className="pt-2 pb-4">{comment.comment}</div>

                        {isLoggedIn && (
                            <section className="flex justify-start gap-x-3">
                                <div className="cursor-pointer"><FaReply /></div>
                                <div className="cursor-pointer"><AiOutlineLike /></div>
                                <div className="cursor-pointer"><FaTrashAlt /></div>
                                <div className="cursor-pointer"><CiEdit /></div>
                            </section>
                        )
                        }


                    </section>
                </div>
                <hr className="my-5 ease-in duration-300" />
                {showReplies ? (
                    <>
                        <ProjectReplies isLoggedIn={isLoggedIn} replies={comment.replies} />
                        <button onClick={handleClick}>Hide Replies</button>
                    </>) : (<button onClick={handleClick}>Aint Nobody Fucking with my Clique({comment.replies.length})</button>)}

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