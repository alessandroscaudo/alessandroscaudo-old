import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        <h1>{props.title}</h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={isOpen ? 'true' : 'false'}
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ms-auto  ${isOpen ? 'show' : ''} `} id="navbarNav">
        <ul className="navbar-nav ms-auto"> {/* Aggiungi la classe ml-auto */}
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
