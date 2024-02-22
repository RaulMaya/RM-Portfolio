import { React, useState } from "react";
import "../../submitBtn.css";

const ContactForm = () => {
  const [animation, setAnimation] = useState(false);
  const [hide, setHide] = useState(false);

  const animate = (e) => {
    e.preventDefault();
    setAnimation(true);
    setTimeout(() => {
      setHide(true);
    }, 150);
  };

  return (
    <div className="basis-1/2 border-r-2 border-t-4 border-black flex justify-center">
      <form onSubmit={animate} className="w-3/4 my-12">
        <div className="form-group flex justify-center">
          <div className="mt-8 max-w-md">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-sm text-gray-500">Your Name</span>
                <input
                  type="text"
                  className="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-cyan-300 focus:ring focus:ring-cyan-400 focus:ring-opacity-50
            "
                  placeholder=""
                />
              </label>
              <label className="block">
                <span className="text-sm text-gray-500">Email Address</span>
                <input
                  type="email"
                  className="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-cyan-300 focus:ring focus:ring-cyan-400 focus:ring-opacity-50
            "
                  placeholder=""
                />
              </label>
              <label className="block">
                <span className="text-sm text-gray-500">Company</span>
                <input
                  type="text"
                  className="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-cyan-300 focus:ring focus:ring-cyan-400 focus:ring-opacity-50
            "
                  placeholder=""
                />
              </label>
              <label htmlFor="phone" className="block">
                <span className="text-sm text-gray-500">Phone Number</span>
                <input
                  type="tel"
                  className="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-cyan-300 focus:ring focus:ring-cyan-400 focus:ring-opacity-50
            "
                  placeholder=""
                  id="phone"
                  name="phone"
                />
              </label>
              <section className="col-span-1 md:col-span-2">
                <label className="block">
                  <span className="text-sm text-gray-500">Message</span>
                  <textarea
                    className="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-cyan-300 focus:ring focus:ring-cyan-400 focus:ring-opacity-50
            "
                    rows="3"
                  ></textarea>
                </label>
                <div className="block">
                  <div className="relative w-16 h-16">
                    <button type="submit" className="mt-6 bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline transition duration-150 ease-out hover:ease-in">
                      Send
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
