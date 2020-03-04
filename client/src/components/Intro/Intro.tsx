import React, { ReactElement, useEffect, useState } from 'react';
import './Intro.css';
import Button from '../../components/Button/Button';
// import { getQuotesForId } from '../../helpers/services';

function Intro(): ReactElement {
  const [quote, setQuote] = useState({
    author: 'Серега Татанов',
    quote:
      '- Как то раз покурил перед стартом, и сразу всех обогнал.С тех пор не изменяю этой традиции',
  });

  // useEffect(() => {
  //   getQuotesForId(randomNumber)
  //     .then(res => {
  //       console.log(res, 'res');
  //       setQuote(res.data.quote);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  return (
    <div className="intro container">
      <h1 className="intro__title">Цитаты спортсменов</h1>
      <p className="intro__text">{quote.quote}</p>
      <h3 className="intro__author">{quote.author}</h3>
      <Button func={() => {}} text={'Предложить цитату'} color={'#fff'} bg={'#E05927'} />
    </div>
  );
}

export default Intro;
