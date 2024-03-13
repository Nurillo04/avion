import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__item">
          <li>All products</li>
          <li>Plant pots</li>
          <li>Ceramics</li>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Crockery</li>
          <li>Tableware</li>
          <li>Cutlery</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
