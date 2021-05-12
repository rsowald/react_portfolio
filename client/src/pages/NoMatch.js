import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

function NoMatch() {
    return (
        <Container fluid style={{ backgroundColor: "gray" }}>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>404 Page Not Found</h1>
                        <a src="/home">Try going back to the home page</a>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default NoMatch;