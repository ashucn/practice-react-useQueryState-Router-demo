import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import DemoPage from "./DemoPage";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <h1>
          <Link to="/">Home Page</Link>
        </h1>
        <h1>
          <Link to="/demo">Demo Page</Link>
        </h1>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/demo" component={DemoPage} />
        </Switch>
      </Router>
    </div>
  );
}
