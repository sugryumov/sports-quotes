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
      </div>
    </header>
  );
}

export default Header;
