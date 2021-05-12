import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./style.css";

function Navbar() {
    return (
        <Nav variant="tabs" className="justify-content-end color" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="/home" style={{ color: 'white' }}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/portfolio" style={{ color: 'white' }}>Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/Resume" style={{ color: 'white' }}>Resume</Nav.Link>
            </Nav.Item>
            <NavDropdown title={
                <span className="text-white my-auto">Social Media</span>
            } id="nav-dropdown">
                <NavDropdown.Item href="https://github.com/rsowald">GitHub</NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/renae-sowald">LinkedIn</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://www.instagram.com/renaesowald/">Instagram</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}

export default Navbar;