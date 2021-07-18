import React from "react";

function Contact() {
  return (
    <div>
      <div className="py-16">
        <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl text-white sm:text-4xl">
            <span class="block text-lg text-teal mb-4">What's Next?</span>
            <span class="block font-extrabold">Get in Touch</span>
          </h2>
          <p class="text-xl mt-4 max-w-md mx-auto text-gray-400">
            I had noticed that both in the very poor and very rich extremes of
            society the mad were often allowed to mingle freely
          </p>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                class="py-4 px-6 border border-teal hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-teal w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Say Hello
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
