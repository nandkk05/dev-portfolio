import axios from "axios";
import React, { useEffect, useState } from "react";
import { devDotToUsername } from "../data/userData";

function Blogs() {
  const [articles, setArticles] = useState([]);
  const url = `https://dev.to/api/articles?username=${devDotToUsername}`;

  useEffect(() => {
    const getBlogs = async () => {
      await axios.get(url).then((res) => setArticles(res.data));
    };
    getBlogs();
  }, [url]);

  return (
    <div class="container px-5 py-16 mx-auto">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 class="sm:text-4xl text-3xl font-bold title-font mb-2 text-white">
          {" "}
          Blogs
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-base text-white">
          Some articles I
        </p>
      </div>

      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        {articles.map((article) => (
          <div
            class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto"
            key={article.id}
          >
            <div
              class="bg-gray-300 h-56 w-80 rounded-lg shadow-md bg-cover bg-center"
              style={{
                backgroundImage: `url(${article.social_image})`,
              }}
            ></div>

            <div class="w-70 bg-navy -mt-10 shadow-lg rounded-lg overflow-hidden p-5 transform transition-all duration-300 scale-100 hover:scale-95 text-white hover:text-teal">
              <div class="header-content inline-flex "></div>
              <div class="mb-4 text-white flex justify-between">
                Published on {article.readable_publish_date}
                <div className="hover:text-teal">
                  <a href={article.url} target="_blank" rel="noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
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
                </div>
              </div>
              <div class="font-bold text-xl">{article.title}</div>

              <div class="text-base text-white mt-4">
                {article.description}
                <a
                  class="bg-blue-100 text-blue-500 mt-4 block rounded text-sm "
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="text-teal"></span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
