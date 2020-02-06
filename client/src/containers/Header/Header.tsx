import React, { ReactElement, useContext } from "react";
import { StoreContext } from "../../context";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(): ReactElement {
  const context = useContext(StoreContext);

  return (
    <header className="header">
      <div className="header__content container">
        <Link className="logo" to="/">
          Logo
        </Link>

        <ul className="menu">
          <li className="menu__item">
            <Link className="menu__link" to="/">
              All
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/football">
              Football
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/hockey">
              Hockey
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/basketball">
              Basketball
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/formula1">
              Formula-1
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
