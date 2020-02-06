import React, { ReactElement } from "react";
import { IQuote } from "../../interfaces";
import "./ItemQuote.scss";

function ItemQuote(props: IQuote): ReactElement {
  return (
    <li className="quote">
      <h3 key={props.item.id} className="quote__title">
        {props.item.author}
      </h3>
      <p className="quote__text">{props.item.quote}</p>
    </li>
  );
}

export default ItemQuote;
