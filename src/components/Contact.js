import React from "react";
import { myEmail } from "../data/userData";

function Contact() {
  return (
    <div>
      <div className="py-16">
        <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl text-white sm:text-4xl">
            <span class="block text-lg text-teal mb-4">What's Next?</span>
            <span class="block text-3xl sm:text-5xl font-extrabold">
              Get in Touch
            </span>
          </h2>
          <p class="text-lg sm:text-xl mt-4 w-3/4 sm:w-1/2 mx-auto text-gray-400">
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
              <a
                type="button"
                class="py-4 px-6 border border-teal hover:bg-tealtint focus:ring-tealtint focus:ring-offset-tealtint text-teal w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                href={`mailto:${myEmail}`}
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
