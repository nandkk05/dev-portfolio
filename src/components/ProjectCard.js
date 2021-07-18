import React from "react";
import { projects } from "../data/userData";

export default function ProjectCard() {
  return (
    <div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-4xl text-3xl font-bold mb-2 text-white">
              Some Things I have built
            </h1>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-white text-lg">
            Here are some of my side projects which I created using React js,
            Vue js, Tailwind CSS, and Firebase
          </p>
        </div>
        <div class="flex flex-wrap -m-4 justify-between">
          <div class="flex flex-wrap -m-4 p-8 sm:p-0">
            {projects.map((project) => (
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={project.image}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      {project.category}
                    </h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">
                      {project.name}
                    </h1>
                    <p class="leading-relaxed mb-3 text-white">
                      {project.desc}
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a
                        href={project.githubLink}
                        class="text-teal inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        GitHub
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
