import React from "react";
import {Container, Row, Col } from "../Grid/index"

function Card() {
  return (
    <Container>
      <Row>
        <Col size="6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Project 1</h3>
            </div>
            <img className="card-img-top" src="./tarot.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <p className="card-text">
                Description of my project
              </p>
            </div>
          </div>
        </Col>
        <Col size="6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Project 2</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Description of my second project
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Project 1</h3>
            </div>
            <img className="card-img-top" src="./tarot.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <p className="card-text">
                Description of my project
              </p>
            </div>
          </div>
        </Col>
        <Col size="6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Project 2</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Description of my second project
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Project 1</h3>
            </div>
            <img className="card-img-top" src="./tarot.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <p className="card-text">
                Description of my project
              </p>
            </div>
          </div>
        </Col>
        <Col size="6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Project 2</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Description of my second project
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
   
  )
}

export default Card;