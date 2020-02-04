import React, { ReactElement } from "react";
import "./Footer.scss";

interface Props {}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">Logo</div>
        <div className="footer__subscribe">Подписаться на новости</div>
        <div className="footer__support">План развития проекта</div>
      </div>
    </footer>
  );
}

export default Footer;
