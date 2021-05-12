/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { Container } from "react-bootstrap";


class App extends Component {
  render() {
    return (
      <Container fluid style={{ backgroundColor: "gray" }}>
        <Nav />
      </Container>

    );
  }
}

export default App;
