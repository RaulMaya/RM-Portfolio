import React from "react";
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

const workProjects = [
  {
    "id": 1,
    "company": "Tesla Inc.",
    "title": "Energy Efficiency Analysis",
    "description": "This initiative aims to optimize power consumption and range efficiency across all models. It analyzes daily data on factors like battery life, charging habits, and energy usage, presenting findings in comprehensive visuals. These insights help engineers in refining energy models and boosting efficiency metrics.",
    "image": "https://w0.peakpx.com/wallpaper/106/720/HD-wallpaper-2021-ford-bronco-badlands-four-door-color-cactus-gray-front-car.jpg",
    "tags": ["JavaScript", "Node.js", "D3.js"]
  },
  {
    "id": 2,
    "company": "General Motors",
    "title": "Automated Quality Control",
    "description": "The project targets advancements in automation for quality checks. It aggregates monthly data regarding manufacturing consistency, parts durability, and inspection outcomes, arranging it in informative dashboards. This data supports engineers in enhancing quality control protocols and ensuring product reliability.",
    "image": "https://w0.peakpx.com/wallpaper/106/720/HD-wallpaper-2021-ford-bronco-badlands-four-door-color-cactus-gray-front-car.jpg",
    "tags": ["Python", "Flask", "Matplotlib"]
  },
  {
    "id": 3,
    "company": "BMW Group",
    "title": "Sustainable Driving Modules",
    "description": "Focused on promoting eco-friendly driving, this project evaluates quarterly data on elements such as emission levels, fuel consumption, and eco-drive engagement. It compiles this information into detailed reports, aiding engineers in developing greener driving technologies and reducing environmental impact.",
    "image": "https://w0.peakpx.com/wallpaper/106/720/HD-wallpaper-2021-ford-bronco-badlands-four-door-color-cactus-gray-front-car.jpg",
    "tags": ["Java", "Spring", "JFreeChart"]
  },
  {
    "id": 4,
    "company": "Honda Motor Co.",
    "title": "Driver Assist Improvement",
    "description": "This project is dedicated to refining driver assistance systems. It collates bi-weekly insights on factors like system accuracy, response time, and user feedback, compiling this data into clear, actionable formats. These analyses empower engineers to fine-tune assistance features, improving safety and user experience.",
    "image": "https://w0.peakpx.com/wallpaper/106/720/HD-wallpaper-2021-ford-bronco-badlands-four-door-color-cactus-gray-front-car.jpg",
    "tags": ["C#", ".NET", "Chart.js"]
  },
  {
    "id": 5,
    "company": "Nissan Motor Corporation",
    "title": "Connectivity Enhancement",
    "description": "This endeavor focuses on enhancing vehicle connectivity and data integration. It systematically examines weekly datasets relating to connectivity features, system updates, and user interface efficiency, summarizing findings in structured formats. This information assists engineers in elevating the in-car connectivity experience.",
    "image": "https://w0.peakpx.com/wallpaper/106/720/HD-wallpaper-2021-ford-bronco-badlands-four-door-color-cactus-gray-front-car.jpg",
    "tags": ["Ruby", "Rails", "HighCharts"]
  },
  {
    "id": 6,
    "company": "Hyundai Motor Company",
    "title": "Fuel Cell Innovation",
    "description": "The initiative is centered on advancing fuel cell technology. It processes semi-monthly data regarding hydrogen efficiency, system lifespan, and operational safety, organizing this data in efficient, readable formats. The collated data guides engineers in pushing forward with innovative fuel cell solutions.",
    "image": "https://w0.peakpx.com/wallpaper/106/720/HD-wallpaper-2021-ford-bronco-badlands-four-door-color-cactus-gray-front-car.jpg",
    "tags": ["Go", "Gin", "Google Charts"]
  }
]


const ResumeComponent = () => {
  const jobProjects = workProjects.map(p => {
    return (<WorkProjectsComponent
      key={p.id}
      company={p.company}
      title={p.title}
      description={p.description}
      image={p.image}
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
