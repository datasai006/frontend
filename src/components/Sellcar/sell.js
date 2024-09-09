// import React, { useState, useEffect, useContext } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import NAV from "../header/nav";
// import Footer from "../footer/Footer";
// import { AuthContext } from "../Auth/AuthContext";

// const SellCarForm = () => {
//   const [carName, setCarName] = useState("");
//   const [brand, setBrand] = useState("");
//   const [brands, setBrands] = useState([]);
//   const [model, setModel] = useState("");
//   const [fuelType, setFuelType] = useState("");
//   const [insurance, setInsurance] = useState("");
//   const [price, setPrice] = useState("");
//   const [track, setTrack] = useState("");
//   const [reading, setReading] = useState("");
//   const [carImages, setCarImages] = useState({
//     front: null,
//     side: null,
//     back: null,
//     left: null,
//     right: null,
//   });
//   const [contactNumber, setContactNumber] = useState("");
//   const [ownerName, setOwnerName] = useState("");
//   const { isAuthenticated } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchBrands = async () => {
//       const token = localStorage.getItem("authToken");
//       if (!token) {
//         console.error("No token found");
//         return;
//       }

//       try {
//         const response = await fetch("http://localhost:3001/api/brands", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (!response.ok) {
//           throw new Error("Failed to fetch brands");
//         }
//         const data = await response.json();
//         setBrands(data);
//       } catch (error) {
//         console.error("Error fetching brands:", error);
//       }
//     };

//     if (isAuthenticated) {
//       fetchBrands();
//     }
//   }, [isAuthenticated]);

//   const handleImageChange = (e) => {
//     const { name, files } = e.target;
//     setCarImages((prevImages) => ({
//       ...prevImages,
//       [name]: files[0],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const carData = {
//       carName,
//       brand,
//       model,
//       fuelType,
//       insurance,
//       price,
//       track,
//       reading,
//       contactNumber,
//       ownerName,
//       carImages: {
//         front: carImages.front ? URL.createObjectURL(carImages.front) : null,
//         side: carImages.side ? URL.createObjectURL(carImages.side) : null,
//         back: carImages.back ? URL.createObjectURL(carImages.back) : null,
//         left: carImages.left ? URL.createObjectURL(carImages.left) : null,
//         right: carImages.right ? URL.createObjectURL(carImages.right) : null,
//       },
//     };
//     localStorage.setItem("carData", JSON.stringify(carData));
//     alert("Car details saved successfully!");
//   };

//   return (
//     <>
//       <NAV />
//       <Container fluid className="mt-4">
//         <h2 className="text-center mb-4">Sell Your Car</h2>
//         <Form onSubmit={handleSubmit}>
//           <Row className="g-3">
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="carName" className="mb-3">
//                 <Form.Label>Car Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={carName}
//                   placeholder="Enter car name"
//                   onChange={(e) => setCarName(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="brand" className="mb-3">
//                 <Form.Label>Brand</Form.Label>
//                 <Form.Control
//                   as="select"
//                   value={brand}
//                   onChange={(e) => setBrand(e.target.value)}
//                   required
//                 >
//                   <option value="">Select a brand</option>
//                   {brands.map((brand) => (
//                     <option key={brand.id} value={brand.id}>
//                       {brand.name}
//                     </option>
//                   ))}
//                 </Form.Control>
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="model" className="mb-3">
//                 <Form.Label>Model</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={model}
//                   placeholder="2024"
//                   onChange={(e) => setModel(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="fuelType" className="mb-3">
//                 <Form.Label>Fuel Type</Form.Label>
//                 <Form.Control
//                   as="select"
//                   value={fuelType}
//                   onChange={(e) => setFuelType(e.target.value)}
//                   required
//                 >
//                   <option value="">Select fuel type</option>
//                   <option value="petrol">Petrol</option>
//                   <option value="diesel">Diesel</option>
//                   <option value="cng">CNG</option>
//                 </Form.Control>
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="insurance" className="mb-3">
//                 <Form.Label>Insurance</Form.Label>
//                 <Form.Control
//                   as="select"
//                   value={insurance}
//                   onChange={(e) => setInsurance(e.target.value)}
//                   required
//                 >
//                   <option value="">Select insurance status</option>
//                   <option value="live">Live</option>
//                   <option value="expire">Expire</option>
//                 </Form.Control>
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="price" className="mb-3">
//                 <Form.Label>Price</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={price}
//                   placeholder="Enter car price"
//                   onChange={(e) => setPrice(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="reading" className="mb-3">
//                 <Form.Label>Reading</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={reading}
//                   placeholder="Enter car reading"
//                   onChange={(e) => setReading(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="track" className="mb-3">
//                 <Form.Label>Track</Form.Label>
//                 <Form.Control
//                   as="select"
//                   value={track}
//                   onChange={(e) => setTrack(e.target.value)}
//                   required
//                 >
//                   <option value="">Select track</option>
//                   <option value="showroom">Showroom</option>
//                   <option value="not-showroom">Not Showroom</option>
//                 </Form.Control>
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="contactNumber" className="mb-3">
//                 <Form.Label>Contact Number</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={contactNumber}
//                   placeholder="Enter contact number"
//                   onChange={(e) => setContactNumber(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="ownerName" className="mb-3">
//                 <Form.Label>Owner Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={ownerName}
//                   placeholder="Enter owner name"
//                   onChange={(e) => setOwnerName(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="carImageFront" className="mb-3">
//                 <Form.Label>Car Image (Front)</Form.Label>
//                 <Form.Control
//                   type="file"
//                   name="front"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="carImageSide" className="mb-3">
//                 <Form.Label>Car Image (Side)</Form.Label>
//                 <Form.Control
//                   type="file"
//                   name="side"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="carImageBack" className="mb-3">
//                 <Form.Label>Car Image (Back)</Form.Label>
//                 <Form.Control
//                   type="file"
//                   name="back"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="carImageLeft" className="mb-3">
//                 <Form.Label>Car Image (Left)</Form.Label>
//                 <Form.Control
//                   type="file"
//                   name="left"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="carImageRight" className="mb-3">
//                 <Form.Label>Car Image (Right)</Form.Label>
//                 <Form.Control
//                   type="file"
//                   name="right"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//           </Row>
//           <Button variant="primary" type="submit" className="w-100 mt-3">
//             Submit
//           </Button>
//         </Form>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default SellCarForm;

// import React, { useState, useEffect, useContext } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import NAV from "../header/nav";
// import Footer from "../footer/Footer";
// import { AuthContext } from "../Auth/AuthContext";
// import { useNavigate } from "react-router-dom";

// const SellCarForm = () => {
//   const [carName, setCarName] = useState("");
//   const [brand, setBrand] = useState("");
//   const [brands, setBrands] = useState([]);
//   const [model, setModel] = useState("");
//   const [fuelType, setFuelType] = useState("");
//   const [insurance, setInsurance] = useState("");
//   const [price, setPrice] = useState("");
//   const [track, setTrack] = useState("");
//   const [reading, setReading] = useState("");
//   const [carImages, setCarImages] = useState({
//     front: null,
//     side: null,
//     back: null,
//     left: null,
//     right: null,
//   });
//   const [contactNumber, setContactNumber] = useState("");
//   const [ownerName, setOwnerName] = useState("");
//   const { isAuthenticated } = useContext(AuthContext);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const fetchBrands = async () => {
//       const token = localStorage.getItem("authToken");
//       if (!token) {
//         console.error("No token found");
//         return;
//       }

//       try {
//         const response = await fetch("http://localhost:3001/api/brands", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (!response.ok) {
//           throw new Error("Failed to fetch brands");
//         }
//         const data = await response.json();
//         setBrands(data);
//       } catch (error) {
//         console.error("Error fetching brands:", error);
//       }
//     };

//     if (isAuthenticated) {
//       fetchBrands();
//     }
//   }, [isAuthenticated]);

//   const handleImageChange = (e) => {
//     const { name, files } = e.target;
//     setCarImages((prevImages) => ({
//       ...prevImages,
//       [name]: files[0],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("carName", carName);
//     formData.append("brand", brand);
//     formData.append("model", model);
//     formData.append("fuelType", fuelType);
//     formData.append("insurance", insurance);
//     formData.append("price", price);
//     formData.append("track", track);
//     formData.append("reading", reading);
//     formData.append("contactNumber", contactNumber);
//     formData.append("ownerName", ownerName);

//     Object.keys(carImages).forEach((key) => {
//       if (carImages[key]) {
//         formData.append(`carImages[${key}]`, carImages[key]);
//       }
//     });

//     try {
//       const token = localStorage.getItem("authToken");
//       if (!token) {
//         console.error("No token found");
//         return;
//       }

//       const response = await fetch("http://localhost:3001/api/sell-car", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit car details");
//       }

//       const data = await response.json();
//       alert("Successfully submitted data. Please wait for approval.");
//       console.log("data", data);

//       // Redirect to home page
//       navigate("/home");
//     } catch (error) {
//       console.error("Error submitting car details:", error);
//       alert("Failed to submit car details. Please try again.");
//     }
//   };

//   return (
//     <>
//       <NAV />
//       <Container fluid className="mt-4">
//         <h2 className="text-center mb-4">Sell Your Car</h2>
//         <Form onSubmit={handleSubmit}>
//           <Row className="g-3">
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="carName" className="mb-3">
//                 <Form.Label>Car Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={carName}
//                   placeholder="Enter car name"
//                   onChange={(e) => setCarName(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="brand" className="mb-3">
//                 <Form.Label>Brand</Form.Label>
//                 <Form.Control
//                   as="select"
//                   value={brand}
//                   onChange={(e) => setBrand(e.target.value)}
//                   required
//                 >
//                   <option value="">Select a brand</option>
//                   {brands.map((brand) => (
//                     <option key={brand.id} value={brand.id}>
//                       {brand.name}
//                     </option>
//                   ))}
//                 </Form.Control>
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="model" className="mb-3">
//                 <Form.Label>Model</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={model}
//                   placeholder="2024"
//                   onChange={(e) => setModel(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="fuelType" className="mb-3">
//                 <Form.Label>Fuel Type</Form.Label>
//                 <Form.Control
//                   as="select"
//                   value={fuelType}
//                   onChange={(e) => setFuelType(e.target.value)}
//                   required
//                 >
//                   <option value="">Select fuel type</option>
//                   <option value="petrol">Petrol</option>
//                   <option value="diesel">Diesel</option>
//                   <option value="cng">CNG</option>
//                 </Form.Control>
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="insurance" className="mb-3">
//                 <Form.Label>Insurance</Form.Label>
//                 <Form.Control
//                   as="select"
//                   value={insurance}
//                   onChange={(e) => setInsurance(e.target.value)}
//                   required
//                 >
//                   <option value="">Select insurance status</option>
//                   <option value="live">Live</option>
//                   <option value="expire">Expire</option>
//                 </Form.Control>
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="price" className="mb-3">
//                 <Form.Label>Price</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={price}
//                   placeholder="Enter car price"
//                   onChange={(e) => setPrice(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="reading" className="mb-3">
//                 <Form.Label>Reading</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={reading}
//                   placeholder="Enter car reading"
//                   onChange={(e) => setReading(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="track" className="mb-3">
//                 <Form.Label>Track</Form.Label>
//                 <Form.Control
//                   as="select"
//                   value={track}
//                   onChange={(e) => setTrack(e.target.value)}
//                   required
//                 >
//                   <option value="">Select track</option>
//                   <option value="showroom">Showroom</option>
//                   <option value="not-showroom">Not Showroom</option>
//                 </Form.Control>
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="contactNumber" className="mb-3">
//                 <Form.Label>Contact Number</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={contactNumber}
//                   placeholder="Enter contact number"
//                   onChange={(e) => setContactNumber(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="ownerName" className="mb-3">
//                 <Form.Label>Owner Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={ownerName}
//                   placeholder="Enter owner name"
//                   onChange={(e) => setOwnerName(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="carImageFront" className="mb-3">
//                 <Form.Label>Car Image (Front)</Form.Label>
//                 <Form.Control
//                   type="file"
//                   name="front"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="carImageSide" className="mb-3">
//                 <Form.Label>Car Image (Side)</Form.Label>
//                 <Form.Control
//                   type="file"
//                   name="side"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="carImageBack" className="mb-3">
//                 <Form.Label>Car Image (Back)</Form.Label>
//                 <Form.Control
//                   type="file"
//                   name="back"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="carImageLeft" className="mb-3">
//                 <Form.Label>Car Image (Left)</Form.Label>
//                 <Form.Control
//                   type="file"
//                   name="left"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col xs={12} md={6} lg={4}>
//               <Form.Group controlId="carImageRight" className="mb-3">
//                 <Form.Label>Car Image (Right)</Form.Label>
//                 <Form.Control
//                   type="file"
//                   name="right"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//           </Row>
//           <Button variant="primary" type="submit" className="w-100 mt-3">
//             Submit
//           </Button>
//         </Form>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default SellCarForm;

import React, { useState, useEffect, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import NAV from "../header/nav";
import Footer from "../footer/Footer";
import { AuthContext } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const SellCarForm = () => {
  const [carName, setCarName] = useState("");
  const [brand, setBrand] = useState("");
  const [brands, setBrands] = useState([]);
  const [model, setModel] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [insurance, setInsurance] = useState("");
  const [price, setPrice] = useState("");
  const [track, setTrack] = useState("");
  const [reading, setReading] = useState("");
  const [carImages, setCarImages] = useState({
    front: null,
    side: null,
    back: null,
    left: null,
    right: null,
  });
  const [contactNumber, setContactNumber] = useState("");
  const [location, setlocation] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBrands = async () => {
      const token = sessionStorage.getItem("authToken");
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
    const { name, files } = e.target;
    setCarImages((prevImages) => ({
      ...prevImages,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const carData = {
      carName,
      brand,
      model,
      fuelType,
      insurance,
      price,
      track,
      reading,
      contactNumber,
      ownerName,
      carImages: {
        front: carImages.front ? URL.createObjectURL(carImages.front) : null,
        side: carImages.side ? URL.createObjectURL(carImages.side) : null,
        back: carImages.back ? URL.createObjectURL(carImages.back) : null,
        left: carImages.left ? URL.createObjectURL(carImages.left) : null,
        right: carImages.right ? URL.createObjectURL(carImages.right) : null,
      },
    };

    localStorage.setItem("carData", JSON.stringify(carData));
    alert("Car details saved successfully! Wait for approval.");

    // Redirect to home page after a successful submission
    navigate("/");
  };

  return (
    <>
      <NAV />
      <Container fluid className="mt-4">
        <h2 className="text-center mb-4">Sell Your Car</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="g-3">
            <Col xs={12} md={6} lg={4}>
              <Form.Group controlId="carName" className="mb-3">
                <Form.Label>Car Name</Form.Label>
                <Form.Control
                  type="text"
                  value={carName}
                  placeholder="Enter car name"
                  onChange={(e) => setCarName(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
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
            <Col xs={12} md={6} lg={4}>
              <Form.Group controlId="model" className="mb-3">
                <Form.Label>Model</Form.Label>
                <Form.Control
                  type="text"
                  value={model}
                  placeholder="2024"
                  onChange={(e) => setModel(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group controlId="fuelType" className="mb-3">
                <Form.Label>Fuel Type</Form.Label>
                <Form.Control
                  as="select"
                  value={fuelType}
                  onChange={(e) => setFuelType(e.target.value)}
                  required
                >
                  <option value="">Select fuel type</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="cng">CNG</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group controlId="insurance" className="mb-3">
                <Form.Label>Insurance</Form.Label>
                <Form.Control
                  as="select"
                  value={insurance}
                  onChange={(e) => setInsurance(e.target.value)}
                  required
                >
                  <option value="">Select insurance status</option>
                  <option value="live">Live</option>
                  <option value="expire">Expire</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group controlId="price" className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  value={price}
                  placeholder="Enter car price"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group controlId="reading" className="mb-3">
                <Form.Label>Reading</Form.Label>
                <Form.Control
                  type="text"
                  value={reading}
                  placeholder="Enter car reading"
                  onChange={(e) => setReading(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group controlId="track" className="mb-3">
                <Form.Label>Track</Form.Label>
                <Form.Control
                  as="select"
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                  required
                >
                  <option value="">Select track</option>
                  <option value="showroom">Showroom</option>
                  <option value="not-showroom">Not Showroom</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group controlId="contactNumber" className="mb-3">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  value={contactNumber}
                  placeholder="Enter contact number"
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group controlId="location" className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  value={location}
                  placeholder="Enter location"
                  onChange={(e) => setlocation(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group controlId="ownerName" className="mb-3">
                <Form.Label>Owner Name</Form.Label>
                <Form.Control
                  type="text"
                  value={ownerName}
                  placeholder="Enter owner name"
                  onChange={(e) => setOwnerName(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group controlId="carImageFront" className="mb-3">
                <Form.Label>Car Image (Front)</Form.Label>
                <Form.Control
                  type="file"
                  name="front"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group controlId="carImageSide" className="mb-3">
                <Form.Label>Car Image (Side)</Form.Label>
                <Form.Control
                  type="file"
                  name="side"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group controlId="carImageBack" className="mb-3">
                <Form.Label>Car Image (Back)</Form.Label>
                <Form.Control
                  type="file"
                  name="back"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group controlId="carImageLeft" className="mb-3">
                <Form.Label>Car Image (Left)</Form.Label>
                <Form.Control
                  type="file"
                  name="left"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group controlId="carImageRight" className="mb-3">
                <Form.Label>Car Image (Right)</Form.Label>
                <Form.Control
                  type="file"
                  name="right"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="w-100 mt-3">
            Submit
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default SellCarForm;
