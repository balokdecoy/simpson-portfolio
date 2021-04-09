import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/simpson-portfolio/#/home" component={Home} />
          <Route exact path="/simpson-portfolio/#/portfolio" component={Portfolio} />
          <Route exact path="/simpson-portfolio/#/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
