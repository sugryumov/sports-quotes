import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import { svgHolder } from '../../helpers/svgHolders';
import './Header.css';

function Header(): ReactElement {
  return (
    <header className="header">
      <div className="header__content container">
        <Link to="/" className="logo">
          {svgHolder.logotype}
        </Link>
      </div>
    </header>
  );
}

export default Header;
