import React from "react";
import { Link, useParams } from "react-router-dom";
import Suziki from "../../assets/images/Suzuki.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../home/CarDetailsApp.css";
import NAV from "../header/nav";
import Footer from "../footer/Footer";

const cardetail = [
  {
    id: "RSN1",
    name: "Suzuki City",
    car_id: 14,
    image: Suziki,
  },
  {
    id: "RSN2",
    name: "Honda City",
    car_id: 14,
    image: Suziki,
  },
  {
    id: "RSN3",
    name: "Honda",
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

  const handleCarClick = (car) => {
    localStorage.setItem("selectedCar", JSON.stringify(car));
    // Navigate to CarListPage
    window.location.href = `/carlist/${car.car_id}`;
  };

  return (
    <>
      <NAV />
      <div className="text-center mt-4">
        <h4>Select a car to get Details</h4>
        <Container>
          <Row className="m-0">
            {selectedCarDetails.map((car) => (
              <Col key={car.id} lg={3} md={3} sm={12} xs={12} className="ml-1">
                <Link
                  to={`/carlist/${car.id}`}
                  onClick={() => handleCarClick(car)}
                >
                  <Card className="text-dark">
                    <div className="text-center">
                      <h5>{car.id}</h5>
                      <h5>{car.name}</h5>
                      <img
                        src={car.image}
                        alt={car.name}
                        style={{ maxWidth: "200px" }}
                      />
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default CarDetailsPage;
