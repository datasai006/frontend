import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../contact/contact.css"; // Custom styles

const Contact = () => {
  return (
    <div className="contact-page">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center text-dark">Contact Us</h2>
            <p className="text-center text-dark">
              We'd love to hear from you! Please fill out the form below and
              we'll get in touch with you shortly.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label className="text-dark">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label className="text-dark">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label className="text-dark">Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label className="text-dark">Message</Form.Label>
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
  );
};

export default Contact;
