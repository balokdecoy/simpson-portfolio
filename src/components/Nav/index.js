import React from "react";
import "./style.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function () {
  return (<div>
    <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/">Johnnie Simpson</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">home</Nav.Link>
      <Nav.Link href="/portfolio">portfolio</Nav.Link>
      <Nav.Link href="/portfolio">contact</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>

      // <nav className="navbar navbar-expand-lg">
      //   <div className="navbar-brand" href="/index" style={{paddingRight: "20px"}}>
      //     <div>
      //       Johnnie Simpson: Full-Stack Web Developer
      //   </div>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
      //           aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      //           <span className="navbar-toggler-icon"></span>
      //           <span className="dropdown-menu" aria-labelledby="navbarNavAltMarkup"></span>
      //       </button>
      //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      //           <span className="navbar-nav">
      //               <a className="nav-link active" href="/index">home<span className="sr-only">(current)</span></a>
      //               <a className="nav-link" href="/portfolio">portfolio</a>
      //               <a className="nav-link" href="/contact">contact me</a>
      //           </span>
      //       </div>
      //   </div>z
      // </nav>
  );
}