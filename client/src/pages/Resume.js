import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Resume() {
    return (
        <Container id="resume" style={{ backgroundColor: "whitesmoke" }}>
            <Row>
                <Col size="sm-9">
                    <h1 style={{ color: "teal", borderBottom: "solid teal 1px", marginBottom: "25px" }}>Resume</h1>

                    <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Renae Sowald</h2>
                    <div className="d-inline offset-sm-5">
                        <a className="d-inline" href="https://github.com/rsowald" target={"_blank"} rel={"noopener noreferrer"}><i
                            className="fab fa-github"></i> GitHub • </a>
                        <a className="d-inline" href="https://www.linkedin.com/in/renae-sowald" target={"_blank"}
                            rel={"noopener noreferrer"}><i className="fab fa-linkedin"></i> LinkedIn • </a>
                        <a className="d-inline" href="https://www.instagram.com/renaesowald/" target={"_blank"}
                            rel={"noopener noreferrer"}><i className="fab fa-instagram"></i> Instagram</a>
                    </div>
                    <br />
                    <h3 className="mt-3" style={{ textAlign: "center", fontWeight: "bold" }}>Summary</h3>
                    <p>Full Stack Web Developer, having completed a 24 week coding boot camp with a focus on the MERN stack.
                        A passion for learning coupled with the ability to pick things up very quickly, made adding developer skills
                        fun. Each new project to build or problem to solve is an opportunity to grow. Effectively combines creativity
                        and problem solving to develop user-friendly, mobile-first applications. Detail oriented, and therefore able to
                        focus on a whole application from the big features down to the smallest bugs regardless of the complexity of
                        the project.
                    </p>
                    <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Technical Skills</h3>
                    <ul>
                        <li>Languages: JavaScript/ES6, HTML 5, CSS 3, Node JS, SQL (MySQL), NoSQL (Mongo)</li>
                        <li>Libraries and Applications: npm, Materialize, Bootstrap, Handlebars.js, Sequelize, Mongoose,
                            Express, Heroku, React</li>
                        <li>Concepts: MVC, responsive design, test-driven development, git, agile methodologies</li>
                        <li>Spoken Languages: English, Spanish, German</li>
                    </ul>

                    <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Experience</h3>
                    <p> Stay-at-Home Parent, Bothell, WA JUNE 2014-PRESENT</p>
                    <ul>
                        <li>Gained the ability to handle multiple competing priorities in a fast-paced environment.
                        </li>
                        <li>Honed patience into a skill to succeed in tedious, difficult, or even uncomfortable situations.
                        </li>
                        <li>Developed a love for teaching with the ability to adapt mentoring style to different personalities
                            and learning styles.
                        </li>
                    </ul>
                    <p>Pier 1 Imports, Bellevue, WA — Sales Leader AUGUST 2012 - JUNE 2014</p>
                    <ul>
                        <li>Provided excellent customer service, specializing in service issues and time consuming design
                            projects.</li>
                        <li>Coached and supervised up to 5 employees at a time.</li>
                        <li>Adapted corporate directives and strategies to practicable goals and guidelines.</li>
                        <li>Closed and counted registers, prepared bank deposits, and maintained petty cash supply.</li>
                        <li>Planned and set displays each month, or more frequently as new inventory required.</li>
                    </ul>
                    <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Education</h3>
                    <p>University of Washington Continuing Education — Full Stack Web Development Boot Camp
                        DEC 2020 - JUNE 2021
                        A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3,
                        Javascript,
                        JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handlebars.js, and React Js.</p>
                    <p>The Ohio State University, Columbus, OH — BA History, BA English
                        SEPT 2005 - JUNE 2009
                        Magna Cum Laude GPA 3.84</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Resume;