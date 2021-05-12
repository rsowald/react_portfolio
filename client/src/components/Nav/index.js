import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./style.css";

function MyNav() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="space">
            <Navbar.Brand href="#home">Renae Sowald</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/#about">About</Nav.Link>
                    <Nav.Link href="/#resume">Resume</Nav.Link>
                    <NavDropdown title="Social Media" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="https://github.com/rsowald" target={"_blank"} rel={"noopener noreferrer"}>GitHub</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.linkedin.com/in/renae-sowald" target={"_blank"} rel={"noopener noreferrer"}>LinkedIn</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://www.instagram.com/renaesowald/" target={"_blank"} rel={"noopener noreferrer"}>Instagram</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNav;