import React from "react";
import { useParams } from "react-router-dom";
import { carData } from "../../components/Cars1";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../footer/Footer";

const cardetail = [
  {
    id: 1,
    name: "suziky city",
    car_id: 14,
    image: "image.png",
  },
  {
    id: 2,
    name: "honda city",
    car_id: 14,
    image: "image.png",
  },
  {
    id: 3,
    name: "honda ",
    car_id: 14,
    image: "image.png",
  },
];

const CarDetailsPage = () => {
  const { id } = useParams();

  // Find all car details with the same car_id
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

  // Extract the names of the related car details
  const relatedCarNames = selectedCarDetails.map((car) => car.name);

  // Find all cars from carData that match the names of the related car details
  const relatedCars = carData.filter((car) =>
    relatedCarNames.includes(car.name)
  );

  return (
    <>
      <div className="text-center mt-4">
        <h4>Selected Brand Details</h4>
        <Container>
          <Row>
            {selectedCarDetails.map((car) => (
              <Col key={car.id} lg={3} md={4} sm={6} className="mb-4">
                <div className="text-center">
                  <h5>{car.name}</h5>
                  <img src={car.image} alt="/" style={{ maxWidth: "200px" }} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="h-100 mt-4">
        <Container>
          <Row>
            {relatedCars.map((car) => (
              <Col key={car.id} lg={3} md={4} sm={6} className="mb-4">
                <div className="text-center">
                  <h4>{car.name}</h4>
                  <img src={car.image} alt="/" style={{ maxWidth: "200px" }} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CarDetailsPage;
