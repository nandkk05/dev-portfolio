import React from "react";
import { featuredProject } from "../data/userData";

function FeaturedProject() {
  return (
    <div class="container px-5 mt-24 mx-auto">
      <h1 className="text-white font-bold text-4xl mb-16 px-4 sm:px-0">
        Featured Project
      </h1>
      {featuredProject.map((project) => (
        <div class="mx-auto flex px-4 sm:px-0 flex-wrap text-white items-center mb-20">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover  object-center rounded opacity-bg"
            src={project.image}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-navy rounded-xl sm:rounded-r-xl p-8">
            <h1 class="text-3xl title-font font-bold py-4">{project.name}</h1>
            <p class="leading-relaxed">{project.desc}</p>
            <div class="flex justify-between mt-8 items-center">
              <h2 class="text-sm tracking-widest text-gray-300">
                {project.techStack}
              </h2>
              <div>
                {project.demo && (
                  <a
                    href={project.demo}
                    class="flex ml-auto text-white border-0 py-2 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 ml-3 text-white hover:text-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    class="rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="w-5 h-6 text-white hover:text-teal"
                    >
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProject;
