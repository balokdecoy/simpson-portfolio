import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand" to="/">Johnnie Simpson - Full-Stack Developer</div>
        </nav>
    )
}

export default Header;