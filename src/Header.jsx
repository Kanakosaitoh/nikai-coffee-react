import React from "react";
import "./Header.css";
import logo from "./nikai-logo.png";
import cartIcon from "./cart-icon.jpg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-teritory">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="nikai-logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Nikai Coffee
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Subscription">Subscription</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Form className="d-flex gap-2">
              <Form.Control
                type="search"
                placeholder="Email address"
                className="lh-sm"
                aria-label="Search"
                width="8"
                size="sm"
              />
              <Button variant="secondary" size="sm" clasName="" active>
                Login
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
