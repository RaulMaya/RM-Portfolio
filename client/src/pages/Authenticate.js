import React, { useState } from 'react';
import NavBarComponent from '../components/NavBarComponent';
import LoginModal from '../components/LogInSignUp/LogInModal';
import SignUpModal from '../components/LogInSignUp/SignUpModal';
import UserDashboard from './UserDashboard';

const Authenticate = ({ isLoggedIn }) => {

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const openLoginModal = () => setIsLoginOpen(true);
    const closeLoginModal = () => setIsLoginOpen(false);

    const openSignUpModal = () => setIsSignUpOpen(true);
    const closeSignUpModal = () => setIsSignUpOpen(false);

    console.log(isLoggedIn)

    if (isLoggedIn) {
        return <UserDashboard isLoggedIn={isLoggedIn} /> // Render the LoginModal if the user is not logged in
    }


    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-whitesmoke">
                <div className="p-8 bg-white shadow-lg rounded-lg">
                    <h1 className="text-center text-3xl font-bold text-black">Welcome!</h1>
                    <p className="text-center text-gray-600 my-4">
                        Please login so you can enter your dashboard, or sign up to create an account.
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                        <button onClick={openLoginModal} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
                            Log In
                        </button>
                        <button onClick={openSignUpModal} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            <NavBarComponent />
            <LoginModal openSign={openSignUpModal} isOpen={isLoginOpen} onClose={closeLoginModal} />
            <SignUpModal openLog={openLoginModal} isOpen={isSignUpOpen} onClose={closeSignUpModal} />
        </>
    );
};

export default Authenticate;
