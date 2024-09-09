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

// import React, { useEffect, useState } from "react";
// import { Card, Col, Container, Row, Image, Modal } from "react-bootstrap";
// import Footer from "../footer/Footer";
// import NAV from "../header/nav";
// import Carousel from "react-bootstrap/Carousel";

// const CarListPage = () => {
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [mainImage, setMainImage] = useState("");
//   const [mainImageAlt, setMainImageAlt] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const carData = JSON.parse(localStorage.getItem("selectedCar"));
//     if (selectedCar) {
//       setSelectedCar(selectedCar);
//       setMainImage(selectedCar.carImages.front); // Set initial main image
//       setMainImageAlt("Front View");
//     }
//   }, []);

//   const handleThumbnailClick = (image, altText) => {
//     setMainImage(image);
//     setMainImageAlt(altText);
//   };

//   const handleImageClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
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
//                   style={{
//                     maxWidth: "100%",
//                     marginBottom: "10px",
//                     cursor: "pointer",
//                   }}
//                   onClick={handleImageClick}
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

//       <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {selectedCar.carName} - {mainImageAlt}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Carousel>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={selectedCar.carImages.front}
//                 alt="Front View"
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={selectedCar.carImages.side}
//                 alt="Side View"
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={selectedCar.carImages.back}
//                 alt="Back View"
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={selectedCar.carImages.left}
//                 alt="Left View"
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={selectedCar.carImages.right}
//                 alt="Right View"
//               />
//             </Carousel.Item>
//           </Carousel>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default CarListPage;

// import React, { useEffect, useState } from "react";
// import { Card, Col, Container, Row, Image, Modal } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// // import Footer from "../footer/Footer";
// import NAV from "../header/nav";
// import "../home/CarDetailsApp.css";

// const CarListPage = () => {
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [isPaid, setIsPaid] = useState(false);
//   const [mainImage, setMainImage] = useState("");
//   const [mainImageAlt, setMainImageAlt] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();
//   const handleThumbnailClick = (image, altText) => {
//     setMainImage(image);
//     setMainImageAlt(altText);
//   };
//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   useEffect(() => {
//     const token = sessionStorage.getItem("authToken");
//     const expiryTime = sessionStorage.getItem("authTokenExpiry");

//     if (!token || Date.now() > Number(expiryTime)) {
//       navigate("/login");
//       return;
//     }

//     const carData = JSON.parse(localStorage.getItem("selectedCar"));
//     if (carData) {
//       setSelectedCar(carData);
//       setMainImage(carData.image);
//       setMainImageAlt("Front View");
//     } else {
//       navigate("/"); // Redirect if no car is selected
//     }

//     const paymentStatus = sessionStorage.getItem("isPaid");
//     setIsPaid(paymentStatus === "true");
//   }, [navigate]);

//   const handlePayment = () => {
//     const options = {
//       key: process.env.REACT_APP_RAZORPAY_KEY,
//       amount: 10000, // Amount in paise (100 INR)
//       currency: "INR",
//       name: "Car Details",
//       description: "Payment for car details",
//       handler: function (response) {
//         setIsPaid(true);
//         sessionStorage.setItem("isPaid", "true");
//         alert("Payment Successful!");
//       },
//       prefill: {
//         name: "Your Name",
//         email: "youremail@example.com",
//         contact: "9999999999",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
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
//             <Card className={`text-dark mb-3 `}>
//               <Card.Body className="text-center">
//                 <h5 className="ven">{selectedCar.name}</h5>
//                 <Image
//                   src={mainImage}
//                   alt={mainImageAlt}
//                   fluid
//                   style={{
//                     maxWidth: "100%",
//                     marginBottom: "10px",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => setShowModal(true)}
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
//                 <h4 className="text-center mb-4">Car Details</h4>

//                 <div className="details-list">
//                   <div className="detail-item">
//                     <strong>Car Name:</strong>
//                     <span>{selectedCar.name}</span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Brand:</strong>
//                     <span>{selectedCar.brand || "Suzuki"}</span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Model:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.model || "City"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Fuel Type:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.fuelType || "Petrol"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Insurance:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.insurance || "Yes"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Price:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       ₹{selectedCar.price || "10,00,000"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Track:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.track || "On Track"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Contact Number:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.contactNumber || "9999999999"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Owner Name:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.ownerName || "John Doe"}
//                     </span>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>
//             {!isPaid && (
//               <button className="btn btn-primary" onClick={handlePayment}>
//                 Show Details (₹100)
//               </button>
//             )}
//           </Col>
//         </Row>
//       </Container>
//       {/* <Footer /> */}

//       <Modal
//         show={showModal}
//         onHide={() => setShowModal(false)}
//         size="lg"
//         centered
//       ></Modal>
//     </>
//   );
// };

// export default CarListPage;

// import React, { useEffect, useState } from "react";
// import { Card, Col, Container, Row, Image, Modal } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// // import Footer from "../footer/Footer";
// import NAV from "../header/nav";
// import "../home/CarDetailsApp.css";

// const CarListPage = () => {
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [isPaid, setIsPaid] = useState(false);
//   const [mainImage, setMainImage] = useState("");
//   const [mainImageAlt, setMainImageAlt] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   const handleThumbnailClick = (image, altText) => {
//     setMainImage(image);
//     setMainImageAlt(altText);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   useEffect(() => {
//     const token = sessionStorage.getItem("authToken");
//     const expiryTime = sessionStorage.getItem("authTokenExpiry");

//     if (!token || Date.now() > Number(expiryTime)) {
//       navigate("/login");
//       return;
//     }

//     const carData = JSON.parse(localStorage.getItem("selectedCar"));
//     if (carData) {
//       setSelectedCar(carData);
//       setMainImage(carData.image);
//       setMainImageAlt("Front View");
//       console.log(carData);
//     } else {
//       navigate("/"); // Redirect if no car is selected
//     }

//     const paymentStatus = sessionStorage.getItem("isPaid");
//     setIsPaid(paymentStatus === "true");
//   }, [navigate]);

//   const handlePayment = () => {
//     const options = {
//       key: process.env.REACT_APP_RAZORPAY_KEY,
//       amount: 10000, // Amount in paise (100 INR)
//       currency: "INR",
//       name: "Car Details",
//       description: "Payment for car details",
//       handler: function (response) {
//         setIsPaid(true);
//         sessionStorage.setItem("isPaid", "true");
//         alert("Payment Successful!");
//       },
//       prefill: {
//         name: "Your Name",
//         email: "youremail@example.com",
//         contact: "9999999999",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
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
//             <Card className={`text-dark mb-3`}>
//               <Card.Body className="text-center">
//                 <h5 className="ven">{selectedCar.name}</h5>
//                 <Image
//                   src={mainImage}
//                   alt={mainImageAlt}
//                   fluid
//                   style={{
//                     maxWidth: "100%",
//                     marginBottom: "10px",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => setShowModal(true)}
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
//                 <h4 className="text-center mb-4">Car Details</h4>

//                 <div className="details-list">
//                   <div className="detail-item">
//                     <strong>Car Name:</strong>
//                     <span>{selectedCar.name}</span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Brand:</strong>
//                     <span>{selectedCar.brand || "Suzuki"}</span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Model:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.model || "City"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Fuel Type:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.fuelType || "Petrol"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Insurance:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.insurance || "Yes"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Price:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       ₹{selectedCar.price || "10,00,000"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Track:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.track || "On Track"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Contact Number:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.contactNumber || "9999999999"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Owner Name:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.ownerName || "John Doe"}
//                     </span>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>
//             {!isPaid && (
//               <button className="btn btn-primary" onClick={handlePayment}>
//                 Show Details (₹100)
//               </button>
//             )}
//           </Col>
//         </Row>
//       </Container>
//       {/* <Footer /> */}

//       <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
//         <Modal.Body>
//           <Image
//             src={mainImage}
//             alt={mainImageAlt}
//             fluid
//             style={{ maxWidth: "100%" }}
//           />
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default CarListPage;

// import React, { useEffect, useState } from "react";
// import { Card, Col, Container, Row, Image, Modal } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import NAV from "../header/nav"; // Ensure this path is correct
// import "../home/CarDetailsApp.css"; // Ensure this CSS file exists

// const CarListPage = () => {
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [isPaid, setIsPaid] = useState(false);
//   const [mainImage, setMainImage] = useState("");
//   const [mainImageAlt, setMainImageAlt] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   const handleThumbnailClick = (image, altText) => {
//     setMainImage(image);
//     setMainImageAlt(altText);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   useEffect(() => {
//     // const token = sessionStorage.getItem("authToken");
//     // const expiryTime = sessionStorage.getItem("authTokenExpiry");

//     // if (!token || Date.now() > Number(expiryTime)) {
//     //   navigate("/login");
//     //   return;
//     // }

//     const carData = JSON.parse(localStorage.getItem("selectedCar"));
//     if (carData) {
//       setSelectedCar(carData);
//       setMainImage(carData.image);
//       setMainImageAlt("Front View");
//       console.log(carData);
//     } else {
//       navigate("/"); // Redirect if no car is selected
//     }

//     const paymentStatus = sessionStorage.getItem("isPaid");
//     setIsPaid(paymentStatus === "true");
//   }, [navigate]);

//   const handlePayment = () => {
//     const options = {
//       key: process.env.REACT_APP_RAZORPAY_KEY,
//       amount: 10000, // Amount in paise (100 INR)
//       currency: "INR",
//       name: "Car Details",
//       description: "Payment for car details",
//       handler: function (response) {
//         setIsPaid(true);
//         sessionStorage.setItem("isPaid", "true");
//         alert("Payment Successful!");
//       },
//       prefill: {
//         name: "Your Name",
//         email: "youremail@example.com",
//         contact: "9999999999",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
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
//             <Card className={`text-dark mb-3`}>
//               <Card.Body className="text-center">
//                 <h5 className="ven">{selectedCar.name}</h5>
//                 <Image
//                   src={mainImage}
//                   alt={mainImageAlt}
//                   fluid
//                   style={{
//                     maxWidth: "100%",
//                     marginBottom: "10px",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => setShowModal(true)}
//                 />
//                 <div className="thumbnail-gallery d-flex justify-content-center">
//                   {/* <Image
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
//                   /> */}
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col lg={5} md="6" sm={12} xs={12}>
//             <Card className="text-dark mb-3">
//               <Card.Body>
//                 <h4 className="text-center mb-4">Car Details</h4>

//                 <div className="details-list">
//                   <div className="detail-item">
//                     <strong>Car Name:</strong>
//                     <span>{selectedCar.name}</span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Brand:</strong>
//                     <span>{selectedCar.brand || "Suzuki"}</span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Model:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.model || "City"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Fuel Type:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.fuelType || "Petrol"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Insurance:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.insurance || "Yes"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Price:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       ₹{selectedCar.price || "10,00,000"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Track:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.track || "On Track"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Contact Number:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.contactNumber || "9999999999"}
//                     </span>
//                   </div>

//                   <div className="detail-item">
//                     <strong>Owner Name:</strong>
//                     <span className={!isPaid ? "blurred" : ""}>
//                       {selectedCar.ownerName || "John Doe"}
//                     </span>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>
//             {!isPaid && (
//               <button className="btn btn-primary" onClick={handlePayment}>
//                 Show Details (₹100)
//               </button>
//             )}
//           </Col>
//         </Row>
//       </Container>

//       <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
//         <Modal.Body>
//           <Image
//             src={mainImage}
//             alt={mainImageAlt}
//             fluid
//             style={{ maxWidth: "100%" }}
//           />
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default CarListPage;

import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Image, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NAV from "../header/nav"; // Ensure this path is correct
import "../home/CarDetailsApp.css"; // Ensure this CSS file exists

const CarListPage = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [mainImage, setMainImage] = useState("");
  const [mainImageAlt, setMainImageAlt] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // const token = sessionStorage.getItem("authToken");
    // const expiryTime = sessionStorage.getItem("authTokenExpiry");

    // if (!token || Date.now() > Number(expiryTime)) {
    //   navigate("/login");
    //   return;
    // }

    const carData = JSON.parse(localStorage.getItem("selectedCar"));
    if (carData) {
      setSelectedCar(carData);
      setMainImage(carData.image);
      setMainImageAlt("Front View");
      console.log(carData);
    } else {
      navigate("/"); // Redirect if no car is selected
    }

    const paymentStatus = sessionStorage.getItem("isPaid");
    setIsPaid(paymentStatus === "true");
  }, [navigate]);

  const handleThumbnailClick = (image, altText) => {
    setMainImage(image);
    setMainImageAlt(altText);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePayment = () => {
    const options = {
      key: "mysecretkey",
      amount: 10000,
      currency: "INR",
      name: "Car Details",
      description: "Payment for car details",
      handler: function (response) {
        setIsPaid(true);
        sessionStorage.setItem("isPaid", "true");
        alert("Payment Successful!");
      },
      prefill: {
        name: "Your Name",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
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
                <h5 className="ven">{selectedCar.name}</h5>
                <Image
                  src={mainImage}
                  alt={mainImageAlt}
                  fluid
                  style={{
                    maxWidth: "100%",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowModal(true)}
                />
                <div className="thumbnail-gallery d-flex justify-content-center">
                  {selectedCar.carImages &&
                    Object.keys(selectedCar.carImages).map((key) => (
                      <Image
                        key={key}
                        src={selectedCar.carImages[key]}
                        alt={`${key} View`}
                        thumbnail
                        onClick={() =>
                          handleThumbnailClick(
                            selectedCar.carImages[key],
                            `${key.charAt(0).toUpperCase() + key.slice(1)} View`
                          )
                        }
                        style={{ cursor: "pointer", margin: "5px" }}
                      />
                    ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={5} md="6" sm={12} xs={12}>
            <Card className="text-dark mb-3">
              <Card.Body>
                <h4 className="text-center mb-4">Car Details</h4>

                <div className="details-list">
                  {[
                    { label: "Car Name", value: selectedCar.name },
                    { label: "Brand", value: selectedCar.brand || "Suzuki" },
                    { label: "Model", value: selectedCar.model || "City" },
                    {
                      label: "Fuel Type",
                      value: selectedCar.fuelType || "Petrol",
                    },
                    {
                      label: "Insurance",
                      value: selectedCar.insurance || "Yes",
                    },
                    {
                      label: "Price",
                      value: `₹${selectedCar.price || "10,00,000"}`,
                    },
                    { label: "Track", value: selectedCar.track || "On Track" },
                    {
                      label: "Contact Number",
                      value: selectedCar.contactNumber || "9999999999",
                    },
                    {
                      label: "Owner Name",
                      value: selectedCar.ownerName || "John Doe",
                    },
                  ].map(({ label, value }) => (
                    <div key={label} className="detail-item">
                      <strong>{label}:</strong>
                      <span className={!isPaid ? "blurred" : ""}>{value}</span>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
            {!isPaid && (
              <button className="btn btn-primary" onClick={handlePayment}>
                Show Details (₹100)
              </button>
            )}
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Body>
          <Image
            src={mainImage}
            alt={mainImageAlt}
            fluid
            style={{ maxWidth: "100%" }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CarListPage;
