import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NAV from "./components/header/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import DealerLogin from "./components/delarlogin/delarlogin";
import CarDetailsPage from "./components/home/CarDetailsPage";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <NAV />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dealer-login" element={<DealerLogin />} />
          {/* <Route path="/car/:id" element={CarDetailsPage} /> */}
          <Route path="/car/:id" element={<CarDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
