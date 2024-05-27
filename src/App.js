import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NAV from "./components/header/nav";
import Home from "./components/home/home";
import About from "./components/about/about"; 
import Contact from "./components/contact/contact"; 
import DealerLogin from "./components/delarlogin/delarlogin";

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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
