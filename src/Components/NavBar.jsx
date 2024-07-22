import React from "react";
import { useLocation, Link } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <div className="nav-container">
        <nav className="navbar navbar-light bg-light fixed-top">
          <div className="container">
            <Link reloadDocument to="/">
              <img src="/images/logo.png" className="img-fluid nav-logo" />
            </Link>
            <div className="nav-text">
              <ul className="nav-text-middle">
                <li className={pathname === "/" ? "active" : ""}>
                  <Link reloadDocument to="/">
                    Home
                  </Link>
                </li>
                <li className={pathname === "/about" ? "active" : ""}>
                  <Link reloadDocument to="/about">
                    About
                  </Link>
                </li>
                <li className={pathname === "/news" ? "active" : ""}>
                  <Link reloadDocument to="/news">
                    News
                  </Link>
                </li>

                <li className={pathname === "/contact" ? "active" : ""}>
                  <Link reloadDocument to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <button
              className="navbar-toggler bg-light nav-btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-light"
              tabIndex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close btn-close-dark"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li
                    className={`nav-item ${pathname === "/" ? "active" : ""}`}
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      reloadDocument
                      className="nav-link"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      pathname === "/about" ? "active" : ""
                    }`}
                    data-bs-dismiss="offcanvas"
                  >
                    <Link reloadDocument className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      pathname === "/news" ? "active" : ""
                    }`}
                    data-bs-dismiss="offcanvas"
                  >
                    <Link reloadDocument className="nav-link" to="/news">
                      News
                    </Link>
                  </li>

                  <li
                    className={`nav-item ${
                      pathname === "/contact" ? "active" : ""
                    }`}
                    data-bs-dismiss="offcanvas"
                  >
                    <Link reloadDocument className="nav-link" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
