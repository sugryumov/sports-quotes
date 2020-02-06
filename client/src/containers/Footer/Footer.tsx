import React, { ReactElement } from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__logo footer__item">Logo</div>
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
