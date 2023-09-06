import React from "react";
import "../../submitBtn.css";

const ContactForm = () => {
  function ani() {
    document.getElementById("plane").className = "animation";
  }
  function anitwo() {
    document.getElementById("bg").className = "animation2";
  }

  const callAnis = () => {
    ani();
    anitwo();
  };
  return (
    <div className="basis-1/2 border-r-2 border-black min-h-screen flex justify-center">
      <form onSubmit={"handleSubmit"} className="w-3/4">
        <div className="form-group">
          <div className="mt-8 max-w-md">
            <div className="grid grid-cols-2 gap-6">
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
              <section className="col-span-2">
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
                  <div className="container">
                    <button className="btn btn-inside btn-boarder">
                      <img
                        src="https://i.cloudup.com/gBzAn-oW_S-2000x2000.png"
                        width="64px"
                        height="64px"
                        id="plane"
                        alt="plane"
                      />
                    </button>
                    <div className="bg">
                      <img
                        src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png"
                        id="bg"
                        width="32px"
                        height="32px"
                        alt="go"
                      />
                    </div>
                    <div
                      className="around around-boarder"
                      onClick={callAnis}
                    ></div>
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
