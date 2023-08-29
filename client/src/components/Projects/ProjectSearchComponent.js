import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const ProjectSearchBox = ({ searchInput }) => {
  const [searchText, setSearchText] = useState("");

  const searchChangeHandler = (e) => {
    searchInput(e.target.value);
    setSearchText(e.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <form className="mb-5 w-9/12">
        <div className="relative">
          <div className="absolute bottom-3 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FontAwesomeIcon className="pt-3" icon={faSearch} />
          </div>
          <input
            onChange={searchChangeHandler}
            type="search"
            id="defaultSearch"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-400 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-400 dark:focus:border-blue-500"
            value={searchText}
          />
        </div>
      </form>
    </div>
  );
};

export default ProjectSearchBox;
