import React from "react";
import Header from "../components/Hero";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Hero from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Manrope",
    background: "#00071c",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Hero />
        <ProfileCard />
        <ProjectCard />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
