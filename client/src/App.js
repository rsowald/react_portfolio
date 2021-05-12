/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";
import { Container } from "react-bootstrap";


class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid style={{ backgroundColor: "gray" }}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
