import React, { useState, useMemo } from "react";
import TrackComponent from "./TrackComponent";

import FordLogo from "./fordLogo.jpg";
import wmwAltamira from "./wmwLogo.png";
import SamsungLogo from "./samsungLogo.png";

import { FaArrowTrendUp, FaAward } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { FaLanguage } from "react-icons/fa";

import { useQuery } from "@apollo/client";
import { QUERY_EDUCATION, QUERY_EXPERIENCES, QUERY_AWARDS, QUERY_LANGUAGES } from "../../utils/queries";


const ResumeTrack = () => {
  const {
    loading: educationLoading,
    error: educationError,
    data: educationData,
    refetch: refetchEducation
  } = useQuery(QUERY_EDUCATION);

  const {
    loading: experiencesLoading,
    error: experiencesError,
    data: experiencesData,
    refetch: refetchExperiences
  } = useQuery(QUERY_EXPERIENCES);

  const {
    loading: awardLoading,
    error: awardError,
    data: awardData,
    refetch: refetchAward
  } = useQuery(QUERY_AWARDS);

  const {
    loading: languageLoading,
    error: languageError,
    data: languageData,
    refetch: refetchLanguage
  } = useQuery(QUERY_LANGUAGES);

  const experiences = useMemo(() => experiencesData?.experiences || [], [experiencesData?.experiences]);
  const education = useMemo(() => educationData?.educations || [], [educationData?.educations]);
  const awards = useMemo(() => awardData?.awards || [], [awardData?.awards]);
  const language = useMemo(() => languageData?.languages || [], [languageData?.languages]);


  const [openModal, setOpenModal] = useState(false)

  const openTrackModal = () => setOpenModal(true);
  const closeTrackModal = () => setOpenModal(false);

  return (
    <div className="container m-auto">
      <section className="flex flex-wrap gap-x-3 justify-evenly">
        <TrackComponent icon={<FaArrowTrendUp />} title={"Experience"} data={experiences} action={openTrackModal} isOpen={openModal} onClose={closeTrackModal} />
        <TrackComponent icon={<IoSchoolSharp />} title={"Education"} data={education} action={openTrackModal} isOpen={openModal} onClose={closeTrackModal} />
        <TrackComponent icon={<FaAward />} title={"Awards"} data={awards} action={openTrackModal} isOpen={openModal} onClose={closeTrackModal} />
        <TrackComponent icon={<FaLanguage />} title={"Languages"} data={language} action={openTrackModal} isOpen={openModal} onClose={closeTrackModal} />
      </section>
    </div>
  );
};

export default ResumeTrack;
