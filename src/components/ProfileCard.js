import React from "react";

export default function MediaCard() {
  return (
    <div>
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center "
        id="hero"
      >
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">
            About me
          </h1>
          <p class="mb-8 text-lg leading-relaxed text-gray-400">
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together p custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <div class="flex flex-col">
            <h2 class="title-font font-semibold text-white tracking-wider text-lg mb-3">
              Few technologies I've been working with recently
            </h2>
            <nav class="flex flex-wrap list-none -mb-1 text-gray-400">
              <li class="lg:w-1/3 mb-1 w-1/2">
                <p class="hover:text-white">JavaScript (ES6)</p>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <p class="hover:text-white">React</p>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <p class="hover:text-white">Vue</p>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <p class="hover:text-white">Tailwind CSS</p>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <p class="hover:text-white">Firebase</p>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <p class="hover:text-white">Node js</p>
              </li>
            </nav>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://avatars.githubusercontent.com/u/33036554?v=4"
          />
        </div>
      </div>
    </div>
  );
}
