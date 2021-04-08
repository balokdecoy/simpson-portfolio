import React from "react";
import { Col, Row, Container } from "../components/Grid/index";
import Form from 'react-bootstrap/Form';
import FormFile from 'react-bootstrap/FormFile'


function Contact() {
    return (
        <Container>
            <Row>
                <Col size="md-6">
                <Form>
                        <div className="form-group">
                          <h1 style={{paddingTop: "30px", color: "white"}}>contact me</h1>  
                          <br />
                          <label htmlFor="exampleFormControlInput1">first name</label>
                          <input type="text" className="form-control" placeholder="first name" />
                        </div>
                        <div className="form-group"> 
                            <label>last name</label>
                            <input type="text" className="form-control" placeholder="last name" />
                        </div>
                        <div className="form-group"> 
                            <label>email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                          <label>message</label>
                          <textarea className="form-control" rows="3" 
                          placeholder="what's up?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">submit</button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;