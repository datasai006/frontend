import React, { useState } from "react";
import "../../src/components/cars1.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import nissan from "../assets/images/Nissan.png";
import abarth from "../assets/images/abarth.png";
import Audi from "../assets/images/Audi.png";
import BMW from "../assets/images/BMW.png";
import honda from "../assets/images/honda.png";
import Toyoto from "../assets/images/Toyota.png";
import Volvo from "../assets/images/Volvo.png";
import Skoda from "../assets/images/Skoda.png";
import Hyundai from "../assets/images/Hyundai.png";
import Aston from "../assets/images/Aston.png";
import Ferrai from "../assets/images/Ferrari.png";
import Infinite from "../assets/images/infinity.png";
import Tesla from "../assets/images/Tesla.png";
import Suziki from "../assets/images/Suzuki.png";
import Acura from "../assets/images/Acura.png";
import Alfarromeo from "../assets/images/alfaromeo.png";
import Bently from "../assets/images/bentley.png";
import Buick from "../assets/images/Buick.png";
import Footer from "./footer/Footer";

export const carData = [
  { id: 1, name: "Abarth", image: abarth },
  { id: 2, name: "Acura", image: Acura },
  { id: 3, name: "Alfarromeo", image: Alfarromeo },
  { id: 4, name: "Aston", image: Aston },
  { id: 5, name: "AUDI", image: Audi },
  { id: 6, name: "Bently", image: Bently },
  { id: 7, name: "BMW", image: BMW },
  { id: 8, name: "Buick", image: Buick },
  { id: 9, name: "Hyundai", image: Hyundai },
  { id: 10, name: "Ferrai", image: Ferrai },
  { id: 11, name: "Infinite", image: Infinite },
  { id: 12, name: "Nissan", image: nissan },
  { id: 13, name: "Tesla", image: Tesla },
  { id: 14, name: "Suziki", image: Suziki },
  { id: 15, name: "Skoda", image: Skoda },
  { id: 16, name: "Toyoto", image: Toyoto },
];

const Cars1 = () => {
  return (
    <div>
      <div className="text-center ">
        <h3>SELECT YOUR BRAND</h3>
      </div>
      <Container className="m-0">
        <Row className="m-2 p-3 ">
          {carData.map((car) => (
            <Col key={car.id} lg={3} md={4} sm={6}>
              <Link to={`/car/${car.id}`}>
                <img className="image_nissan" alt="/" src={car.image} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="m-0 d-none">
        <Row>
          <h4>Still Updates are going on </h4>
        </Row>
      </Container>
   
    </div>
  );
};

export default Cars1;
