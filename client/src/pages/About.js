import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container id="about" style={{ backgroundColor: "whitesmoke" }}>
      <Row>
        <Col size="sm-12">
          <h1
            style={{
              color: "teal",
              borderBottom: "solid teal 1px",
              marginBottom: "25px",
            }}
          >
            About Me
          </h1>
        </Col>
      </Row>
      <Row>
        <Col size="sm-6">
          <h2>Background</h2>
          <img
            className="float-right rounded portrait mb-4 ml-2"
            src={`${process.env.PUBLIC_URL}/PORTRAIT.jpg`}
            alt="Self Portrait"
            style={{ maxWidth: "50%", maxHeight: "auto" }}
          />
          <p>
            I was born in Ohio, had several years of moving around the United
            States with military parents, and moved back to Ohio again in time
            to graduate high school. I met my future husband when we were set up
            on a blind date for Homecoming in my junior year of high school. We
            went to college together at The Ohio State University and got
            married a week after graduation.
          </p>
          <br />

          <img
            className="float-left rounded my-2 img-fluid mb-1 mr-3"
            src={`${process.env.PUBLIC_URL}/Oval_Ohio_State.jpg`}
            alt="Ohio State Oval"
            style={{ maxHeight: "300px", maxWidth: "auto" }}
          />
          <p>
            At OSU, I earned 2 BA degrees in History and English, but had no
            interest in teaching or graduate school. My real passion was
            writing, and I had a vague dream of being in publishing. Before I
            could start a career, my new husband's job took us to Washington DC,
            Germany, then Seattle in a span of 3 years. Just long enough to set
            my career goals adrift. I began working in retail until I had my
            first child. Then, when my second started elementary school it was
            time for a new chapter.
          </p>
        </Col>
        <Col size="sm-6">
          <h2>Experience</h2>
          <p></p>
          <img
            className="center rounded my-2 img-fluid mb-1 mr-3"
            src={`${process.env.PUBLIC_URL}/gh_contributions.jpg`}
            alt="GitHub contributions graphic"
            style={{ maxHeight: "300px", maxWidth: "auto" }}
          ></img>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
