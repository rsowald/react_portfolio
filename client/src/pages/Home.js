import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

function Home() {
    return (
        <Container id="home" className="align-center" style={{ paddingBottom: "300px" }}>
            <Row>
                <Col size="sm-9">
                    <Jumbotron>
                        <h1 style={{ color: "teal", borderBottom: "solid teal 1px", marginBottom: "25px" }}>Hello, Dev World!</h1>
                        <img className="img-fluid float-right rounded-circle portrait" src={`${process.env.PUBLIC_URL}/indexPortrait.jpg`}
                            alt="Self Portrait" style={{ maxWidth: "30%", maxHeight: "auto" }} />
                        <p className="lead">My name is Renae Sowald, and I am a new full stack web developer. Following my completion of a coding boot camp with the University of Washington, I hope
                            to move on to a full-time career in development.</p>

                        <p className="lead">Visit my portfolio to see how far I've come on my journey.</p>
                        <p className="lead">
                            <a className="btn btn-outline-info mb-3" href="/react_portfolio/portfolio" role="button">Portfolio</a>
                            <br />
                            <a className="btn btn-outline-info" href={`${process.env.PUBLIC_URL}/resume.pdf`} target={"_blank"} role="button">My
                                Resume</a>
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;