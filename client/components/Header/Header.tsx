import React, { ReactElement } from 'react';
import Link from 'next/link';
import { svgHolder } from '../../helpers/svgHolders';
import './Header.scss';

function Header(): ReactElement {
  return (
    <header className="header">
      <div className="header__content container">
        <Link href="/">
          <a className="logo">{svgHolder.logotype}</a>
        </Link>

        <ul className="menu">
          <li className="menu__item">
            <Link href="/">
              <a className="menu__link">All</a>
            </Link>
          </li>
          <li className="menu__item">
            <Link href="/">
              <a className="menu__link">Football</a>
            </Link>
          </li>
          <li className="menu__item">
            <Link href="/">
              <a className="menu__link">Hockey</a>
            </Link>
          </li>
          <li className="menu__item">
            <Link href="/">
              <a className="menu__link">Basketball</a>
            </Link>
          </li>
          <li className="menu__item">
            <Link href="/">
              <a className="menu__link">Formula-1</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
