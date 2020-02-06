import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { svgHolder } from "../../helpers/svgHolders";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__logo footer__item">
          <Link className="logo" to="/">
            {svgHolder.logotype}
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
