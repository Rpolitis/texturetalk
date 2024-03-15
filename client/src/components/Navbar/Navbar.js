import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="nav">
        <Link to="/" className="logo">Logo</Link>
        <ul>
          <li>
          <Link to="/quiz">quiz</Link>
          </li>
          <li>
          <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>
  )
};

export default Navbar;