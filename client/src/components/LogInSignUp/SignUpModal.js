import React, { useEffect, useRef } from 'react';

const SignUpModal = ({ isOpen, onClose }) => {
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

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div ref={contentRef} className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
                {/* Modal content goes here */}
            </div>
        </div>
    );
};
export default SignUpModal