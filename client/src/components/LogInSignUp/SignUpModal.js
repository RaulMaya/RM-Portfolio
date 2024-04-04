import React, { useEffect, useRef, useState } from 'react';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUpModal = ({ openLog, isOpen, onClose }) => {

    const [signUpForm, setSignUpForm] = useState({
        username: "",
        email: "",
        company: "",
        password: "",
        confirmPassword: '',
    })

    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [showCreatePassword, setShowCreatePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [fieldErrors, setFieldErrors] = useState({});

    const toggleCreatePasswordVisibility = () => {
        setShowCreatePassword(!showCreatePassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };


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

        // Reset field errors
        setFieldErrors({});

        let errors = {};
        // Check if passwords match
        if (signUpForm.password !== signUpForm.confirmPassword) {
            errors.password = "Passwords do not match.";
            setPasswordMismatch(true); // Show password mismatch error
        } else {
            setPasswordMismatch(false); // Hide password mismatch error
        }

        // Check for other required fields and add errors as needed
        if (!signUpForm.email) {
            errors.email = "Email is required.";
        }
        if (!signUpForm.username) {
            errors.username = "Username is required.";
        }
        // Add other fields as necessary...

        // If there are any errors, stop the form submission and set the errors
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return; // Stop the form submission
        }

        // Proceed with form submission logic...
        try {
            const { data } = await createUser({
                variables: { ...signUpForm },
            });
            Auth.login(data.createUser.token);
        } catch (error) {
            // Assuming you're getting back a GraphQL error
            const errorMessage = error.graphQLErrors ? error.graphQLErrors[0].message : error.message;
            // Display a specific toast based on the error message
            if (errorMessage.includes("already exists") || errorMessage.includes("Failed to create user")) {
                toast.error("Email already exists.");
            } else {
                toast.error("An unexpected error occurred. Please try again later.");
            }
        }
    }

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
                            value={signUpForm.username}
                            required />
                        {fieldErrors.username && <p style={{ color: 'red' }}>{fieldErrors.username}</p>}
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
                            value={signUpForm.email}
                            required />
                        {fieldErrors.email && <p style={{ color: 'red' }}>{fieldErrors.email}</p>}
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
                            value={signUpForm.company}
                            required />
                        {fieldErrors.company && <p style={{ color: 'red' }}>{fieldErrors.company}</p>}
                    </div>
                    <div className="mb-6 relative">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password">
                            Create Password
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight ${passwordMismatch ? 'focus:border-red-500 focus:ring focus:ring-red-400' : 'focus:border-cyan-300 focus:ring focus:ring-cyan-400'} focus:ring-opacity-50`}
                            id="password"
                            name="password"
                            type={showCreatePassword ? "text" : "password"}
                            onChange={handleChange}
                            value={signUpForm.password}
                            required />
                        <button
                            onClick={toggleCreatePasswordVisibility}
                            type="button"
                            className="absolute inset-y-11 right-0 pr-3 flex items-center text-sm leading-5">
                            <span className='text-xl'>{showCreatePassword ? <BiSolidHide /> : <BiSolidShow />}</span>
                        </button>
                    </div>
                    <div className="mb-6 relative">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight ${passwordMismatch ? 'focus:border-red-500 focus:ring focus:ring-red-400' : 'focus:border-cyan-300 focus:ring focus:ring-cyan-400'} focus:ring-opacity-50`}
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            onChange={handleChange}
                            value={signUpForm.confirmPassword}
                            required />
                        <button
                            onClick={toggleConfirmPasswordVisibility}
                            type="button"
                            className="absolute inset-y-11 right-0 pr-3 flex items-center text-sm leading-5">
                            <span className='text-xl'>{showConfirmPassword ? <BiSolidHide /> : <BiSolidShow />}</span>
                        </button>
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