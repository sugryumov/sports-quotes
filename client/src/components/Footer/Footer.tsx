import React from 'react';
import { Link } from 'gatsby';
import { svgHolder } from '../../helpers/svgHolders';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__logo footer__item">
          <Link to="/">{svgHolder.logotype}</Link>
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
