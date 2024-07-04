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
      <Row className="justify-content-center">
        <Col lg={6} md={8} sm={10}>
          <Card>
            <div className="text-center text-dark">
              <h6>{selectedCar.id}</h6>
              <h5 className="ven">{selectedCar.name}</h5>
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                style={{ maxWidth: "200px" }}
              />
              {/* Add more details here as needed */}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CarListPage;
