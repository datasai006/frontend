import React, { useState, useContext } from "react";
import "../login/SignInSignUp.css";
import { Container } from "react-bootstrap";
import { AuthContext } from "../Auth/AuthContext"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";

const SignInSignUp = () => {
  const [signUpMode, setSignUpMode] = useState(false);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const { login, intendedRoute, setIntendedRoute } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${apiBaseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobileNumber,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      const tokenExpiryTime = Date.now() + data.expiresIn * 10000;

      sessionStorage.setItem("authToken", data.token);
      sessionStorage.setItem("authTokenExpiry", tokenExpiryTime);
      login(data.token, tokenExpiryTime);
      navigate(intendedRoute || "/");
      setIntendedRoute(null);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          mobileNumber,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      setSignUpMode(false);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <Container className={`container1 ${signUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleLogin}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <button type="button" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="social-icon">
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" className="social-icon">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
          </form>
          <form className="sign-up-form" onSubmit={handleSignUp}>
            <h2 className="title mt-5">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <button type="button" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="social-icon">
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" className="social-icon">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New To Here ?</h3>
            <p>Don't have an account?</p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img
            src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png"
            className="image"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Already have an account? </p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img
            src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"
            className="image"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default SignInSignUp;
