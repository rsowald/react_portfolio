/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
          }}
        >
          <MyNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
