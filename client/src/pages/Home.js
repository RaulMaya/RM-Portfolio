import React, { useEffect } from "react";

import MainMenu from "../components/MainMenuComponent";
import FullMarquee from "../components/FullMarqueeComponent";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div className="container relative flex justify-center h-screen min-w-full items-center bg-gray-100 p-10">
      <FullMarquee />
      <MainMenu />
    </div>
  );
};

export default Home;
