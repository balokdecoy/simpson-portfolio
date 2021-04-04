import React from "react";
import Jumbotron from "../Jumbotron";

function Nav() {
  return (
    <Jumbotron>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand" to="/">
          <div><span>Johnnie Simpson: Full-Stack Web Developer</span>
          <hr></hr>
          <div className="portfolio" onClick="/Portfolio">Portfolio</div>
        </div>
        </div>
       
    </nav>
   
    </Jumbotron>
   
  );
}

export default Nav;
