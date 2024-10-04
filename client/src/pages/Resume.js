import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Resume() {
  return (
    <Container id="resume" style={{ backgroundColor: "whitesmoke" }}>
      <Row>
        <Col size="sm-9">
          <h1
            style={{
              color: "teal",
              borderBottom: "solid teal 1px",
              marginBottom: "25px",
            }}
          >
            Resume
          </h1>

          <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
            Renae Sowald
          </h2>
          <div className="text-center">
            <a
              className="d-inline"
              href="https://github.com/rsowald"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <i className="fab fa-github"></i> GitHub •{" "}
            </a>
            <a
              className="d-inline"
              href="https://www.linkedin.com/in/renae-sowald"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
          <h3
            className="mt-3"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Summary
          </h3>
          <p>
            I am trained as a Full Stack Web Developer specializing in the MERN
            stack. However, I have been a technical writer for the last 2 and a
            half years. Most of my academic experience was in the humanities
            with a focus on writing, and adding development knowledge made my
            skill set perfectly tailored to technical writing. I now have
            experience writing both JavaScript applications and comprehensive
            accompanying reference materials. Using my research, writing, and
            coding skills, I also enjoy the challenge of reading technical
            documents and creating a precis for a team in my own terms. I feel
            that I could be a passionate, collaborative, and constructive member
            of a technical writing team.
          </p>
          <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
            Technical Skills
          </h3>
          <ul>
            <li>
              Languages: JavaScript/ES6, HTML 5, CSS 3, Node JS, SQL (MySQL),
              NoSQL (Mongo)
            </li>
            <li>
              Libraries and Applications: npm, Materialize, Bootstrap,
              Sequelize, Mongoose, Express, Heroku, React, Next.js, Vue, Vite,
              Swagger, Docker, Docusaurus
            </li>
            <li>
              Concepts: MVC, responsive design, test-driven development, git,
              agile methodologies
            </li>
            <li>Spoken Languages: English, Spanish, German</li>
          </ul>

          <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
            Experience
          </h3>

          <p>Event Store, Remote - Bothell, WA, AUGUST 2023-JULY 2024</p>
          <ul>
            <li>
              Edited existing documentation by improving wording, adding
              information for clarity, and removing duplicate information.
            </li>
            <li>Worked with documentation as code, following Git workflows.</li>
            <li>
              Earned working knowledge of operational databases and event
              sourcing.
            </li>
            <li>
              Built a documentation site from scratch with React-based site
              generator Docusaurus.
            </li>
            <li>
              Gained more experience with agile development and project
              management tools.
            </li>
          </ul>

          <p>SignalWire, Remote - Bothell, WA, FEBRUARY 2022-AUGUST 2023</p>
          <ul>
            <li>
              Wrote product documentation at varying levels of technical detail
              from traditional tech reference to marketing copy.
            </li>
            <li>
              Created applications to demonstrate APIs and wrote accompanying
              code guides.
            </li>
            <li>
              Reviewed and edited code and guides from the documentation team.
            </li>
            <li>Edited articles from the marketing team.</li>
          </ul>

          <p> Stay-at-Home Parent, Bothell, WA JUNE 2014-FEBRUARY 2022</p>
          <ul>
            <li>
              Gained the ability to handle multiple competing priorities in a
              fast-paced environment.
            </li>
            <li>
              Honed patience into a skill to succeed in tedious, difficult, or
              even uncomfortable situations.
            </li>
            <li>
              Developed a love for teaching with the ability to adapt mentoring
              style to different personalities and learning styles.
            </li>
          </ul>

          <p>
            Pier 1 Imports, Bellevue, WA — Sales Leader AUGUST 2012 - JUNE 2014
          </p>
          <ul>
            <li>
              Provided excellent customer service, specializing in service
              issues and time consuming design projects.
            </li>
            <li>Coached and supervised up to 5 employees at a time.</li>
            <li>
              Adapted corporate directives and strategies to practicable goals
              and guidelines.
            </li>
            <li>
              Closed and counted registers, prepared bank deposits, and
              maintained petty cash supply.
            </li>
            <li>
              Planned and set displays each month, or more frequently as new
              inventory required.
            </li>
          </ul>

          <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Education</h3>
          <p>
            University of Washington Continuing Education — Full Stack Web
            Development Boot Camp DEC 2020 - JUNE 2021 A 24-week intensive
            program focused on gaining technical programming skills in HTML5,
            CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB,
            Express, Handlebars.js, and React Js.
          </p>
          <p>
            The Ohio State University, Columbus, OH — BA History, BA English
            SEPT 2005 - JUNE 2009 Magna Cum Laude GPA 3.84
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
