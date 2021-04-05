import React from "react";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
      <nav className="navbar navbar-expand-lg">
        <div className="navbar-brand" to="/">
          <div>
            Johnnie Simpson: Full-Stack Web Developer
        </div>
        <div>
          Portfolio
        </div>
        </div>
      </nav>
  );
}

export default Nav;