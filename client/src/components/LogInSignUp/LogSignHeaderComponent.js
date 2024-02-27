import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import { FaRegUserCircle, FaSignInAlt } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";

import LoginModal from './LogInModal';
import SignUpModal from './SignUpModal';


import Auth from '../../utils/auth';

const LogSignHeader = ({ isLoggedIn }) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const openLoginModal = () => setIsLoginOpen(true);
    const closeLoginModal = () => setIsLoginOpen(false);

    const openSignUpModal = () => setIsSignUpOpen(true);
    const closeSignUpModal = () => setIsSignUpOpen(false);

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <div className="absolute top-3 right-5">
            <div>
                {isLoggedIn ? (
                    <div className="flex gap-x-4 items-center">
                        <Link to="/userdashboard" className="text-gray-300 text-base md:text-xl hover:text-black ease-in duration-300 cursor-pointer">
                            <FaRegUserCircle />
                        </Link>
                        <IoIosLogOut className="text-gray-300 text-base md:text-xl hover:text-black ease-in duration-300 cursor-pointer" onClick={logout} />
                    </div>
                ) : (
                    <>
                        <div className="flex gap-x-4">
                            <p onClick={openLoginModal} className="text-gray-300 text-base md:text-xl hover:text-black ease-in duration-300 cursor-pointer"><FaSignInAlt /></p>
                            <p onClick={openSignUpModal} className="text-gray-300 text-base md:text-xl hover:text-black ease-in duration-300 cursor-pointer"><MdAppRegistration /></p>
                        </div>
                        <LoginModal openSign={openSignUpModal} isOpen={isLoginOpen} onClose={closeLoginModal} />
                        <SignUpModal openLog={openLoginModal} isOpen={isSignUpOpen} onClose={closeSignUpModal} />
                    </>
                )}
            </div>
        </div>
    );
};

export default LogSignHeader