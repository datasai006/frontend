import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [intendedRoute, setIntendedRoute] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenExpiry = () => {
      const token = sessionStorage.getItem("authToken");
      const expiryTime = sessionStorage.getItem("authTokenExpiry");

      if (token && expiryTime) {
        if (Date.now() > Number(expiryTime)) {
          sessionStorage.removeItem("authToken");
          sessionStorage.removeItem("authTokenExpiry");
          localStorage.removeItem("authToken");
          setIsAuthenticated(false);
          navigate("/login");
        } else {
          setIsAuthenticated(true);
        }
      }
    };

    checkTokenExpiry();

    const interval = setInterval(checkTokenExpiry, 2000);

    return () => clearInterval(interval);
  }, [navigate]);

  const login = (token) => {
    const expiryTime = Date.now() + 2 * 60 * 1000; // 2 minutes from now
    sessionStorage.setItem("authToken", token);
    sessionStorage.setItem("authTokenExpiry", expiryTime);
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("authTokenExpiry");
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        intendedRoute,
        setIntendedRoute,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
