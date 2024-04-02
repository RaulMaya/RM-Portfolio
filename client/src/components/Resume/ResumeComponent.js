import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpen,
  faLocationArrow,
  faMobilePhone,
} from "@fortawesome/free-solid-svg-icons";

import ResumeTrack from "./ResumeTrack";
import ResumeHero from "./ResumeHero";
import TechStack from "./TechStack";
import WorkProjectsComponent from "./WorkProjectsComponent";

import { GrProjects } from "react-icons/gr";

import { QUERY_JOB_PROJECTS } from "../../utils/queries";
import { useQuery } from '@apollo/client';


const ResumeComponent = () => {

  const { loading, error, data, refetch } = useQuery(QUERY_JOB_PROJECTS);

  const my_projects = useMemo(() => data?.jobprojects || [], [data?.jobprojects]);

  const jobProjects = my_projects.map(p => {
    return (<WorkProjectsComponent
      key={p._id}
      company={p.company}
      title={p.name}
      description={p.description}
      image={p.portrait}
      tags={p.tags} />)
  })
  return (
    <>
      <ResumeHero />
      <div className="container m-auto mb-12 pb-12">
        <hr className="border border-black mb-2 mt-10" />
        <div className="flex justify-center md:justify-evenly flex-wrap">
          <p className="flex items-center">
            <FontAwesomeIcon icon={faMobilePhone} />
            <span className="mx-3 tracking-wider font-semibold">
              Phone:
            </span>{" "}
            +52 833 159 7006
          </p>
          <p className="hidden md:block">|</p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faEnvelopeOpen} />
            <span className="mx-3 tracking-wider font-semibold">
              Email:
            </span>{" "}
            raulmayas20@gmail.com
          </p>
          <p className="hidden md:block">|</p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faGithub} />
            <span className="mx-3 tracking-wider font-semibold">Github:</span>
            https://github.com/RaulMaya
          </p>
          <p className="hidden md:block">|</p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faLocationArrow} />
            <span className="mx-3 tracking-wider font-semibold">Location:</span>
            Tampico, Tamaulipas
          </p>
        </div>
        <hr className="border border-black mt-3 mb-10" />
        <ResumeTrack />
        <TechStack />

        <div className="mt-10 justify-center p-5">
          <p className="mb-3 flex justify-center gap-x-4 items-center font-semibold tracking-widest text-xl">
            <GrProjects />
            Job Projects
          </p>
          <div className="relative flex flex-wrap justify-center">
            {jobProjects}
          </div>
        </div>
      </div >

    </>
  );
};

export default ResumeComponent;
