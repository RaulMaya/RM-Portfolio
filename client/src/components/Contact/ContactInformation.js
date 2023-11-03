import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./socialIcons.css";

const ContactInformation = () => {
  const socialApps = [
    {
      name: "Facebook",
      class: "facebook",
      icon: faFacebook,
      url: "https://www.facebook.com/raul.maya.507",
    },
    {
      name: "Twitter",
      class: "twitter",
      icon: faXTwitter,
      url: "https://twitter.com/RaulMaya11",
    },
    {
      name: "Instagram",
      class: "instagram",
      icon: faInstagram,
      url: "https://www.instagram.com/raul.mayas/",
    },
    {
      name: "Github",
      class: "github",
      icon: faGithub,
      url: "https://github.com/RaulMaya",
    },
    {
      name: "Linkedin",
      class: "linkedin",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/raul-maya/",
    },
    { name: "Whatsapp", class: "whatsapp", icon: faWhatsapp, url: "url" },
    { name: "Email", class: "email", icon: faEnvelope, url: "url" },
    {
      name: "Location",
      class: "location",
      icon: faLocation,
      url: "https://goo.gl/maps/2oNiqjMmMmiaWfb37",
    },
    {
      name: "Phone Call",
      class: "phone",
      icon: faPhone,
      url: "tel:+52833-159-7006",
    },
  ];
  return (
    <div className="basis-1/2 border-l-2 border-t-4 border-black bg-cyan-400 text-center flex justify-center">
      <ul className="my-12 grid grid-cols-2 md:grid-cols-3 gap-5">
        {socialApps.map((app) => (
          <li
            key={app.name}
            className={`icon relative transition-all flex justify-center w-28 h-28 flex-col bg-white items-center border-2 border-black cursor-pointer shadow-xl relative p-7 m-7 ${app.class}`}
          >
            <span className="tooltip absolute top-0 text-lg bg-white text-white px-2 py-1.5 rounded-md shadow-xl opacity-0 pointer-events-none transition-all whitespace-nowrap">
              {app.name}
            </span>
            <a className="icon-url" href={app.url}>
              <span className="text-3xl">
                <FontAwesomeIcon icon={app.icon} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInformation;
