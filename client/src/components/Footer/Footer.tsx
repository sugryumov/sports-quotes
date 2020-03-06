import React from 'react';
import { Link, navigate } from 'gatsby';
import { svgHolder } from '../../helpers/svgHolders';
import './Footer.css';
import PaymentIcon from '@material-ui/icons/Payment';
import TelegramIcon from '@material-ui/icons/Telegram';

function Footer() {
  const transferInMaintain = () => {
    navigate('/maintain');
  };
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__logo footer__item">
          <a href="tg://our_sports_quotes">
            <TelegramIcon color="action" fontSize="large" />
          </a>
        </div>
        <div className="footer__subscribe footer__item">
          <p>Подписаться на новости</p>
        </div>
        <div className="footer__support footer__item">
          <p>Поддержать проект</p>
          <div className="icon-wrap" onClick={() => transferInMaintain()}>
            <PaymentIcon fontSize="large" color="action" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
