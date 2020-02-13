import React, { useEffect, useContext } from 'react';
import './Content.scss';
import { StoreContext } from '../../context';
import { getQuotes } from '../../helpers/services';
import ErrorBoundary from 'react-error-boundary';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import PaginationControlled from '../PaginationControlled/PaginationControlled';

function Content() {
  const context = useContext(StoreContext);

  useEffect(() => {
    getQuotes(context.startPage, context.limitPages)
      .then(res => context.setQuotesList(res.data))
      .catch(err => console.log(err));
  }, []);

  const updatePages = (start: number, limit: number) => {
    context.setStartPage(start);
    getQuotes(start, limit)
      .then(res => context.setQuotesList(res.data))
      .catch(err => console.log(err));
  };

  const newListQuotes = context.quotesList.map((item: any) => {
    return { id: item._id, quote: item.quote, author: item.author };
  });

  return (
    <main className="main">
      <div className="container">
        <ErrorBoundary FallbackComponent={ErrorComponent}>
          <PaginationControlled
            items={newListQuotes}
            startPage={context.startPage}
            updatePages={updatePages}
            limitPages={context.limitPages}
          />
        </ErrorBoundary>
      </div>
    </main>
  );
}

export default Content;
