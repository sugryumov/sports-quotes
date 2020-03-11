import React, { ReactElement, useEffect, useState, useContext } from 'react';
import Button from '../../components/Button/Button';
import { getRandomQuote } from '../../helpers/services';
import './Intro.css';
import { StoreContext } from '../../context';

function Intro(): ReactElement {
  const context = useContext(StoreContext);

  const openModal = () => {
    context.setOpenModal(true);
  };

  const [randomQuote, setRandomQuote] = useState<{
    quote: string;
    author: string;
    category: string;
  }>({ quote: '', author: '', category: '' });

  useEffect(() => {
    getRandomQuote()
      .then(res => {
        setRandomQuote(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="intro container">
      <h1 className="intro__title">Цитаты спортсменов</h1>
      <div className="intro__quote-wrapper">
        <p className="intro__text">{randomQuote.quote}</p>
        <h3 className="intro__author">{randomQuote.author}</h3>
      </div>
      <Button func={openModal} text={'Предложить цитату'} type={'secondary'} />
    </div>
  );
}

export default Intro;
