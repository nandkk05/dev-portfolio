import React from "react";
import Header from "../components/Hero";
import Hero from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import MoreProjects from "../components/MoreProjects";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProfileCard />
      <ProjectCard />
      <MoreProjects />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
