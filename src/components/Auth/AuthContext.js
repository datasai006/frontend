// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [intendedRoute, setIntendedRoute] = useState(null);

//   const login = () => {
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated,
//         login,
//         logout,
//         intendedRoute,
//         setIntendedRoute,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [intendedRoute, setIntendedRoute] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const login = () => {
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated,
//         login,
//         logout,
//         intendedRoute,
//         setIntendedRoute,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [intendedRoute, setIntendedRoute] = useState(null);

//   useEffect(() => {
//     const token = sessionStorage.getItem("authToken");
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const login = (token) => {
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     sessionStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated,
//         login,
//         logout,
//         intendedRoute,
//         setIntendedRoute,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

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

    // Set interval to check token expiry every second
    const interval = setInterval(checkTokenExpiry, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  const login = (token, expiryTime) => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("authTokenExpiry");
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
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
