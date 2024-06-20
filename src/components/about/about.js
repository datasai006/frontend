import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../about/about.css"; // Optional: for any custom styles

const About = () => {
  return (
    <div className="about-page">
      <Container className="bg-white">
        <Row className="my-5">
          <Col>
            <h2 className="text-center text-primary">About Us</h2>
            <p className="text-center text-primary">
              Welcome to our platform, where you can buy and sell second-hand
              cars with ease and confidence.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <Card.Title className="text-primary">Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to provide a seamless and trustworthy platform
                  for buying and selling second-hand cars. We aim to connect
                  sellers with potential buyers, ensuring transparency and
                  fairness in every transaction.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <Card.Title className="text-success">What We Offer</Card.Title>
                <Card.Text>
                  We offer a wide range of second-hand cars from various brands,
                  ensuring quality and value for our customers. Our platform
                  provides detailed information on each vehicle, helping you
                  make informed decisions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <Card.Title className="text-warning">Why Choose Us?</Card.Title>
                <Card.Text>
                  Our user-friendly platform, coupled with our commitment to
                  customer satisfaction, sets us apart from the competition. We
                  provide a reliable and efficient service, making car buying
                  and selling a hassle-free experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <Card.Title className="text-danger">Contact Us</Card.Title>
                <Card.Text>
                  Have questions or need assistance? Feel free to contact us
                  through our <a href="/contact">Contact Page</a>. We are here
                  to help you every step of the way.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
