import React, { useState, useEffect, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import NAV from "../header/nav";
import Footer from "../footer/Footer";
import { AuthContext } from "../Auth/AuthContext"; // Adjust the path as needed

const SellCarForm = () => {
  const [carName, setCarName] = useState("");
  const [brand, setBrand] = useState("");
  const [brands, setBrands] = useState([]);
  const [model, setModel] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [insurance, setInsurance] = useState("");
  const [carImage, setCarImage] = useState(null);
  const [contactNumber, setContactNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const fetchBrands = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("No token found");
        return;
      }

      try {
        const response = await fetch("http://localhost:3001/api/brands", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch brands");
        }
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    if (isAuthenticated) {
      fetchBrands();
    }
  }, [isAuthenticated]);

  const handleImageChange = (e) => {
    setCarImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const carData = {
      carName,
      brand,
      model,
      fuelType,
      insurance,
      contactNumber,
      ownerName,
      carImage: carImage ? URL.createObjectURL(carImage) : null,
    };
    localStorage.setItem("carData", JSON.stringify(carData));
    alert("Car details saved successfully!");
  };

  return (
    <>
      <NAV />
      <Container className="mt-4">
        <h2 className="text-center mb-4">Sell Your Car</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="carName" className="mb-3">
                <Form.Label>Car Name</Form.Label>
                <Form.Control
                  type="text"
                  value={carName}
                  onChange={(e) => setCarName(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="brand" className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  as="select"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                >
                  <option value="">Select a brand</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="model" className="mb-3">
                <Form.Label>Model</Form.Label>
                <Form.Control
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="fuelType" className="mb-3">
                <Form.Label>Fuel Type</Form.Label>
                <Form.Control
                  type="text"
                  value={fuelType}
                  onChange={(e) => setFuelType(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="insurance" className="mb-3">
                <Form.Label>Insurance</Form.Label>
                <Form.Control
                  type="text"
                  value={insurance}
                  onChange={(e) => setInsurance(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="contactNumber" className="mb-3">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="ownerName" className="mb-3">
                <Form.Label>Owner Name</Form.Label>
                <Form.Control
                  type="text"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="carImage" className="mb-3">
                <Form.Label>Car Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleImageChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default SellCarForm;
