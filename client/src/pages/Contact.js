import { React, useEffect } from "react";
import NavBarComponent from "../components/NavBarComponent";
import ContactInformation from "../components/Contact/ContactInformation";
import ContactForm from "../components/Contact/ContactForm";
import LogSignHeader from "../components/LogInSignUp/LogSignHeaderComponent";

const Contact = ({isLoggedIn}) => {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
      <LogSignHeader isLoggedIn={isLoggedIn} />
      <h1 className="text-center text-8xl md:text-10xl">CONTACT</h1>
      <div className="w-full">
        <div className="flex flex-row">
          <ContactForm />
          <ContactInformation />
        </div>
        <NavBarComponent />
      </div>
    </>
  );
};

export default Contact;
