import React from "react";

const Contact = () => {
  return (
    <div className="container min-h-screen">
      <div className="flex flex-row">
        <div className="basis-1/2 border-r-2 border-black min-h-screen bg-red-500 flex justify-center">
          <form onSubmit={'handleSubmit'} className="w-3/4">
            <div className="form-group">
              <h2 className="text-2xl font-bold">Simple</h2>
              <div className="mt-8 max-w-md">
                <div className="grid grid-cols-1 gap-6">
                  <label className="block">
                    <span className="text-gray-700">Full name</span>
                    <input
                      type="text"
                      className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      placeholder=""
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Email address</span>
                    <input
                      type="email"
                      className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      placeholder="john@example.com"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">When is your event?</span>
                    <input
                      type="date"
                      className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">
                      What type of event is it?
                    </span>
                    <select
                      className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    >
                      <option>Corporate event</option>
                      <option>Wedding</option>
                      <option>Birthday</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Additional details</span>
                    <textarea
                      className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      rows="3"
                    ></textarea>
                  </label>
                  <div className="block">
                    <div className="mt-2">
                      <button
                        type="submit"
                        className="rounded-full bg-cyan-400 py-2 px-4"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="basis-1/2 border-l-2 border-black min-h-screen bg-cyan-400">
          Actual Form
        </div>
      </div>
    </div>
  );
};

export default Contact;
