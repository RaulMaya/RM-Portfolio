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
import "../../socialIcons.css";

const ContactInformation = () => {
  return (
    <div className="basis-1/2 border-l-2 border-black min-h-screen bg-cyan-400 text-center">
      <h5 className="text-center text-5xl">Contact Information</h5>
      <ul className="mt-7">
        <section className="flex justify-center">
          <li className="icon relative transition-all flex justify-center w-16 h-16 text-xl flex-col bg-white items-center cursor-pointer shadow-xl relative p-7 m-7 rounded-full facebook">
            <span className="tooltip absolute top-0 text-sm bg-white text-white px-2 py-1.5 rounded-md shadow-xl opacity-0 pointer-events-none transition-all whitespace-nowrap">Facebook</span>
            <a
              className="icon-url"
              href="https://www.facebook.com/raul.maya.507"
            >
              <span>
                <FontAwesomeIcon icon={faFacebook} />
              </span>
            </a>
          </li>
          <li className="icon relative transition-all flex justify-center w-16 h-16 text-xl flex-col bg-white items-center cursor-pointer shadow-xl relative p-7 m-7 rounded-full twitter">
            <span className="tooltip absolute top-0 text-sm bg-white text-white px-2 py-1.5 rounded-md shadow-xl opacity-0 pointer-events-none transition-all whitespace-nowrap">Twitter</span>
            <a className="icon-url" href="https://twitter.com/RaulMaya11">
              <span>
                <FontAwesomeIcon icon={faXTwitter} />
              </span>
            </a>
          </li>
          <li className="icon relative transition-all flex justify-center w-16 h-16 text-xl flex-col bg-white items-center cursor-pointer shadow-xl relative p-7 m-7 rounded-full instagram">
            <span className="tooltip absolute top-0 text-sm bg-white text-white px-2 py-1.5 rounded-md shadow-xl opacity-0 pointer-events-none transition-all whitespace-nowrap">Instagram</span>
            <a
              className="icon-url"
              href="https://www.instagram.com/raul.mayas/"
            >
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </a>
          </li>
        </section>
        <section className="flex justify-center">
          <li className="icon relative transition-all flex justify-center w-16 h-16 text-xl flex-col bg-white items-center cursor-pointer shadow-xl relative p-7 m-7 rounded-full github">
            <span className="tooltip absolute top-0 text-sm bg-white text-white px-2 py-1.5 rounded-md shadow-xl opacity-0 pointer-events-none transition-all whitespace-nowrap">Github</span>
            <a className="icon-url" href="https://github.com/RaulMaya">
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
          </li>
          <li className="icon relative transition-all flex justify-center w-16 h-16 text-xl flex-col bg-white items-center cursor-pointer shadow-xl relative p-7 m-7 rounded-full linkedin">
            <span className="tooltip absolute top-0 text-sm bg-white text-white px-2 py-1.5 rounded-md shadow-xl opacity-0 pointer-events-none transition-all whitespace-nowrap">LinkedIn</span>
            <a
              className="icon-url"
              href="https://www.linkedin.com/in/raul-maya/"
            >
              <span>
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </a>
          </li>
          <li className="icon relative transition-all flex justify-center w-16 h-16 text-xl flex-col bg-white items-center cursor-pointer shadow-xl relative p-7 m-7 rounded-full whatsapp">
            <span className="tooltip absolute top-0 text-sm bg-white text-white px-2 py-1.5 rounded-md shadow-xl opacity-0 pointer-events-none transition-all whitespace-nowrap">WhatsApp</span>
            <a
              className="icon-url"
              href="https://www.linkedin.com/in/raul-maya/"
            >
              <span>
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
            </a>
          </li>
        </section>
        <section className="flex justify-center">
          <li className="icon relative transition-all flex justify-center w-16 h-16 text-xl flex-col bg-white items-center cursor-pointer shadow-xl relative p-7 m-7 rounded-full email">
            <span className="tooltip absolute top-0 text-sm bg-white text-white px-2 py-1.5 rounded-md shadow-xl opacity-0 pointer-events-none transition-all whitespace-nowrap">Email</span>
            <a
              className="icon-url"
              href="https://www.linkedin.com/in/raul-maya/"
            >
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </a>
          </li>
          <li className="icon relative transition-all flex justify-center w-16 h-16 text-xl flex-col bg-white items-center cursor-pointer shadow-xl relative p-7 m-7 rounded-full location">
            <span className="tooltip absolute top-0 text-sm bg-white text-white px-2 py-1.5 rounded-md shadow-xl opacity-0 pointer-events-none transition-all whitespace-nowrap">Location</span>
            <a
              className="icon-url"
              href="https://goo.gl/maps/2oNiqjMmMmiaWfb37"
            >
              <span>
                <FontAwesomeIcon icon={faLocation} />
              </span>
            </a>
          </li>
          <li className="icon relative transition-all flex justify-center w-16 h-16 text-xl flex-col bg-white items-center cursor-pointer shadow-xl relative p-7 m-7 rounded-full phone">
            <span className="tooltip absolute top-0 text-sm bg-white text-white px-2 py-1.5 rounded-md shadow-xl opacity-0 pointer-events-none transition-all whitespace-nowrap">Phone Call</span>
            <a className="icon-url" href="tel:+52833-159-7006">
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
            </a>
          </li>
        </section>
      </ul>
    </div>
  );
};

export default ContactInformation;
