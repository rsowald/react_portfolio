import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
    return (
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Resume</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Social Media" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">GitHub</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">LinkedIn</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.3">Instagram</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}

export default Navbar;