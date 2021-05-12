import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
    return (
        <Container style={{ backgroundColor: "whitesmoke" }}>
            <Row>
                <Col size="sm-12">
                    <h1 style={{ color: "teal", borderBottom: "solid teal 1px", marginBottom: "25px" }}>About Me</h1>
                </Col>
            </Row>
            <Row>
                <Col size="sm-6">
                    <h2>Background</h2>
                    <img className="float-right rounded portrait mb-4 ml-2" src={`${process.env.PUBLIC_URL}/PORTRAIT.jpg`}
                        alt="Self Portrait" style={{ maxWidth: "50%", maxHeight: "auto" }} />
                    <p>I was born in Ohio, had several years of moving around the United States with military
                    parents, and moved back to Ohio again in time to graduate high school. I met my future
                    husband when we were set up on a blind date for Homecoming in my junior year of high school.
                    We went to college together at The Ohio State University and got married a week after
                            graduation.</p>
                    <br />

                    <img className="float-left rounded my-2 img-fluid mb-1 mr-3"
                        src={`${process.env.PUBLIC_URL}/Oval_Ohio_State.jpg`} alt="Ohio State Oval" style={{ maxHeight: "300px", maxWidth: "auto" }} />
                    <p>At OSU, I earned 2 BA degrees in History and English, but had no interest in teaching or
                    graduate school. My real passion was writing, and I had a vague dream of being in
                    publishing. Before I could start a career, my new husband's job took us to
                    Washington DC, Germany, then Seattle in a span of 3 years. Just long enough to set my career
                    goals adrift. I began working in retail until I had my first child. Now, with two children
                            ages 6 and 5, it is time for a new chapter.</p>
                </Col>
                <Col size="sm-6">
                    <h2>Current Projects</h2>
                    <img className="float-right rounded portrait mb-2 ml-2" src={`${process.env.PUBLIC_URL}/Kids_portrait.jpg`}
                        alt="Kids Portrait" style={{ maxWidth: "50%", maxHeight: "auto" }} />
                    <p>My full time job is stay-at-home parent. It is the most exhausting job I've ever had, but
                    very rewarding in its own ways. With my youngest set to start Kindergarten in the fall of
                            2021, it is time to focus on other projects as well.</p>
                    <p> I am enrolled in a Trilogy curriculum coding boot camp through the University of Washington, but I am already a full MERN stack developer. I will be completing
                    a few more projects before getting my certificate in June, which I will post here. To
                    date, I have covered these major
                            topics:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>DOM traversal and manipulation</li>
                        <li>Using client-side local storage</li>
                        <li>Browser and third party APIs</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>React.js</li>
                    </ul>
                    <p>This page is a project to showcase a responsive React application using Bootstrap, but it is also my professional portfolio. Please visit the portfolio page for screenshots of my
                            projects and links to deployed applications, if available.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About;