import React, { useState } from "react";
import Awards from "./Awards";
import TrackComponent from "./TrackComponent";
import Education from "./Education";
import Languages from "./Languages";

import FordLogo from "./fordLogo.jpg";
import wmwAltamira from "./wmwLogo.png";
import SamsungLogo from "./samsungLogo.png";



const experiences = [
  {
    id: 1,
    task: 'Task One',
    image: FordLogo, // Replace with actual image URL
    title: 'Title of Task One',
    subtitle: 'Subtitle of Task One',
    content: 'Main Place'
  },
  {
    id: 2,
    task: 'Task Two',
    image: wmwAltamira, // Replace with actual image URL
    title: 'Title of Task Two',
    subtitle: 'Subtitle of Task Two',
    content: 'Main Place'
  },
  {
    id: 3,
    task: 'Task Three',
    image: SamsungLogo, // Replace with actual image URL
    title: 'Title of Task Three',
    subtitle: 'Subtitle of Task Three',
    content: 'Main Place'
  }
];

const ResumeTrack = () => {
  const [openModal, setOpenModal] = useState(false)

  const openTrackModal = () => setOpenModal(true);
  const closeTrackModal = () => setOpenModal(false);

  return (
      <div className="container m-auto">
        <section className="flex flex-wrap gap-x-3 justify-evenly">
          <TrackComponent title={"Experience"} data={experiences} action={openTrackModal} isOpen={openModal} onClose={closeTrackModal}/>
          <TrackComponent title={"Education"} data={experiences} action={openTrackModal} isOpen={openModal} onClose={closeTrackModal}/>
          <TrackComponent title={"Awards"} data={experiences} action={openTrackModal} isOpen={openModal} onClose={closeTrackModal}/>
          <TrackComponent title={"Languages"} data={experiences} action={openTrackModal} isOpen={openModal} onClose={closeTrackModal}/>
        </section>
      </div>
  );
};

export default ResumeTrack;
