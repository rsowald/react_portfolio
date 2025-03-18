import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function Home() {
  return (
    <Container
      id="home"
      style={{
        backgroundColor: "rgba(220, 220, 220, 0.9)",
        maxWidth: "70%",
        padding: "20px",
      }}
    >
      <Row>
        <Col>
          <h1
            style={{
              color: "teal",
              borderBottom: "solid teal 1px",
              marginBottom: "25px",
            }}
          >
            Hello, Tech World!
          </h1>
          <Image
            fluid
            roundedCircle
            src={`${process.env.PUBLIC_URL}/indexPortrait.jpg`}
            alt="Self Portrait"
            style={{ maxWidth: "30%", maxHeight: "auto", float: "right" }}
          />
          <p className="lead">
            My name is Renae Sowald, and I am a full stack web developer and
            technical writer. Following my completion of a coding boot camp with
            the University of Washington, I combined my two specialties of
            writing and development to become a technical writer.
          </p>

          <p className="lead">
            Visit my portfolio to see how far I've come on my journey.
          </p>
          <p>
            <Button variant="outline-dark" className="mb-3" href="/portfolio">
              Portfolio
            </Button>
            <br />
            <Button
              variant="outline-dark"
              href={`${process.env.PUBLIC_URL}/Renae_Sowald-Tech_Writer_Resume.pdf`}
              target={"_blank"}
            >
              My Resume
            </Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
