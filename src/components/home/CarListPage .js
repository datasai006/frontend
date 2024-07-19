// import React, { useEffect, useState } from "react";
// import { Card, Col, Container, Row } from "react-bootstrap";
// import Footer from "../footer/Footer";
// import NAV from "../header/nav";

// const CarListPage = () => {
//   const [selectedCar, setSelectedCar] = useState(null);

//   useEffect(() => {
//     const car = JSON.parse(localStorage.getItem("carData"));
//     setSelectedCar(car);
//   }, []);

//   if (!selectedCar) {
//     return (
//       <Container className="mt-4">
//         <Row>
//           <Col>
//             <h4 className="text-center">No car selected</h4>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }

//   return (
//     <>
//       <NAV />
//       <Container>
//         <Row className="mt-4">
//           <Col lg={5} md={6} sm={12} xs={12}>
//             <Card className="text-dark mb-3">
//               <Card.Body className="text-center">
//                 <h5 className="ven">{selectedCar.carName}</h5>
//                 <div className="car-images">
//                   <img
//                     src={selectedCar.carImages.front}
//                     alt="Front View"
//                     style={{ maxWidth: "100%", marginBottom: "10px" }}
//                   />
//                   <img
//                     src={selectedCar.carImages.side}
//                     alt="Side View"
//                     style={{ maxWidth: "100%", marginBottom: "10px" }}
//                   />
//                   <img
//                     src={selectedCar.carImages.back}
//                     alt="Back View"
//                     style={{ maxWidth: "100%", marginBottom: "10px" }}
//                   />
//                   <img
//                     src={selectedCar.carImages.left}
//                     alt="Left View"
//                     style={{ maxWidth: "100%", marginBottom: "10px" }}
//                   />
//                   <img
//                     src={selectedCar.carImages.right}
//                     alt="Right View"
//                     style={{ maxWidth: "100%", marginBottom: "10px" }}
//                   />
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col lg={7} md="6" sm={12} xs={12}>
//             <Card className="text-dark mb-3">
//               <Card.Body>
//                 <h4 className="text-center">Car Details</h4>
//                 <p>
//                   <strong>Car Name:</strong> {selectedCar.carName}
//                 </p>
//                 <p>
//                   <strong>Brand:</strong> {selectedCar.brand}
//                 </p>
//                 <p>
//                   <strong>Model:</strong> {selectedCar.model}
//                 </p>
//                 <p>
//                   <strong>Fuel Type:</strong> {selectedCar.fuelType}
//                 </p>
//                 <p>
//                   <strong>Insurance:</strong> {selectedCar.insurance}
//                 </p>
//                 <p>
//                   <strong>Price:</strong> ₹{selectedCar.price}
//                 </p>
//                 <p>
//                   <strong>Track:</strong> {selectedCar.track}
//                 </p>
//                 <p>
//                   <strong>Contact Number:</strong> {selectedCar.contactNumber}
//                 </p>
//                 <p>
//                   <strong>Owner Name:</strong> {selectedCar.ownerName}
//                 </p>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default CarListPage;


// import React, { useEffect, useState } from "react";
// import { Card, Col, Container, Row, Image } from "react-bootstrap";
// import Footer from "../footer/Footer";
// import NAV from "../header/nav";

// const CarListPage = () => {
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [mainImage, setMainImage] = useState("");
//   const [mainImageAlt, setMainImageAlt] = useState("");

//   useEffect(() => {
//     const carData = JSON.parse(localStorage.getItem("carData"));
//     if (carData) {
//       setSelectedCar(carData);
//       setMainImage(carData.carImages.front); // Set initial main image
//       setMainImageAlt("Front View");
//     }
//   }, []);

//   const handleThumbnailClick = (image, altText) => {
//     setMainImage(image);
//     setMainImageAlt(altText);
//   };

//   if (!selectedCar) {
//     return (
//       <Container className="mt-4">
//         <Row>
//           <Col>
//             <h4 className="text-center">No car selected</h4>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }

//   return (
//     <>
//       <NAV />
//       <Container>
//         <Row className="mt-4">
//           <Col lg={7} md={6} sm={12} xs={12}>
//             <Card className="text-dark mb-3">
//               <Card.Body className="text-center">
//                 <h5 className="ven">{selectedCar.carName}</h5>
//                 <Image
//                   src={mainImage}
//                   alt={mainImageAlt}
//                   fluid
//                   style={{ maxWidth: "100%", marginBottom: "10px" }}
//                 />
//                 <div className="thumbnail-gallery d-flex justify-content-center">
//                   <Image
//                     src={selectedCar.carImages.front}
//                     alt="Front View"
//                     thumbnail
//                     onClick={() =>
//                       handleThumbnailClick(
//                         selectedCar.carImages.front,
//                         "Front View"
//                       )
//                     }
//                     style={{ cursor: "pointer", margin: "5px" }}
//                   />
//                   <Image
//                     src={selectedCar.carImages.side}
//                     alt="Side View"
//                     thumbnail
//                     onClick={() =>
//                       handleThumbnailClick(
//                         selectedCar.carImages.side,
//                         "Side View"
//                       )
//                     }
//                     style={{ cursor: "pointer", margin: "5px" }}
//                   />
//                   <Image
//                     src={selectedCar.carImages.back}
//                     alt="Back View"
//                     thumbnail
//                     onClick={() =>
//                       handleThumbnailClick(
//                         selectedCar.carImages.back,
//                         "Back View"
//                       )
//                     }
//                     style={{ cursor: "pointer", margin: "5px" }}
//                   />
//                   <Image
//                     src={selectedCar.carImages.left}
//                     alt="Left View"
//                     thumbnail
//                     onClick={() =>
//                       handleThumbnailClick(
//                         selectedCar.carImages.left,
//                         "Left View"
//                       )
//                     }
//                     style={{ cursor: "pointer", margin: "5px" }}
//                   />
//                   <Image
//                     src={selectedCar.carImages.right}
//                     alt="Right View"
//                     thumbnail
//                     onClick={() =>
//                       handleThumbnailClick(
//                         selectedCar.carImages.right,
//                         "Right View"
//                       )
//                     }
//                     style={{ cursor: "pointer", margin: "5px" }}
//                   />
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col lg={5} md="6" sm={12} xs={12}>
//             <Card className="text-dark mb-3">
//               <Card.Body>
//                 <h4 className="text-center">Car Details</h4>
//                 <p>
//                   <strong>Car Name:</strong> {selectedCar.carName}
//                 </p>
//                 <p>
//                   <strong>Brand:</strong> {selectedCar.brand}
//                 </p>
//                 <p>
//                   <strong>Model:</strong> {selectedCar.model}
//                 </p>
//                 <p>
//                   <strong>Fuel Type:</strong> {selectedCar.fuelType}
//                 </p>
//                 <p>
//                   <strong>Insurance:</strong> {selectedCar.insurance}
//                 </p>
//                 <p>
//                   <strong>Price:</strong> ₹{selectedCar.price}
//                 </p>
//                 <p>
//                   <strong>Track:</strong> {selectedCar.track}
//                 </p>
//                 <p>
//                   <strong>Contact Number:</strong> {selectedCar.contactNumber}
//                 </p>
//                 <p>
//                   <strong>Owner Name:</strong> {selectedCar.ownerName}
//                 </p>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default CarListPage;


import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Image,
  Modal,
} from "react-bootstrap";
import Footer from "../footer/Footer";
import NAV from "../header/nav";
import Carousel from "react-bootstrap/Carousel";

const CarListPage = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [mainImageAlt, setMainImageAlt] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const carData = JSON.parse(localStorage.getItem("carData"));
    if (carData) {
      setSelectedCar(carData);
      setMainImage(carData.carImages.front); // Set initial main image
      setMainImageAlt("Front View");
    }
  }, []);

  const handleThumbnailClick = (image, altText) => {
    setMainImage(image);
    setMainImageAlt(altText);
  };

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
    <>
      <NAV />
      <Container>
        <Row className="mt-4">
          <Col lg={7} md={6} sm={12} xs={12}>
            <Card className="text-dark mb-3">
              <Card.Body className="text-center">
                <h5 className="ven">{selectedCar.carName}</h5>
                <Image
                  src={mainImage}
                  alt={mainImageAlt}
                  fluid
                  style={{
                    maxWidth: "100%",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                  onClick={handleImageClick}
                />
                <div className="thumbnail-gallery d-flex justify-content-center">
                  <Image
                    src={selectedCar.carImages.front}
                    alt="Front View"
                    thumbnail
                    onClick={() =>
                      handleThumbnailClick(
                        selectedCar.carImages.front,
                        "Front View"
                      )
                    }
                    style={{ cursor: "pointer", margin: "5px" }}
                  />
                  <Image
                    src={selectedCar.carImages.side}
                    alt="Side View"
                    thumbnail
                    onClick={() =>
                      handleThumbnailClick(
                        selectedCar.carImages.side,
                        "Side View"
                      )
                    }
                    style={{ cursor: "pointer", margin: "5px" }}
                  />
                  <Image
                    src={selectedCar.carImages.back}
                    alt="Back View"
                    thumbnail
                    onClick={() =>
                      handleThumbnailClick(
                        selectedCar.carImages.back,
                        "Back View"
                      )
                    }
                    style={{ cursor: "pointer", margin: "5px" }}
                  />
                  <Image
                    src={selectedCar.carImages.left}
                    alt="Left View"
                    thumbnail
                    onClick={() =>
                      handleThumbnailClick(
                        selectedCar.carImages.left,
                        "Left View"
                      )
                    }
                    style={{ cursor: "pointer", margin: "5px" }}
                  />
                  <Image
                    src={selectedCar.carImages.right}
                    alt="Right View"
                    thumbnail
                    onClick={() =>
                      handleThumbnailClick(
                        selectedCar.carImages.right,
                        "Right View"
                      )
                    }
                    style={{ cursor: "pointer", margin: "5px" }}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={5} md="6" sm={12} xs={12}>
            <Card className="text-dark mb-3">
              <Card.Body>
                <h4 className="text-center">Car Details</h4>
                <p>
                  <strong>Car Name:</strong> {selectedCar.carName}
                </p>
                <p>
                  <strong>Brand:</strong> {selectedCar.brand}
                </p>
                <p>
                  <strong>Model:</strong> {selectedCar.model}
                </p>
                <p>
                  <strong>Fuel Type:</strong> {selectedCar.fuelType}
                </p>
                <p>
                  <strong>Insurance:</strong> {selectedCar.insurance}
                </p>
                <p>
                  <strong>Price:</strong> ₹{selectedCar.price}
                </p>
                <p>
                  <strong>Track:</strong> {selectedCar.track}
                </p>
                <p>
                  <strong>Contact Number:</strong> {selectedCar.contactNumber}
                </p>
                <p>
                  <strong>Owner Name:</strong> {selectedCar.ownerName}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedCar.carName} - {mainImageAlt}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={selectedCar.carImages.front}
                alt="Front View"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={selectedCar.carImages.side}
                alt="Side View"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={selectedCar.carImages.back}
                alt="Back View"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={selectedCar.carImages.left}
                alt="Left View"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={selectedCar.carImages.right}
                alt="Right View"
              />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CarListPage;
