import React, { useState } from "react";

function TestimonialForm({ isLoggedIn }) {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <section className="pb-10">
      <div className="p-4 max-w-xl mx-auto bg-white shadow-md rounded-lg my-12">
        {isLoggedIn ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="title"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="comment"
              >
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-cyan-400 hover:bg-blue-600 text-white p-2 rounded-md"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="bg-black text-white p-12 md:p-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Leave your experience with Raul!</h1>
              <p className="text-lg md:text-xl mb-8">Create an account or Sign In!</p>
              <div className="space-x-4">
                <a href="/signup" className="bg-cyan-400 text-white font-bold py-2 px-6 rounded hover:bg-cyan-500 transition duration-150 ease-in-out">Create Account</a>
                <a href="/signin" className="bg-gray-200 text-black font-bold py-2 px-6 rounded hover:bg-gray-300 transition duration-150 ease-in-out">Sign In</a>
              </div>
            </div>
          </div>

        )}

      </div>
    </section>
  );
}

export default TestimonialForm;
