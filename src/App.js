import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import CarDetailsPage from "./components/home/CarDetailsPage";
import Login from "./components/login/SignInSignUp";
import ScrollToTop from "./components/ScrollToTop";
import CarListPage from "./components/home/CarListPage ";
import Dashboard from "./components/Dashboard/UserDashboard";
import AuthProvider from "./components/Auth/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Sell from "./components/Sellcar/sell";
import Footer from "./components/footer/Footer";

const App = () => {
  const location = useLocation();

  const noHeaderFooterPaths = ["/login"];

  const showHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);

  return (
    <div>
      {showHeaderFooter && <ScrollToTop />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/car/:id" element={<CarDetailsPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/sell" element={<Sell />} />
          <Route path="/carlist/:id" element={<CarListPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      {showHeaderFooter && <Footer />}
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
