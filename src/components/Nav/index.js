import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function pageNav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" style={{ width: "100%" }}>
        <Navbar.Brand>Johnnie Simpson - Full-Stack Developer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/simpson-portfolio/#/">home</Nav.Link>
            <Nav.Link href="/simpson-portfolio/#/portfolio">portfolio</Nav.Link>
            <Nav.Link href="/simpson-portfolio/#/contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
