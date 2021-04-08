import React from "react";
import {Container, Row, Col } from "../Grid/index";
import "./style.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'

export default function () {
  return (
    <div class="container">
 <CardDeck className="customCard">
  <Card >
    <Card.Img variant="top" src="./images/images/tarot.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="./images/images/code.jpeg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="./images/images/edm.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
    <CardDeck className="customCard">
    <Card>
      <Card.Img variant="top" src="./images/images/thunder.jpg" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="./images/images/beyond-burger.jpg" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="./images/images/fish.jpg" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardDeck>
    </div>
   
//     <CardGroup>
//   <Card className="myCard">
//     <Card.Img variant="top" src="./images/images/tarot.jpg" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This card has supporting text below as a natural lead-in to additional
//         content.{' '}
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
// </CardGroup>

    // <Container>
    //   <Row>
    //     <Col size="6">
    //       <div className="card">
    //         <div className="card-header">
    //           <h3 className="card-title">Project 1</h3>
    //         </div>
    //         <img className="card-img-top" src="./images/images/tarot.jpg" alt="Card image cap"></img>
    //         <div className="card-body">
    //           <p className="card-text">
    //             Description of my project
    //           </p>
    //         </div>
    //       </div>
    //     </Col>
    //     <Col size="6">
    //       <div className="card">
    //         <div className="card-header">
    //           <h3 className="card-title">Project 2</h3>
    //         </div>
    //         <div className="card-body">
    //           <p className="card-text">
    //             Description of my second project
    //           </p>
    //         </div>
    //       </div>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col size="6">
    //       <div className="card">
    //         <div className="card-header">
    //           <h3 className="card-title">Project 1</h3>
    //         </div>
    //         <img className="card-img-top" src="" alt="Card image cap"></img>
    //         <div className="card-body">
    //           <p className="card-text">
    //             Description of my project
    //           </p>
    //         </div>
    //       </div>
    //     </Col>
    //     <Col size="6">
    //       <div className="card">
    //         <div className="card-header">
    //           <h3 className="card-title">Project 2</h3>
    //         </div>
    //         <div className="card-body">
    //           <p className="card-text">
    //             Description of my second project
    //           </p>
    //         </div>
    //       </div>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col size="6">
    //       <div className="card">
    //         <div className="card-header">
    //           <h3 className="card-title">Project 1</h3>
    //         </div>
    //         <img className="card-img-top" src="./tarot.jpg" alt="Card image cap"></img>
    //         <div className="card-body">
    //           <p className="card-text">
    //             Description of my project
    //           </p>
    //         </div>
    //       </div>
    //     </Col>
    //     <Col size="6">
    //       <div className="card">
    //         <div className="card-header">
    //           <h3 className="card-title">Project 2</h3>
    //         </div>
    //         <div className="card-body">
    //           <p className="card-text">
    //             Description of my second project
    //           </p>
    //         </div>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
   
  )
}