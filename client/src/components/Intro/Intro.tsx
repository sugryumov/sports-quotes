import React, { ReactElement, useEffect, useState } from 'react';
import './Intro.css';
import Button from '../../components/Button/Button';
import { getRandomQuote } from '../../helpers/services';

function Intro(): ReactElement {
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
      <p className="intro__text">{randomQuote.quote}</p>
      <h3 className="intro__author">{randomQuote.author}</h3>
      <Button func={() => {}} text={'Предложить цитату'} type={'secondary'} />
    </div>
  );
}

export default Intro;
