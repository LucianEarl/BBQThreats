import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Navbar from "../components/Navbar";
import Tim from "./Tim";
import Lucian from "./Lucian";

function App() {
  return (
    <div className="bg-relative flex flex-col h-screen w-screen justify-between z-0 overflow-x-hidden">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Tim" exact>
            <Tim />
          </Route>
          <Route path="/Lucian" exact>
            <Lucian />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
