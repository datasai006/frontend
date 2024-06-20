// components/header/nav.js
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NAV = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            RSN<span className="text-warning">CARS</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="m-1">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="m-1">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="m-1">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="m-1">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NAV;
