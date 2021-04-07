import React from "react";
import "./style.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function () {
  return (<div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/index">Johnnie Simpson - Full-Stack Developer</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/index">home</Nav.Link>
      <Nav.Link href="/portfolio">portfolio</Nav.Link>
      <Nav.Link href="/contact">contact</Nav.Link>
    </Nav>
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