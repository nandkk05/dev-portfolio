import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import Work from "./views/Work";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
