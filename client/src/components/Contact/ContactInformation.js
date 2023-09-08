import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import "../../socialIcons.css";

const ContactInformation = () => {
  return (
    <div className="basis-1/2 border-l-2 border-black min-h-screen bg-cyan-400 text-center">
      <h5 className="text-center text-5xl">Contact Information</h5>
      <p>raulmayas20@gmail.com</p>
      <p>+52 (833) 159 7006</p>
      <p>Tampico, Tamaulipas</p>
      <ul class="wrapper">
        <li class="icon facebook">
          <span class="tooltip">Facebook</span>
          <a class="icon-url" href="https://www.facebook.com/raul.maya.507">
            <span>
              <FontAwesomeIcon icon={faFacebook} />
            </span>
          </a>
        </li>
        <li class="icon twitter">
          <span class="tooltip">Twitter</span>
          <a class="icon-url" href="https://twitter.com/RaulMaya11">
            <span>
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </a>
        </li>
        <li class="icon instagram">
          <span class="tooltip">Instagram</span>
          <a class="icon-url" href="https://www.instagram.com/raul.mayas/">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </a>
        </li>
        <li class="icon github">
          <span class="tooltip">Github</span>
          <a class="icon-url" href="https://github.com/RaulMaya">
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>
        </li>
        <li class="icon linkedin">
          <span class="tooltip">LinkedIn</span>
          <a class="icon-url" href="https://www.linkedin.com/in/raul-maya/">
            <span>
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </a>
        </li>
        <li class="icon linkedin">
          <span class="tooltip">WhatsApp</span>
          <a class="icon-url" href="https://www.linkedin.com/in/raul-maya/">
            <span>
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInformation;
