import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";
import { Container } from "react-bootstrap";

function MyNav() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="space"
    >
      <Container>
        <Navbar.Brand href="/">Renae Sowald</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <NavDropdown title="Social Media" id="collapsible-nav-dropdown">
              <NavDropdown.Item
                href="https://github.com/rsowald"
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <i className="fab fa-github"></i> GitHub
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.linkedin.com/in/renae-sowald"
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
