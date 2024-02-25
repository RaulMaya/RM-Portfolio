import React, { useEffect, useRef, useState } from 'react';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';


const SignUpModal = ({ openLog, isOpen, onClose }) => {

    const [signUpForm, setSignUpForm] = useState({
        username: "",
        email: "",
        company: "",
        password: "",
        confirmPassword: '',
    })

    const [passwordMismatch, setPasswordMismatch] = useState(false);


    const [errorMessage, setErrorMessage] = useState(null);

    const [createUser, { loading, error, data }] = useMutation(CREATE_USER);

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

    const switchSignToLog = () => {
        onClose()
        openLog()
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUpForm({
            ...signUpForm,
            [name]: value,
        });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (signUpForm.password !== signUpForm.confirmPassword) {
            setPasswordMismatch(true); // Show password mismatch error
            return; // Stop the form submission
        } else {
            setPasswordMismatch(false); // Hide password mismatch error
            // Proceed with form submission logic...
        }
        try {
            const { data } = await createUser({
                variables: { ...signUpForm },
            });

            Auth.login(data.createUser.token);
        } catch (error) {
            console.error(error.message);
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div ref={contentRef} className="bg-white pt-6 w-1/2 md:w-1/4 rounded-lg shadow-lg sborder border-black p-6">
                <h2 className="text-2xl mx-auto text-center font-semibold mb-6">Sign Up</h2>
                <hr className='mb-6 border border-gray-200' />
                <form onSubmit={handleSignUp}>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-cyan-300 focus:ring focus:ring-cyan-400 focus:ring-opacity-50"
                            id="username"
                            name="username"
                            type="text"
                            onChange={handleChange}
                            value={signUpForm.username} />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-cyan-300 focus:ring focus:ring-cyan-400 focus:ring-opacity-50"
                            id="email"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            value={signUpForm.email} />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="company">
                            School/Company
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-cyan-300 focus:ring focus:ring-cyan-400 focus:ring-opacity-50"
                            id="company"
                            name="company"
                            type="text"
                            onChange={handleChange}
                            value={signUpForm.company} />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password">
                            Create Password
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight ${passwordMismatch ? 'focus:border-red-500 focus:ring focus:ring-red-400' : 'focus:border-cyan-300 focus:ring focus:ring-cyan-400'} focus:ring-opacity-50`}
                            id="password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                            value={signUpForm.password} />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight ${passwordMismatch ? 'focus:border-red-500 focus:ring focus:ring-red-400' : 'focus:border-cyan-300 focus:ring focus:ring-cyan-400'} focus:ring-opacity-50`}
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            onChange={handleChange}
                            value={signUpForm.confirmPassword} />
                        {passwordMismatch && <p className="text-red-500 text-xs italic">Passwords do not match.</p>}
                    </div>
                    <div className="flex items-center justify-center mb-5">
                        <button
                            className="bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline transition duration-150 ease-out hover:ease-in"
                            name="submitBtn"
                            type="submit">
                            Sign Up
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <p>Already have an account? <span className='text-cyan-400 font-semibold cursor-pointer' onClick={switchSignToLog}>Log In</span></p>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default SignUpModal