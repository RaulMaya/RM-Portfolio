import React, { useState } from 'react';
import LoginModal from './LogInModal';
import SignUpModal from './SignUpModal';

const LogSignHeader = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const openLoginModal = () => setIsLoginOpen(true);
    const closeLoginModal = () => setIsLoginOpen(false);

    const openSignUpModal = () => setIsSignUpOpen(true);
    const closeSignUpModal = () => setIsSignUpOpen(false);

    return (
        <div className="absolute top-3 right-5">
            <div className="flex gap-x-4">
                <p onClick={openLoginModal} className="text-gray-300 text-xl hover:text-black ease-in duration-300 cursor-pointer">Login</p>
                <p onClick={openSignUpModal} className="text-gray-300 text-xl hover:text-black ease-in duration-300 cursor-pointer">Sign Up</p>
            </div>
            <LoginModal openSign={openSignUpModal} isOpen={isLoginOpen} onClose={closeLoginModal} />
            <SignUpModal openLog={openLoginModal} isOpen={isSignUpOpen} onClose={closeSignUpModal} />
        </div>
    );
};

export default LogSignHeader