import React from "react";
import { useParams } from "react-router-dom";
import Suziki from "../../assets/images/Suzuki.png";
import { Card, Col, Container, Row } from "react-bootstrap";

const cardetail = [
  {
    id: "RSN1",
    name: "suziky city",
    car_id: 14,
    image: Suziki,
  },
  {
    id: "RSN2",
    name: "honda city",
    car_id: 14,
    image: Suziki,
  },
  {
    id: "RSN3",
    name: "honda ",
    car_id: 14,
    image: Suziki,
  },
];

const CarDetailsPage = () => {
  const { id } = useParams();

 
  const selectedCarDetails = cardetail.filter(
    (car) => car.car_id === parseInt(id)
  );

  if (selectedCarDetails.length === 0) {
    return (
      <div className="h-100">
        <Container className="h-100 ">
          <Row className="text-center float-middle m-5">
            <h4 className="text-danger">Car not found</h4>
          </Row>
        </Container>
      </div>
    );
  }

 

  return (
    <>
      <div className="text-center mt-4">
        <h4>Selected Brand Details</h4>
        <Container>
          <Row>
            {selectedCarDetails.map((car) => (
              <Col key={car.id} lg={3} md={4} sm={6} className="mb-4">
                <Card>
                  <div className="text-center">
                    <h5>{car.id}</h5>
                    <h5>{car.name}</h5>
                    <img
                      src={car.image}
                      alt="/"
                      style={{ maxWidth: "200px" }}
                    />
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CarDetailsPage;
