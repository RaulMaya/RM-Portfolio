import React from "react";
import TrackModal from "./TracksModal";

const TrackComponent = ({ icon, title, data, action, isOpen, onClose }) => {

  const dataContent = data.map(d => {
    return (
      <div key={d.id} className="flex mb-3">
        <img
          className="object-cover w-14 h-14 me-5"
          src={d.image}
          alt="Ford Motor Company Logo"
        />
        <div>
          <p className="font-semibold tracking-widest">{d.title}</p>
          <ul>
            <li className="text-gray-500 text-sm">{d.subtitle}</li>
            <li className="text-gray-500 text-sm">{d.content}</li>
          </ul>
        </div>
      </div>
    )
  })
  return (
    <>
      <article className="border-2 border-black shadow-xl rounded-lg px-5 pt-5 mb-12 w-80">
        <p className="flex gap-x-4 items-center mb-7 font-semibold tracking-widest text-xl">
          {icon}
          {title}
        </p>
        {dataContent}
        <button onClick={action} className="border-t-2 border-cyan-400 font-semibold text-gray-400 hover:text-black transition-all min-w-full mt-5 tracking-widest py-2 text-sm">
          View All {title}
        </button>
      </article>
      <TrackModal data={data} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default TrackComponent;
