import React from "react";
import { Link } from "react-router-dom";
import { myEmail } from "../data/userData";

function CTA() {
  return (
    <div className="container px-5 mx-auto text-white">
      <div className="mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between text-white bg-navy rounded-xl">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="block ">Got a Project?</span>
          <span className="block text-teal font-semibold">Let's connect.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href={`mailto:${myEmail}`}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white border-teal hover:bg-tealtint"
            >
              Say Hello!
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              to="/workspace"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-indigo-50"
            >
              See Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
