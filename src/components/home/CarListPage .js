import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const CarListPage = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const car = JSON.parse(localStorage.getItem("selectedCar"));
    setSelectedCar(car);
  }, []);

  if (!selectedCar) {
    return (
      <Container className="mt-4">
        <Row>
          <Col>
            <h4 className="text-center">No car selected</h4>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="mt-4">
        

        <Col lg={5} md={6} sm={12} xs={12}>
          <Card className=" text-dark">
            <Card.Body className="text-center">
              <h5 className="ven">{selectedCar.name}</h5>
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                style={{ maxWidth: "500px" }}
              />
              <h6>ID: {selectedCar.id}</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md="6" sm={12} xs={12}>
          <Card.Body>
            <h5>Details</h5>
            <p>
              <strong>Model:</strong> {selectedCar.model}
            </p>
            <p>
              <strong>Version:</strong> {selectedCar.version}
            </p>
            <p>
              <strong>Year:</strong> {selectedCar.year}
            </p>
            <p>
              <strong>Color:</strong> {selectedCar.color}
            </p>
            <p>
              <strong>Price:</strong>₹{selectedCar.price}
            </p>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default CarListPage;
