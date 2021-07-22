import React from "react";
import Header from "../components/Hero";
import Hero from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import MoreProjects from "../components/MoreProjects";
import { devDotToUsername } from "../data/userData";
import FeaturedProject from "../components/FeaturedProject";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProfileCard />
      <FeaturedProject />
      <MoreProjects />
      {devDotToUsername && <Blogs />}
      <Contact />
    </div>
  );
}

export default Home;
