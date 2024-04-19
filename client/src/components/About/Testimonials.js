import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import { QUERY_TESTIMONIALS } from "../../utils/queries";
import { DELETE_TESTIMONIAL } from "../../utils/mutations";
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import Auth from "../../utils/auth";

import TestimonialForm from "./TestimonialForm";

import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import UpdateTestimonial from "./Modals/UpdateTestimonial";

const Testimonials = ({ isLoggedIn }) => {
  const { loading, error, data, refetch } = useQuery(QUERY_TESTIMONIALS);

  const [deleteTestimonial, { error: deleteTestimonialError }] = useMutation(DELETE_TESTIMONIAL);
  const [updateTestimonialStates, setUpdateTestimonialStates] = useState({});

  const toggleUpdateModal = (testId) => {
    setUpdateTestimonialStates(prev => ({ ...prev, [testId]: !prev[testId] }));
};

  const closeUpdateModal = (testId) => {
    setUpdateTestimonialStates(prev => ({ ...prev, [testId]: false }));
  };

  const handleTestimonialDelete = async (testimonialId) => {
    try {
      await deleteTestimonial({
        variables: {
          userId: Auth.getUser().data._id,
          testimonialId,
        },
      });

      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  // Check if the user is authenticated
  const isAuthenticated = Auth.getUser() != null;

  const the_testimonials = data?.testimonials || []
  console.log(the_testimonials)

  const testiComs = the_testimonials.map(t => {
    return (
      <div key={t._id} className="relative mt-7">
        <article className="bg-white p-5 w-72 h-96 rounded-lg drop-shadow-xl">
          {isLoggedIn && t.user._id === Auth.getUser().data._id && (
            <>
              <FaEdit className="text-3xl absolute cursor-pointer top-0 right-10 m-2" onClick={() => toggleUpdateModal(t._id)}/>
              <FaDeleteLeft onClick={() => {
                handleTestimonialDelete(t._id)
              }} className="text-3xl absolute cursor-pointer top-0 right-0 m-2 text-red-500" />
            </>
          )}
          <FontAwesomeIcon
            className="text-5xl mb-3 text-cyan-200"
            icon={faQuoteLeft}
          />
          <p className="italic text-gray-700 text-sm tracking-wide">
            {t.testimonial}
          </p>
          <hr className="my-3" />
          <p className="font-bold">{t.user.username}</p>
          <p className="text-sm">{t.user.company}</p>
        </article>
        <UpdateTestimonial title="Testimonial" idx={t._id} isOpen={updateTestimonialStates[t._id]} onClose={() => closeUpdateModal(t._id)} refetch={refetch} />
      </div>
    )
  })
  return (
    <>
      <section className="container min-w-full">
        <h1 className="text-center text-5xl font-semibold underline underline-offset-4 decoration-cyan-400 mb-5">Testimonials</h1>
        <div className="flex flex-wrap justify-around">
          {testiComs}
        </div>
      </section>
      <TestimonialForm isLoggedIn={isLoggedIn} refetch={refetch} />
    </>
  );
};

export default Testimonials;
