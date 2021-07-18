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
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-white">
          {" "}
          Blogs
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-base text-white">
          Some articles I
        </p>
      </div>
      {articles.map((article) => (
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4" key={article.id}>
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div
              class="bg-gray-300 h-56 w-80 rounded-lg shadow-md bg-cover bg-center"
              style={{
                backgroundImage: `url(${article.social_image})`,
              }}
            ></div>

            <div class="w-70 bg-navy -mt-10 shadow-lg rounded-lg overflow-hidden p-5 transform transition-all duration-300 scale-100 hover:scale-95 text-white hover:text-teal">
              <div class="header-content inline-flex "></div>
              <div class="mb-4 text-white">
                Published on {article.readable_publish_date}
              </div>
              <div class="title-post font-bold text-xl">{article.title}</div>

              <div class="summary-post text-base text-justify text-white mt-4">
                {article.description}
                <a
                  class="bg-blue-100 text-blue-500 mt-4 block rounded text-sm "
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="text-teal">View on Dev.to</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
