import React, { ReactElement } from 'react';
import { IQuote } from '../../interfaces';
import './ItemQuote.scss';

function ItemQuote(props: IQuote): ReactElement {
  return (
    <li className="quote">
      <p className="quote__text">{props.item.quote}</p>
      <h3 key={props.item.id} className="quote__title">
        {props.item.author}
      </h3>
    </li>
  );
}

export default ItemQuote;
