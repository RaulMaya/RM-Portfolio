import React, { useRef, useState, useEffect } from "react";
import { useMutation } from '@apollo/client';
import { UPDATE_TESTIMONIAL } from "../../../utils/mutations";

const UpdateTestimonial = ({ idx, title, onClose, isOpen, refetch }) => {
    const contentTextRef = useRef();
    const [text, setText] = useState('');

    const [updateTestimonial, { error: updateTestimonialError }] = useMutation(UPDATE_TESTIMONIAL);

    const handleTextSubmit = async (event) => {
        event.preventDefault()
        await updateTestimonial({
            variables: {
                testimonialId: idx,
                testimonialText: text,
            },
        });
    

        setText('');
        refetch();
        onClose();
    }

    useEffect(() => {
        const clickOutside = (e) => {
            // If the modal is open and the click is outside the content area, close the modal
            if (isOpen && contentTextRef.current && !contentTextRef.current.contains(e.target)) {
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
            <form onSubmit={handleTextSubmit} ref={contentTextRef} className="bg-white pt-6 w-1/2 md:w-1/4 rounded-lg shadow-lg sborder border-black p-6">
                <h2 className="text-2xl mx-auto text-center font-semibold mb-6">{title}</h2>
                <hr className='mb-6 border border-gray-200' />
                <textarea
                    value={text}
                    type="text"
                    name="text"
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
                        setText(e.target.value);
                    }}
                    placeholder="Enter your new comment"
                    required
                ></textarea>
                <div className="flex items-center justify-center my-5">
                    <button className="bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline transition duration-150 ease-out hover:ease-in" type="submit">
                        {title}
                    </button>
                </div>
            </form>
        </div>
    );
};
export default UpdateTestimonial