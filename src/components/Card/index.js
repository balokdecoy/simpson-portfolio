import React from "react";
import {Container, Row, Col } from "../Grid/index";
import "./style.css";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function repo1(e) {
  e.preventDefault();
  window.open("https://github.com/balokdecoy/Sprinter-React");
};

function app1(e) {
  e.preventDefault();
  window.open("https://vibrant-pasteur-087033.netlify.app/");
}

function repo2(e) {
  e.preventDefault();
  window.open("https://github.com/balokdecoy/employee-directory");
};

function app2(e) {
  e.preventDefault();
  window.open("https://balokdecoy.github.io/employee-directory/");
}

function repo3(e) {
  e.preventDefault();
  window.open("https://github.com/balokdecoy/weather-app");
};

function app3(e) {
  e.preventDefault();
  window.open("https://balokdecoy.github.io/weather-app/");
};

function repo4(e) {
  e.preventDefault();
  window.open("https://github.com/balokdecoy/AceOfPentacles");
};

function app4(e) {
  e.preventDefault();
  window.open("https://balokdecoy.github.io/AceOfPentacles/");
};

function repo5(e) {
  e.preventDefault();
  window.open("https://github.com/balokdecoy/budget-tracker");
};

function app5(e) {
  e.preventDefault();
  window.open("https://damp-lake-65220.herokuapp.com/");
};

function demo6(e) {
  e.preventDefault();
  window.open("https://www.youtube.com/watch?v=LBWWx2U2HU0");
};

function repo6(e) {
  e.preventDefault();
  window.open("https://github.com/balokdecoy/readme-generator");
};

export default function () {
  return (
    <div className="container">
 <CardDeck className="customCard">

    <Card>
    <Card.Img variant="top" src="./images/images/dashboard.png" />
    <Card.Body>
      <Card.Title style={{paddingTop: "20px"}}>Sprinter</Card.Title>
      <Card.Text>
      Sprinter is a project management application built with MongoDB, Mongoose, Node.js,
      Express, Axios, and Dotenv. Create sprints, add employees and managers to sprints, 
      and track development as your project progresses. To see app, use the following login credentials: 
      Username: jsimpson  Password: 1234
      <br />
      <br />
      <button type="button" className="btn btn-dark" style={{fontWeight: "bolder"}} onClick={app1} id="project1App">For Users</button>
      <button type="button" className="btn btn-secondary" style={{fontWeight: "bolder"}} onClick={repo1} id="project1Code">For Nerds</button> 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>MongoDB, Mongoose, JavaScript, Node.js, Express, Axios</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="./images/images/weather-app.png" />
    <Card.Body>
      <Card.Title style={{paddingTop: "20px"}}>Weather Dashboard</Card.Title>
      <Card.Text>
        Weather application utilizing RESTful APIs. Incorporates OpenWeather API and dayJS API. 
        Includes current weather forecast and 5-day forecast. Daily weather information includes 
        current conditions, temperature, humidity, UV index, and wind speed. 
      <br />
      <br />
      <button type="button" className="btn btn-dark" style={{fontWeight: "bolder"}} onClick={app3} id="project1App">For Users</button>
      <button type="button" className="btn btn-secondary" style={{fontWeight: "bolder"}} onClick={repo3} id="project1Code">For Nerds</button> 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>JavaScript, jQuery, RESTful APIs, Bootstrap</small>
    </Card.Footer>
  </Card>
  </CardDeck>

  <CardDeck className="customCard">

  <Card>
    <Card.Img variant="top" src="./images/images/hive.png" />
    <Card.Body>
      <Card.Title style={{paddingTop: "20px"}}>Hive</Card.Title>
      <Card.Text>
      Hive is an employee directory application built in React.js, Axios, Node.js, and JavaScript. 
      Designed to present React state functionality. 
      <br />
      <br />
      <button type="button" className="btn btn-dark" style={{fontWeight: "bolder"}} onClick={app2} id="project1App">For Users</button>
      <button type="button" className="btn btn-secondary" style={{fontWeight: "bolder"}} onClick={repo2} id="project1Code">For Nerds</button> 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>React, JavaScript, Node.js, Axios</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="./images/images/celtic.png" />
    <Card.Body>
      <Card.Title style={{paddingTop: "20px"}}>Ace of Pentacles</Card.Title>
      <Card.Text>
      Ace of Pentacles is a tarot card reading and horoscope app. Select either a three-card Past-Present-Future spread, a traditional 
      Celtic Cross spread for deeper questions, or check your daily horosocpe. Utilizes a customized RESTful API. 
      <br />
      <br />
      <button type="button" className="btn btn-dark" style={{fontWeight: "bolder"}} onClick={app4} id="project1App">For Users</button>
      <button type="button" className="btn btn-secondary" style={{fontWeight: "bolder"}} onClick={repo4} id="project1Code">For Nerds</button> 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>JavaScript, jQuery, RESTful APIs, Materialize</small>
    </Card.Footer>
  </Card>

  </CardDeck>

  <CardDeck className="customCard">
  <Card>
    <Card.Img variant="top" src="./images/images/budget.png" />
    <Card.Body>
      <Card.Title style={{paddingTop: "20px"}}>Budget Tracker</Card.Title>
      <Card.Text>
      A budget-tracking web application with offline functionality. Built in React and JavaScript,
      supported in the backend with a MongoDB database, Mongoose, Node.js, and Express. Continues to
      record user data while offline, and updates the system database when connection is reestablished.
      <br />
      <br />
      <button type="button" className="btn btn-dark" style={{fontWeight: "bolder"}} onClick={app5} id="project1App">For Users</button>
      <button type="button" className="btn btn-secondary" style={{fontWeight: "bolder"}} onClick={repo5} id="project1Code">For Nerds</button> 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>MongoDB, Mongoose, React, JavaScript, Node.js</small>
    </Card.Footer>
  </Card>

    <Card>
    <Card.Img variant="top" src="./images/images/terminal-program.png" />
    <Card.Body>
      <Card.Title>README Generator</Card.Title>
      <Card.Text>
      Exactly what it sounds like. A Command Line Interface (CLI) program that creates a customized 
      README.md file based on user specifications. 
      <br />
      <br />
      <button type="button" className="btn btn-dark" style={{fontWeight: "bolder"}} onClick={demo6} id="project1App">Demo</button>
      <button type="button" className="btn btn-secondary" style={{fontWeight: "bolder"}} onClick={repo6} id="project1Code">For Nerds</button> 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>JavaScript, jQuery, Node.js, Inquirer</small>
    </Card.Footer>
  </Card>
  </CardDeck>
    </div>   
  )
}