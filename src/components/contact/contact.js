import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./contact.css"; // Custom styles
import NAV from "../header/nav";
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <>
      <NAV />
      <div className="contact-page">
        <Container>
          <Row className="my-5">
            <Col>
              <h2 className="text-center">Contact Us</h2>
              <p className="text-center">
                We'd love to hear from you! Please fill out the form below and
                we'll get in touch with you shortly.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8}>
              <Form>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobile"
                    placeholder="Enter your mobile number"
                  />
                </Form.Group>

                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Enter subject" />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter your message"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
