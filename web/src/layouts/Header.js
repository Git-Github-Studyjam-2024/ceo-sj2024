import React from "react";

const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <svg className="bi me-2" width={40} height={32}>
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Code Engineering Overlords</span>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="http://localhost:3000/home" className="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="http://localhost:3000/about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="http://localhost:3000/contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
