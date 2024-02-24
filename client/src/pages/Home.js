import React, { useEffect } from "react";

import MainMenu from "../components/Home/MainMenuComponent";
import FullMarquee from "../components/Home/FullMarqueeComponent";

const Home = ({isLoggedIn}) => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="container relative flex justify-center h-screen min-w-full items-center bg-gray-100 md:p-10">
      <FullMarquee />
      <MainMenu />
    </div>
  );
};

export default Home;
