import React from "react";
import { Col, Row, Container } from "../components/Grid/index";

function Home() {
  return (
    <Container>
      <Row>
        <Col size='md-8'>
          <h1
            style={{
              paddingTop: "30px",
              color: "white",
              fontFamily: "Roboto",
            }}
          >
            Hello World.
          </h1>
          <div className='row'>
            <div className='col-md-10'>
              <div
                id='myBio'
                style={{
                  color: "#a3cc00",
                  fontFamily: "Roboto",
                }}
              >
                I'm Johnnie Simpson, a full-stack web developer from Baltimore,
                Maryland. I graduated from the George Washington University
                Full-Stack Web Development Bootcamp in 2021. Since then I have
                continually built my own projects, and redesigned the corporate
                websites of two government contracting companies.
                <br />
                <br />
                Thanks for stopping by. Feel free to explore my projects by
                clicking on the Portfolio tab. You can reach me directly at the
                Contact Me tab.
              </div>
            </div>
          </div>
          <h1
            style={{
              paddingTop: "30px",
              color: "white",
              fontFamily: "Roboto",
            }}
          >
            Skillset
          </h1>
          <div className='row'>
            <div className='col-md-10'>
              <div
                id='myBio'
                style={{
                  color: "#a3cc00",
                  fontFamily: "Roboto",
                }}
              >
                <p>
                  {" "}
                  <span style={{ color: "white" }}>Front-End: </span>{" "}
                  JavaScript, jQuery, React, Bootstrap, Materialize, Tailwind,
                  Handlebars, CSS3, HTML5{" "}
                </p>
                <p>
                  <span style={{ color: "white" }}>Back-End: </span> GNOME
                  Terminal, Git, Node.js, NPM, Express, Axios, RESTful APIs,
                  MongoDB, MySQL, Mongoose, Sequelize{" "}
                </p>
                <p>
                  <span style={{ color: "white" }}>Software: </span> VSCode,
                  Robo3T, IntelliJ IDEA, MySQL Workbench, VirtualBox
                </p>
                <p>
                  <span style={{ color: "white" }}>Certifications: </span>{" "}
                  Introduction to Linux - The Linux Foundation, August 14 2021
                </p>
                <p>
                  <span style={{ color: "white" }}>Currently studying: </span>{" "}
                  Linux sysadmin certification, Python, Sabermetrics{" "}
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col size='md-4'>
          <div
            className='card text-white bg-dark mb-3'
            style={{ maxWidth: "18rem", marginTop: "30px" }}
          >
            <img
              className='card-img-top'
              src='./images/images/me2.jpg'
              alt='johnnie-simpson'
            />
            <div className='card-body'>
              <h5 className='card-title'>let's connect</h5>
              <p className='card-text'>
                <a
                  className='button'
                  href='https://github.com/balokdecoy'
                  target='_blank'
                  rel='noreferrer'
                  style={{ color: "white", padding: "5px" }}
                >
                  <i className='fab fa-github fa-3x'></i>
                </a>
                <a
                  className='button'
                  href='./resume/resume-johnnie-simpsonv2.pdf'
                  target='_blank'
                  rel='noreferrer'
                  style={{ color: "red", padding: "5px" }}
                >
                  <i className='far fa-file-pdf fa-3x'></i>
                </a>
                <a
                  className='button'
                  href='https://www.linkedin.com/in/johnnie-simpson-jr-46629586/'
                  target='_blank'
                  rel='noreferrer'
                  style={{ color: "blue", padding: "5px" }}
                >
                  <i className='fab fa-linkedin fa-3x'></i>
                </a>
                <a
                  className='button'
                  href='https://www.youtube.com/channel/UCH4BSKNihbY1rpfJSUrR7Pw/featured'
                  target='_blank'
                  rel='noreferrer'
                  style={{ color: "red", padding: "5px" }}
                >
                  <i className='fab fa-youtube fa-3x'></i>
                </a>
                <br />
                <br />
                <a
                  style={{ color: "#a3cc00" }}
                  href='mailto:johnniesimpson@proton.me'
                >
                  johnniesimpson@proton.me
                </a>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
