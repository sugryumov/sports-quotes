import React, { ReactElement, useContext } from "react";
import { StoreContext } from "../../context";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(): ReactElement {
  const context = useContext(StoreContext);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className="menu">
        <li className="menu__item">
          <Link to="/">All</Link>
        </li>
        <li className="menu__item">
          <Link to="/football">Football</Link>
        </li>
        <li className="menu__item">
          <Link to="/hockey">Hockey</Link>
        </li>
        <li className="menu__item">
          <Link to="/basketball">Basketball</Link>
        </li>
        <li className="menu__item">
          <Link to="/formula1">Formula-1</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
