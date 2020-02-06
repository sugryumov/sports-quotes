import React, { useEffect, useContext } from "react";
import "./Content.scss";
import { StoreContext } from "../../context";
import { getQuotes } from "../../helpers/services";
import ListQuotes from "../../components/ListQuotes/ListQuotes";

function Content() {
  const context = useContext(StoreContext);

  useEffect(() => {
    getQuotes()
      .then(res => context.setQuotesList(res.data))
      .catch(err => console.log(err));
  }, []);

  const test = context.quotesList.map((item: any) => {
    return { id: item._id, quote: item.quote, author: item.author };
  });

  return (
    <main className="main">
      <div className="container">
        <ListQuotes items={test} />
      </div>
    </main>
  );
}

export default Content;
