// import React, { useContext } from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { AuthContext } from "./Auth/AuthContext";

// const ProtectedRoute = () => {
//   const { isAuthenticated, setIntendedRoute } = useContext(AuthContext);
//   const location = useLocation();

//   if (!isAuthenticated) {
//     setIntendedRoute(location.pathname);
//     return <Navigate to="/login" />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;

// import React, { useContext, useEffect } from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { AuthContext } from "./Auth/AuthContext";

// const ProtectedRoute = () => {
//   const { isAuthenticated, setIntendedRoute } = useContext(AuthContext);
//   const location = useLocation();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       setIntendedRoute(location.pathname);
//     }
//   }, [isAuthenticated, location.pathname, setIntendedRoute]);

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;
// import React, { useContext, useEffect } from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { AuthContext } from "./Auth/AuthContext";

// const ProtectedRoute = () => {
//   const { isAuthenticated, setIntendedRoute } = useContext(AuthContext);
//   const location = useLocation();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       setIntendedRoute(location.pathname);
//     }
//   }, [isAuthenticated, location.pathname, setIntendedRoute]);

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;

import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "./Auth/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated, setIntendedRoute } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setIntendedRoute(location.pathname);
    }
  }, [isAuthenticated, location.pathname, setIntendedRoute]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
