import { React, useEffect } from "react";
import NavBarComponent from "../components/NavBarComponent";
import ContactInformation from "../components/Contact/ContactInformation";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-row">
        <ContactForm />
        <ContactInformation />
      </div>
      <NavBarComponent />
    </div>
  );
};

export default Contact;
