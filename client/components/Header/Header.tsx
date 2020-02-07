import React, { ReactElement } from "react";
import "./Header.scss";

function Header(): ReactElement {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <ul className="menu" id="menu">
        <li className="menu__item">All</li>
        <li className="menu__item">Football</li>
        <li className="menu__item">Hockey</li>
        <li className="menu__item">Basketball</li>
        <li className="menu__item">Formula-1</li>
      </ul>
    </header>
  );
}

export default Header;
