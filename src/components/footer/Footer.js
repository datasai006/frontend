import React from "react";
import "../../components/footer/footer.css";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="m-0  sticky-bottom">
      <div className="bg-dark text-white  sticky-bottom m-0 ">
        <Row className=" text-center m-0 ">
          <h4 className="text-primary">Welcome to Rsncars</h4>
        </Row>
        <Row className="m-3 text-center m-0">
          <Col lg={6} md={6} sm={12}>
            <h4> Buy a Car at the Best Price</h4>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h4>contact:-9177386765 ,9963224715 , 9550262808</h4>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
