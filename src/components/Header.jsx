import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="custom-header">
      <nav>
        <ul className="left-nav">
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
