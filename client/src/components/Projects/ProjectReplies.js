import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";

import Auth from '../../utils/auth';
import { DELETE_REPLY } from '../../utils/mutations';

import { useMutation } from '@apollo/client';

import DeleteConfirmationModal from "./Modals/DeleteConfirmationModal";

const ProjectReplies = ({ isLoggedIn, replies, refetch }) => {
    const currentDate = new Date();

    const [showReplyConfirmation, setShowReplyConfirmation] = useState(false);
    const [replyToDelete, setReplyToDelete] = useState(null);

    const promptDeleteReply = (replyId) => {
        setReplyToDelete(replyId);
        setShowReplyConfirmation(true);
    };

    const confirmDeleteReply = () => {
        if (replyToDelete) {
            // Place your existing deletion logic here
            handleReplyDelete(replyToDelete);
        }
        // Close the modal and reset the comment to delete
        setShowReplyConfirmation(false);
        setReplyToDelete(null);
    };

    const cancelDelete = () => {
        setShowReplyConfirmation(false);
        setReplyToDelete(null);
    };


    const [deleteReply, { error: deleteReplyError }] = useMutation(DELETE_REPLY);


    const handleReplyDelete = async (replyId) => {
        try {
            await deleteReply({
                variables: {
                    userId: Auth.getUser().data._id,
                    replyId,
                },
            });

            refetch();
        } catch (error) {
            console.error(error);
        }
    };

    const comReplies = replies.map(r => {
        const replyDate = new Date(Number(r.createdAt))

        const diff = currentDate - replyDate;
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

            < div key={r._id} className="flex justify-start gap-x-4 mb-5 ms-12" >
                <div className="flex flex-col justify-start items-center">
                    <div className="bg-cyan-300 px-3 py-3 w-12 h-12 text-sm font-semibold rounded-full shadow-sm flex items-center justify-center">{r.user.username[0]}</div>
                </div>

                <section className="flex flex-col justify-start  w-full">
                    <div className="flex justify-between">
                        <div className="text-cyan-400 font-semibold">{r.user.username}</div>
                        <div className="text-gray-600 font-semibold">{since}</div>
                    </div>
                    <div className="pt-2 pb-4">{r.reply}</div>

                    {isLoggedIn && (
                        <section className="flex justify-start gap-x-3">
                            <FaTrashAlt className="cursor-pointer" onClick={() => promptDeleteReply(r._id)} />
                            <CiEdit className="cursor-pointer" />
                        </section>
                    )
                    }

                    {showReplyConfirmation && (
                        <DeleteConfirmationModal confirmDeleteComment={confirmDeleteReply} cancelDelete={cancelDelete} />
                    )}

                </section>
            </div >
        )
    })
    return (
        <>
            {comReplies}
        </>
    )
}

export default ProjectReplies