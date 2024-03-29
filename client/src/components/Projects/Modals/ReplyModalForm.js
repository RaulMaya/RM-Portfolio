import React, { useEffect, useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_REPLY } from '../../../utils/mutations';
import Auth from '../../../utils/auth';

const ReplyModal = ({ commentId, isOpen, onClose, refetch }) => {
    const contentReplyRef = useRef();
    const [replyText, setReplyText] = useState('');

    const [createReply, { error: createReplyError }] = useMutation(CREATE_REPLY);


    const handleReplySubmit = async (event) => {
        event.preventDefault()
        await createReply({
            variables: {
                commentId: commentId,
                userId: Auth.getUser().data._id, // use the logged in user's id
                reply: replyText,
            },
        });
        setReplyText('');
        refetch();
        onClose();
    }

    useEffect(() => {
        const clickOutside = (e) => {
            // If the modal is open and the click is outside the content area, close the modal
            if (isOpen && contentReplyRef.current && !contentReplyRef.current.contains(e.target)) {
                onClose();
            }
        };

        // Add when the component mounts
        document.addEventListener('mousedown', clickOutside);

        // Cleanup on component unmount
        return () => document.removeEventListener('mousedown', clickOutside);
    }, [isOpen, onClose]); // Depend on isOpen and onClose to re-bind as needed

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <form onSubmit={handleReplySubmit} ref={contentReplyRef} className="bg-white pt-6 w-1/2 md:w-1/4 rounded-lg shadow-lg sborder border-black p-6">
                <h2 className="text-2xl mx-auto text-center font-semibold mb-6">Reply</h2>
                <hr className='mb-6 border border-gray-200' />
                <textarea
                    value={replyText}
                    type="text"
                    name="replyText"
                    className="
                        mt-1
                        w-full
                        block
                        rounded-md
                        border-black
                        shadow-sm
                        focus:border-cyan-300 focus:ring focus:ring-cyan-400 focus:ring-opacity-50
                        "
                    onChange={(e) => {
                        console.log(e.target.value); // Debugging line to see what you're typing in real-time
                        setReplyText(e.target.value);
                    }}
                    placeholder="Enter your reply to the comment"
                    required
                ></textarea>
                <div className="flex items-center justify-center my-5">
                    <button className="bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline transition duration-150 ease-out hover:ease-in" type="submit">
                        Reply
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReplyModal