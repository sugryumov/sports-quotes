import React, { useEffect, useContext } from 'react';
import './Content.scss';
import { StoreContext } from '../../context';
import { getQuotes, getCategories } from '../../helpers/services';
import ErrorBoundary from 'react-error-boundary';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import PaginationControlled from '../PaginationControlled/PaginationControlled';
import ScrollToTop from 'react-scroll-up';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';

function Content() {
  const context = useContext(StoreContext);

  useEffect(() => {
    Promise.all([getQuotes(context.startPage, context.limitPages), getCategories()])
      .then(res => {
        context.setCategoriesList(res[1].data);
        context.setQuotesList(res[0].data.quotes);
        context.setQuotesCount(Math.ceil(res[0].data.count / context.limitPages));
      })
      .catch(err => console.log(err));
  }, []);

  const updatePages = (start: number) => {
    const newStateCategory = context.category === 'Все' ? null : context.category;

    context.setStartPage(start - 1);
    getQuotes((start - 1) * context.limitPages, context.limitPages, newStateCategory)
      .then(res => context.setQuotesList(res.data.quotes))
      .catch(err => console.log(err));
  };

  const newListQuotes = context.quotesList.map((item: any) => {
    return { id: item._id, quote: item.quote, author: item.author };
  });

  const styleScroll = {
    position: 'fixed',
    bottom: 50,
    right: 50,
    cursor: 'pointer',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s',
  };

  return (
    <main className="main">
      <div className="container">
        <ErrorBoundary FallbackComponent={ErrorComponent}>
          <PaginationControlled
            items={newListQuotes}
            count={context.quotesCount}
            startPage={context.startPage}
            updatePages={updatePages}
            limitPages={context.limitPages}
          />
          <ScrollToTop showUnder={160} style={styleScroll}>
            <ArrowUpwardRoundedIcon fontSize="large" htmlColor="#DD5927" />
          </ScrollToTop>
        </ErrorBoundary>
      </div>
    </main>
  );
}

export default Content;
