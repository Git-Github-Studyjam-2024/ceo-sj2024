import React, { useEffect } from "react";
import logo from "../static/imgs/GDSCHCMUTE_LOGO_Horizontal_White.png"
import { NavLink } from "react-router-dom";
import $ from "jquery";
const Header = () => {
  useEffect(() => {
    if (
      window.location.href === "http://localhost:3000/" ||
      window.location.href === "http://localhost:3000/home"
    ) {
      $(".link_page_home").addClass("active");
    } else {
      $(".link_page_home").removeClass("active");
    }
    if (window.location.href === "http://localhost:3000/about") {
      $(".link_page_about").addClass("active");
    } else {
      $(".link_page_about").removeClass("active");
    }
    if (window.location.href === "http://localhost:3000/contact") {
      $(".link_page_contact").addClass("active");
    } else {
      $(".link_page_contact").removeClass("active");
    }
  }, []);
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 px-3 mb-4 border-bottom header_custom">
      <NavLink
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <span className="fs-4">
          <img
            src={logo}
            alt="logo"
            className="logo ps-3"
          />
        </span>
      </NavLink>
      <ul className="nav nav-pills h3">
        <li className="nav-item d-flex align-items-center px-3">
          <NavLink to="/" className="link_page_home nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item d-flex align-items-center px-3">
          <NavLink to="/about" className="link_page_about nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item d-flex align-items-center px-3">
          <NavLink to="/contact" className="link_page_contact nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
