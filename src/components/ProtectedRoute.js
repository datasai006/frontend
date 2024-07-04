import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "./Auth/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated, setIntendedRoute } = useContext(AuthContext);
  const location = useLocation();

  if (!isAuthenticated) {
    setIntendedRoute(location.pathname);
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
