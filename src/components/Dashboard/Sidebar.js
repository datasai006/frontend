import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <Nav.Link as={Link} to="/" className="brand-link">
            <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">RSNCARS</span>
          </Nav.Link>

          <div className="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
              <div class="image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt=""
                />
                <div class="info mt-2">
                  <Nav.Link as={Link} to="/" className="d-block">
                    User Name
                  </Nav.Link>
                </div>
              </div>
            </div>
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item menu-open">
                  <Nav.Link as={Link} to="/dashboard">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>Dashboard</p>
                  </Nav.Link>
                </li>
                <li className="nav-item menu-open">
                  <Nav.Link as={Link} to="/dashboard">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>Add-Car</p>
                  </Nav.Link>
                </li>
                <li className="nav-item menu-open">
                  <Nav.Link as={Link} to="/dashboard">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>VIew-Car</p>
                  </Nav.Link>
                </li>
                <li className="nav-item menu-open">
                  <Nav.Link as={Link} to="/dashboard">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>Dashboard</p>
                  </Nav.Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </>
    );
  }
}
