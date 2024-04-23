import React, { useRef, useEffect } from "react";
import { FaBriefcase } from "react-icons/fa6";

const TrackModal = ({ data, isOpen, onClose }) => {
    const contentRef = useRef();
    

    useEffect(() => {
        const clickOutside = (e) => {
            // If the modal is open and the click is outside the content area, close the modal
            if (isOpen && contentRef.current && !contentRef.current.contains(e.target)) {
                onClose();
            }
        };

        // Add when the component mounts
        document.addEventListener('mousedown', clickOutside);

        // Cleanup on component unmount
        return () => document.removeEventListener('mousedown', clickOutside);
    }, [isOpen, onClose]); // Depend on isOpen and onClose to re-bind as needed

    if (!isOpen) return null;

    const modalContent = data.map(d => {
        return (
            <article key={d._id} className="px-5 pt-5 mb-12">
                <p className="flex items-center mb-7 font-semibold tracking-widest text-sm">
                    <FaBriefcase className="me-3" />
                    {d.course}
                </p>
                <div className="flex mb-3">
                    <img
                        className="object-cover w-14 h-14 me-5"
                        src={d.schoolLogo}
                        alt="Ford Motor Company Logo"
                    />
                    <div>
                        <p className="font-semibold tracking-widest">{d.school}</p>
                        <ul>
                            <li className="text-gray-500 text-sm">{d.status}</li>
                            <li className="text-gray-500 text-sm">{d.status}</li>
                        </ul>
                    </div>
                </div>
            </article>
        )
    })

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <section ref={contentRef} className="bg-white pt-6 w-1/2 md:w-3/4 rounded-lg shadow-lg sborder border-black p-6">
                <h1 className="text-2xl text-center underline font-semibold mb-5">Experience</h1>
                <div className="flex flex-wrap justify-evenly ">
                {modalContent}
                </div>
            </section>
        </div>
    )
}

export default TrackModal