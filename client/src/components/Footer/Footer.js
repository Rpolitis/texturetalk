import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <footer className="footer">
        <ul>
          <li>
          <Link to="/about">about</Link>
          </li>
          <li>
          <Link to="/terms">terms of service</Link>
          </li>
          <li>
          <Link to="/privacy">privacy policy</Link>
          </li>
        </ul>
      </footer>
  )
};

export default Footer;