import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <Link to={"/Assignment1"}>
          <li>Assignment1</li>
        </Link>
        <Link to={"/Assignment2"}>
          <li>Assignment2</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
