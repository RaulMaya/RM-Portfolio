import React, { useEffect, useState } from "react";
import NavBarComponent from "../components/NavBarComponent";
import LoginModal from "../components/LogInSignUp/LogInModal"; // Import your LoginModal component

const UserDashboard = ({ isLoggedIn }) => {
  // State to control the visibility of the login modal
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    document.title = "User Dashboard";
    // If the user is not logged in, show the login modal
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
    }
  }, [isLoggedIn]);

  return (
    <>
      <h1 className="text-center text-8xl md:text-10xl">USER DASHBOARD</h1>
      <NavBarComponent />
      {/* Conditionally render the LoginModal based on isLoginModalOpen state */}
      {isLoginModalOpen && <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />}
    </>
  );
};

export default UserDashboard;