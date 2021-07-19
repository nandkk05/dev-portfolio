import React from "react";
import { moreProjects } from "../data/userData";

function MoreProjects() {
  return (
    <div>
      <div class="container px-0 sm:px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center text-white">
          <h1 class=" title-font mb-2 text-2xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-4xl">
            {" "}
            Other Projects
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-base">
            These are some minor projects I built while learning new Tech
          </p>
        </div>
        <div class="flex flex-wrap -m-4 p-8 sm:p-0">
          {moreProjects.map((project) => (
            <div class="xl:w-1/3 md:w-1/2 p-4 text-white transform transition-all duration-300 scale-100 hover:-translate-y-5 text-white hover:text-teal">
              <div class="bg-navy p-6 rounded h-80">
                <div class="h-12 flex justify-between items-center justify-center rounded-full text-teal mb-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
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
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
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
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    {" "}
                    <h2 class="text-xl tracking-tight font-bold mb-2">
                      {project.name}{" "}
                    </h2>
                    <p class="leading-relaxed text-base text-white">
                      {project.desc}
                    </p>
                  </div>

                  <div class="absolute bottom-12 w-full uppercase">
                    <span class="items-center leading-none text-xs py-1 text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoreProjects;
