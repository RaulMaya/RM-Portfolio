import React, { useEffect, useRef, useState } from 'react';
import { useMutation } from '@apollo/client';

import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginModal = ({ openSign, isOpen, onClose }) => {
    const contentRef = useRef();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [login, { loading, error, data }] = useMutation(LOGIN);

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

    const switchLogToSign = () => {
        openSign()
        onClose()
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formData },
            });

            Auth.login(data.login.token);
        } catch (error) {
            console.error('Error in Log In:', error);
            // clear form values
            setFormData({
                email: '',
                password: '',
            });
        };
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <form onSubmit={handleSubmit} ref={contentRef} className="bg-white pt-6 w-1/2 md:w-1/4 rounded-lg shadow-lg sborder border-black p-6">
                <h2 className="text-2xl mx-auto text-center font-semibold mb-6">Login</h2>
                <hr className='mb-6 border border-gray-200' />
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-cyan-300 focus:ring focus:ring-cyan-400 focus:ring-opacity-50"
                        id="email"
                        type="email"
                        placeholder="my_email@hotmail.com"
                        value={formData.email}
                        name='email'
                        onChange={handleChange}
                        required />
                </div>
                <div className="mb-3">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-cyan-300 focus:ring focus:ring-cyan-400 focus:ring-opacity-50"
                        id="password"
                        name='password'
                        type="password"
                        placeholder="******************"
                        value={formData.password}
                        onChange={handleChange}
                        required />
                </div>
                <a
                    className="inline-block align-baseline font-bold text-sm text-cyan-400 hover:text-blue-800 mb-6"
                    href="/">
                    Forgot Password?
                </a>
                <div className="flex items-center justify-center mb-5">
                    <button className="bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline transition duration-150 ease-out hover:ease-in" type="submit">
                        Log In
                    </button>
                </div>

                <div className='flex justify-center'>
                    <p>Don't have an account? <span className='text-cyan-400 font-semibold cursor-pointer' onClick={switchLogToSign}>Create one</span></p>
                </div>
            </form>
        </div>
    );
};

export default LoginModal