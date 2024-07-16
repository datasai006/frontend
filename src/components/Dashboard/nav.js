import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class nav extends Component {
  render() {
    return (
      <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Nav.Link
                as={Link}
                className="nav-link"
                data-widget="pushmenu"
                to="#"
                role="button"
              >
                <i className="fas fa-bars" />
              </Nav.Link>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <Nav.Link as={Link} to="/" className="nav-link">
                Home
              </Nav.Link>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <Nav.Link as={Link} to="/contact" className="nav-link">
                Contact
              </Nav.Link>
            </li>
          </ul>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Navbar Search */}

            {/* Messages Dropdown Menu */}

            {/* Notifications Dropdown Menu */}

            <li className="nav-item">
              <Nav.Link
                className="nav-link"
                data-widget="fullscreen"
                href="#"
                role="button"
              >
                <i className="fas fa-expand-arrows-alt" />
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link>
                <i class="fa-solid fa-right-from-bracket"></i>
              </Nav.Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
