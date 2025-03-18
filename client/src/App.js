/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
          }}
        >
          <MyNav />
          <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route></Route> <NoMatch />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
