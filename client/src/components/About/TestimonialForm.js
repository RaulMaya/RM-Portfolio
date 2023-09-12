import React, { useState } from "react";

function TestimonialForm() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    comment: "",
    rating: 1,
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
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default TestimonialForm;
