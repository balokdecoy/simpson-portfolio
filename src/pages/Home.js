import React from "react";
import { Col, Row, Container } from "../components/Grid/index";

function Home() {
    return (
    <Container>
        <Row>
          <Col size="md-6">
          <h1 style={{paddingTop: "30px", color: "white", fontFamily: "Inconsolata, monospace"}}> {">"} hello, world...|</h1>
                    <div className="row">
                        <div className="col-md-10">
                            <div id="myBio" style={{color: "lime"}}>
                                Welcome. I'm Johnnie Simpson, I am a full-stack web developer from 
                                Baltimore, Maryland. I am currently enrolled in the George Washington University 
                                Full Stack Coding Bootcamp. I have a B.A. in English Language and Literature from
                                the University of Maryland, but my professional background over the past several years
                                has mostly been in accounting. My passion, however, is coding and development. I am 
                                working towards a professional certificate in full stack development, and I plan to
                                leverage my diverse skillset to bring clarity, precision, and passion to the web
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
        </Row>
      </Container>
    );
}

export default Home;