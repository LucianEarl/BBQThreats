import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Tim from "./Tim";
import Lucian from "./Lucian";

function App() {
  return (
    <div className="bg-background h-full w-screen">
      <Router>
        <nav className="">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Lucian">Lucian</Link>
            </li>
            <li>
              <Link to="/Tim">Tim</Link>
            </li>
          </ul>
        </nav>

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
