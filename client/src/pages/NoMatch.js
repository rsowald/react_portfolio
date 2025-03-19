import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function NoMatch() {
  return (
    <Container fluid style={{ paddingBottom: "600px" }}>
      <Row>
        <Col size="md-12">
          <div className="container-fluid py-5">
            <h1>404 Page Not Found</h1>
            <a href="/">Try going back to the home page</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
