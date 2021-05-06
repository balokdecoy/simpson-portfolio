import React from "react";
import { Col, Row, Container } from "../components/Grid/index";

function Home() {
    return (
    <Container>
        <Row>
          <Col size="md-8">
          <h1 style={{paddingTop: "30px", color: "white", fontFamily: "Inconsolata, monospace"}}> {">"} hello, world...|</h1>
                    <div className="row">
                        <div className="col-md-10">
                            <div id="myBio" style={{color: "#a3cc00", fontFamily: "Inconsolata, monospace"}}>
                                Welcome. I'm Johnnie Simpson, I am a full-stack web developer from 
                                Baltimore, Maryland. I graduated from the George Washington University 
                                Full Stack Coding Bootcamp. Currently, I am pursuing Linux sysadmin and Kali Linux Certified Professional certifications. 
                                I  strive to leverage my diverse skillset to bring clarity, precision, and passion to the web
                                development industry. 
                                <br />
                                <br />
                                Thank you for visiting my site. Feel free to explore my projects by clicking
                                on the Portfolio tab. You can reach me directly at the Contact Me tab, or on
                                social media. 
                            </div>
                        </div>
                    </div>
          </Col>
          <Col size="md-4" style={{paddingTop:"30px"}}>
            <div className="card text-white bg-dark mb-3" style={{maxWidth: "18rem"}}>
              <img className="card-img-top" src="./images/images/me2.jpg" alt="my picture"/>
              <div className="card-body">
                <h5 className="card-title">let's connect</h5>
                  <p className="card-text">
                    <a className="button" href="https://github.com/balokdecoy" target="_blank" style={{color:"white", padding: "5px"}}>    
                      <i className="fab fa-github fa-3x"></i>
                    </a>
                    <a className="button" href="./resume/johnnie-simpson-resume-2021.pdf" target="_blank" style={{color:"red", padding: "5px"}}>
                      <i className="far fa-file-pdf fa-3x"></i>
                    </a>
                    <a className="button" href="https://www.linkedin.com/in/johnnie-simpson-jr-46629586/" target="_blank" style={{color: "blue", padding: "5px"}}>
                      <i className="fab fa-linkedin fa-3x"></i>
                    </a>
                    <a className="button" href="https://www.youtube.com/channel/UCH4BSKNihbY1rpfJSUrR7Pw/featured" target="_blank" style={{color:"red", padding: "5px"}}>
                      <i className="fab fa-youtube fa-3x"></i>
                    </a>
                    <br />
                    <br />
                    <p>Phone: <br /> 443-974-3428</p>
                    <a style={{color: "#a3cc00"}} 
                    href="mailto:johnniesimpson@protonmail.com">johnniesimpson@protonmail.com</a>
                  </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default Home;