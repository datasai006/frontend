import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCarsMenuOpen: false,
    };
  }

  toggleCarsMenu = () => {
    this.setState((prevState) => ({
      isCarsMenuOpen: !prevState.isCarsMenuOpen,
    }));
  };

  render() {
    const { isCarsMenuOpen } = this.state;

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
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt=""
                />
                <div className="info mt-2">
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
                  <Nav.Link as={Link} to="/addcar">
                    <i className="nav-icon fas fa-car" />
                    <p>ADD CAR</p>
                  </Nav.Link>
                </li>
                <li
                  className={`nav-item has-treeview ${
                    isCarsMenuOpen ? "menu-open" : ""
                  }`}
                >
                  <Link
                    href="#"
                    className={`nav-link ${isCarsMenuOpen ? "active" : ""}`}
                    onClick={this.toggleCarsMenu}
                  >
                    <i className="nav-icon fas fa-car" />
                    <p>
                      Cars
                      <i className="right fas fa-angle-left" />
                    </p>
                  </Link>
                  <ul
                    className={`nav nav-treeview ${
                      isCarsMenuOpen ? "d-block" : "d-none"
                    }`}
                  >
                    <li className="nav-item">
                      <Nav.Link
                        as={Link}
                        to="/cars/pending"
                        className="nav-link"
                      >
                        <i className="far fa-circle nav-icon" />
                        <p>Pending Cars</p>
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link
                        as={Link}
                        to="/cars/approved"
                        className="nav-link"
                      >
                        <i className="far fa-circle nav-icon" />
                        <p>Approved Cars</p>
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link
                        as={Link}
                        to="/cars/rejected"
                        className="nav-link"
                      >
                        <i className="far fa-circle nav-icon" />
                        <p>Rejected Cars</p>
                      </Nav.Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </>
    );
  }
}
