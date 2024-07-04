import React from "react";
import "../../components/footer/footer.css";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="m-0  sticky-bottom">
      <div className="bg-dark text-white  sticky-bottom m-0 ">
        <Row className=" text-center m-0 d-none ">
          <h4 className="text-primary">
            Welcome to <span className=" text-warning">RSNCARS</span>
          </h4>
        </Row>
        <Row className=" text-center m-0">
          <Col lg={6} md={6} sm={12}>
            <h4 className="text-warning"> Buy a Car at the Best Price</h4>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h4>contact:-9177386765 ,9963224715</h4>
          </Col>
        </Row>
        <Row className="text-center float-center m-0">
          <h5>
            Design and Developed by @ R Venkateswarlu Full-Stack-Developer
          </h5>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
