import React from "react";
import "../../components/footer/footer.css";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="m-0  sticky-bottom">
      <div className="bg-dark text-white h-25 sticky-bottom m-0 ">
        <Row className=" text-center m-0 d-none ">
          <p className="text-primary">
            Welcome to <span className=" text-warning">RSNCARS</span>
          </p>
        </Row>
        <Row className=" text-center m-0">
          <Col lg={6} md={6} sm={12}>
            <p className="text-warning m-0 p-0"> Buy a Car at the Best Price</p>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <p className="m-0 p-0">contact:-9177386765 ,9963224715</p>
          </Col>
        </Row>
        <Row className="text-center float-center m-0">
          <p className="m-0 p-0">
            Design and Developed by @ R Venkateswarlu Full-Stack-Developer
          </p>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
