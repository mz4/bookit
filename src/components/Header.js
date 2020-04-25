import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="level">
    <ul className="level-left">
      <li className="level-item">
        <Link to="/">Home</Link>
      </li>
      <li className="level-item">
        <Link to="/bookmarks/new">New</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
