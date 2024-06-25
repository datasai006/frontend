import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NAV from "./components/header/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import CarDetailsPage from "./components/home/CarDetailsPage";
import Footer from "./components/footer/Footer";
import Login from "./components/login/SignInSignUp";
import ScrollToTop from "./components/ScrollToTop";
import CarListPage from "./components/home/CarListPage ";
import Dashboard from "./components/Dashboard/Dashboard";
import AuthProvider from "./components/Auth/AuthContext";

const App = () => {
  const location = useLocation();

  // Paths that do not require header and footer
  const noHeaderFooterPaths = ["/login"];

  return (
    <div>
      {!noHeaderFooterPaths.includes(location.pathname) && <NAV />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/car/:id" element={<CarDetailsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carlist/:id" element={<CarListPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!noHeaderFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);

export default AppWrapper;
