import React, { useEffect, useState } from "react";
import NavBarComponent from "../components/NavBarComponent";
import UDHeaderComponent from "../components/UserDashboard/UDHeaderComponent";
import UDProjectCard from "../components/UserDashboard/UDProjectCard";
import Authenticate from "./Authenticate";

const UserDashboard = ({ isLoggedIn }) => {

  if (!isLoggedIn) {
    return <Authenticate isLoggedIn={isLoggedIn} />; // Render the LoginModal if the user is not logged in
  }

  return (
    <>
      <h1 className="text-center text-8xl md:text-10xl">USER DASHBOARD</h1>
      <UDHeaderComponent />
      <UDProjectCard />
      <NavBarComponent />
    </>
  );
};

export default UserDashboard;