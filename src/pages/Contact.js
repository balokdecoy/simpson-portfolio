import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid/index";
import Form from 'react-bootstrap/Form';
import FormFile from 'react-bootstrap/FormFile';
import{ init } from 'emailjs-com';
init("user_mOQiDnOMdIxqFfHkwIVUx");

function Contact() {

    const [name, setName] = useState([]);

    const [email, setEmail] = useState([]);

    const [message, setMessage] = useState([]);

    const handleChange = (e) => {
        setName({value: e.target.value})
    }

    const handleEmail = (e) => {
        setEmail({value: e.target.value})
    }

    const handleMessage = (e) => {
        setMessage({value: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(message)
        alert("Contact Form is currently under development. Check back later!")
    }

    return (
        <Container>
            <Row>
                <Col size="md-6">
                <Form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <h1 style={{paddingTop: "30px", color: "white"}}>contact me</h1>  
                          <br />
                          <label htmlFor="exampleFormControlInput1" style={{color:"white"}}>your name</label>
                          <input type="text" className="form-control" placeholder="your name here" 
                          onChange={handleChange}/>
                        </div>
                        <div className="form-group"> 
                            <label style={{color:"white"}}>email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                            onChange={handleEmail} />
                        </div>
                        <div className="form-group">
                          <label style={{color:"white"}}>message</label>
                          <textarea className="form-control" rows="3" 
                          placeholder="what's up?" onChange={handleMessage}></textarea>
                        </div>
                        <button type="submit" value="Submit" className="btn btn-primary">submit</button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;