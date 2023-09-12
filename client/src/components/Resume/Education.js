import React from "react";
import ItesmLogo from "./itesmLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <article className="border-2 border-black shadow-xl rounded-lg px-5 pt-5 mb-12 w-80">
      <p className="mb-7 font-semibold tracking-widest text-xl">
        <FontAwesomeIcon className="me-3" icon={faSchool} />
        Education
      </p>
      <div className="flex mb-5">
        <img
          className="object-cover w-14 h-14 me-5"
          src={ItesmLogo}
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
          src={ItesmLogo}
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
          src={ItesmLogo}
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
      <button className="border-t-2 border-cyan-400 font-semibold text-gray-400 hover:text-black transition-all min-w-full mt-5 tracking-widest py-2 text-sm">
        View Education Track
      </button>
    </article>
  );
};

export default Education;
