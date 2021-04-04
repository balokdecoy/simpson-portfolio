import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  );
}

export default App;
