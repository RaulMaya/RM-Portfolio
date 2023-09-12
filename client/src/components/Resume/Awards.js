import React from "react";
import FordLogo from "./fordLogo.jpg";
import wmwAltamira from "./wmwLogo.png";
import SamsungLogo from "./samsungLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

const Awards = () => {
  return (
    <article className="border-2 border-black shadow-xl rounded-lg px-5 pt-5 mb-12 w-80">
      <p className="mb-7 font-semibold tracking-widest text-xl">
        <FontAwesomeIcon className="me-3" icon={faAward} />
        Awards
      </p>
      <div className="flex mb-5">
        <img
          className="object-cover w-14 h-14 me-5"
          src={FordLogo}
          alt="Ford Motor Company Logo"
        />
        <div>
          <p className="font-semibold tracking-widest">Ford Motor Company</p>
          <ul>
            <li className="text-gray-500 text-sm">Python Software Engineer</li>
            <li className="text-gray-500 text-sm">Data Analyst Engineer</li>
          </ul>
        </div>
      </div>
      <div className="flex mb-5">
        <img
          className="object-cover w-14 h-14 me-5"
          src={wmwAltamira}
          alt="Ford Motor Company Logo"
        />
        <div>
          <p className="font-semibold tracking-widest">Ford Motor Company</p>
          <ul>
            <li className="text-gray-500 text-sm">Python Software Engineer</li>
            <li className="text-gray-500 text-sm">Data Analyst Engineer</li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <img
          className="object-cover w-14 h-14 me-5"
          src={SamsungLogo}
          alt="Ford Motor Company Logo"
        />
        <div>
          <p className="font-semibold tracking-widest">Ford Motor Company</p>
          <ul>
            <li className="text-gray-500 text-sm">Python Software Engineer</li>
            <li className="text-gray-500 text-sm">Data Analyst Engineer</li>
          </ul>
        </div>
      </div>
      <button className="border-t-2 border-cyan-400 font-semibold text-gray-400 hover:text-black transition-all min-w-full mt-5 tracking-widest py-2 text-sm">View All Awards</button>
    </article>
  );
};

export default Awards;
