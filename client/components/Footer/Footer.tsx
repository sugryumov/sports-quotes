import React from 'react';
import Link from 'next/link';
import { svgHolder } from '../../helpers/svgHolders';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__logo footer__item">
          <Link href="/">
            <a className="logo">{svgHolder.logotype}</a>
          </Link>
        </div>
        <div className="footer__subscribe footer__item">
          <p>Подписаться на новости</p>
        </div>
        <div className="footer__support footer__item">
          <p> План развития проекта</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
