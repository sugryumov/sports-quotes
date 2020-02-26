import React, { ReactElement } from 'react';
import { IPropsListQuotes, IQuoteItem } from '../../interfaces';
import ItemQuote from '../ItemQuote/ItemQuote';
import './ListQuotes.css';

function ListQuotes(props: IPropsListQuotes): ReactElement {
  return (
    <ul className="quotes-list">
      {props.items.map((quote: IQuoteItem) => (
        <ItemQuote item={quote} key={quote.id} />
      ))}
    </ul>
  );
}

export default ListQuotes;
