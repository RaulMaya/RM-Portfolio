import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import { QUERY_TESTIMONIALS } from "../../utils/queries";
import { useQuery } from '@apollo/client';

import TestimonialForm from "./TestimonialForm";

const testimonials = [
  { "id": 1, "name": "John Doe", "testimonial": "This service has been an absolute game-changer for my business! The level of detail and attention to our needs has exceeded all expectations. I cannot express enough how much this has positively impacted our operations.", "company_name": "Doe Enterprises" },
  { "id": 2, "name": "Jane Smith", "testimonial": "The results we've seen have been incredible, truly exceeding all my expectations. The team's dedication and expertise have brought our projects to new heights. I am thoroughly impressed and grateful for their hard work.", "company_name": "Smith Consulting" },
  { "id": 3, "name": "Emily Johnson", "testimonial": "I've experienced nothing but professional, efficient, and utterly satisfying service. The team's approach is hands-on and personalized, and they really go the extra mile to ensure all needs are met with precision and care.", "company_name": "Johnson Digital" },
  { "id": 4, "name": "Michael Brown", "testimonial": "From start to finish, my experience has been truly outstanding. The professionalism, creativity, and attention to detail have been beyond what I could have asked for. This has set a new standard for what I expect from service providers.", "company_name": "Brown Media" },
  { "id": 5, "name": "Linda Davis", "testimonial": "I couldn't be happier with the results! The service provided has been exceptional from start to finish. The attention to detail, the constant communication, and the final outcome have all been beyond my expectations.", "company_name": "Davis Retail" }
]

const Testimonials = ({ isLoggedIn }) => {
  const { loading, error, data, refetch } = useQuery(QUERY_TESTIMONIALS);

  const the_testimonials = data?.testimonials || []

  const testiComs = the_testimonials.map(t => {
    return (
      <article key={t._id} className="bg-white p-5 w-72 h-96 rounded-lg drop-shadow-xl mt-7">
        <FontAwesomeIcon
          className="text-5xl mb-3 text-cyan-200"
          icon={faQuoteLeft}
        />
        <p className="italic text-gray-700 text-sm tracking-wide">
          {t.testimonial}
        </p>
        <hr className=" my-3" />
        <p className="font-bold">User</p>
        <p className="text-sm">Company</p>
      </article>
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
