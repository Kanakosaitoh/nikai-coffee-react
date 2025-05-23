import React from "react";
import Bootstrap from "bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

export default function Header() {
  return (
    <div className="navbar">
      <Navbar className="bg-bg-transparent">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/nikai-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            {"  "}
            Nikai Coffee
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#about">Contact</Nav.Link>
            {"  "}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
            </NavDropdown>{" "}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
