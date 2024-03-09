import React, { useEffect, useState, useMemo } from "react";

import { useQuery } from '@apollo/client';
import { QUERY_ALL_PROJECTS } from '../utils/queries';

import NavBarComponent from "../components/NavBarComponent";
import ProjectListComponent from "../components/Projects/ProjectListComponent";
import ProjectSearchBox from "../components/Projects/ProjectSearchComponent";
import LogSignHeader from "../components/LogInSignUp/LogSignHeaderComponent";

import LoaderComponent from "../components/LoaderComponent";


const Projects = ({ isLoggedIn }) => {
  const { loading, error, data, refetch } = useQuery(QUERY_ALL_PROJECTS);

  const my_projects = useMemo(() => data?.projects || [], [data?.projects]);

  const [projects, setProjects] = useState([])

  // Update projects state whenever my_projects changes
  useEffect(() => {
    setProjects(my_projects);
  }, [my_projects]); // Dependency array ensures effect runs whenever my_projects changes

  useEffect(() => {
    document.title = "Projects";
  }, []);

  const searchInput = (searchText) => {
    const arrResult = my_projects.filter((project) =>
      project.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setProjects(arrResult)
  };

  if (loading) return (
    <LoaderComponent />
  );

  if (error) return <p>Error</p>;

  return (
    <>
      <LogSignHeader isLoggedIn={isLoggedIn} />
      <div className="text-center">
        <h1 className="text-8xl md:text-10xl">PROJECTS</h1>
      </div>
      <ProjectSearchBox searchInput={searchInput} />
      <ProjectListComponent projects={projects} refetch={refetch} />
      <NavBarComponent />
    </>
  );
};

export default Projects;
