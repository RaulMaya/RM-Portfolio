import React, { useState } from "react";
import LoginModal from "../LogInSignUp/LogInModal";
import SignUpModal from "../LogInSignUp/SignUpModal";

import { useMutation } from '@apollo/client';
import { CREATE_TESTIMONIAL } from "../../utils/mutations"
import Auth from "../../utils/auth"

function TestimonialForm({ isLoggedIn, refetch }) {
  const [testimonialText, setTestimonialText] = useState("")
  const [createTestimonial, { error: createTestimonialError }] = useMutation(CREATE_TESTIMONIAL);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const openSignUpModal = () => setIsSignUpOpen(true);
  const closeSignUpModal = () => setIsSignUpOpen(false);

  const handleTestimonialSubmit = async (event) => {
    event.preventDefault();
    await createTestimonial({
      variables: {
        userId: Auth.getUser().data._id, // use the logged in user's id
        testimonial: testimonialText,
      },
    });
    setTestimonialText('');
    refetch();
  }

  return (
    <section className="pb-10">

      {isLoggedIn ? (
        <div className="p-4 max-w-xl mx-auto bg-white shadow-md rounded-lg my-12">
          <form onSubmit={handleTestimonialSubmit}>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="comment"
              >
                Enter your experience with Raul:
              </label>
              <textarea
                id="comment"
                name="comment"
                value={testimonialText}
                onChange={(e) => setTestimonialText(e.target.value)}
                rows="4"
                className="mt-1 p-2 w-full border rounded-md focus:border-cyan-300 focus:ring focus:ring-cyan-400 focus:ring-opacity-50"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-600 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-out hover:ease-in"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="bg-black text-white w-full p-12 md:p-24 mt-7 border-t-4 border-cyan-400">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Leave your experience with Raul!</h1>
              <p className="text-lg md:text-xl mb-8">Create an account or Sign In!</p>
              <div className="space-x-4">
                <button onClick={openSignUpModal} className="bg-cyan-400 text-white font-bold py-2 px-6 rounded hover:bg-cyan-500 transition duration-150 ease-in-out">Create Account</button>
                <button onClick={openLoginModal} className="bg-gray-200 text-black font-bold py-2 px-6 rounded hover:bg-gray-300 transition duration-150 ease-in-out">Sign In</button>
              </div>
            </div>
          </div>
          <LoginModal openSign={openSignUpModal} isOpen={isLoginOpen} onClose={closeLoginModal} />
          <SignUpModal openLog={openLoginModal} isOpen={isSignUpOpen} onClose={closeSignUpModal} />
        </>

      )}


    </section>
  );
}

export default TestimonialForm;
