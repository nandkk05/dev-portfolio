import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import About from "./views/About";
import Home from "./views/Home";
import Work from "./views/Workspace";
import Header from "./components/Header";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Manrope",
    background: "#00071c",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <div className={classes.root}>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/workspace" component={Work} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
