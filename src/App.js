import React from "react";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Manrope",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Hero />
      <ProjectCard />
    </div>
  );
}

export default App;
