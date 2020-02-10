import React, { useEffect, useContext } from 'react';
import './Content.scss';
import { StoreContext } from '../../context';
import { getQuotes } from '../../helpers/services';
import ListQuotes from '../../components/ListQuotes/ListQuotes';
import ErrorBoundary from 'react-error-boundary';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import { Link } from 'react-scroll';

function Content() {
  const context = useContext(StoreContext);

  useEffect(() => {
    getQuotes()
      .then(res => context.setQuotesList(res.data))
      .catch(err => console.log(err));
  }, []);

  const newListQuotes = context.quotesList.map((item: any) => {
    return { id: item._id, quote: item.quote, author: item.author };
  });

  return (
    <main className="main">
      <div className="container">
        <ErrorBoundary FallbackComponent={ErrorComponent}>
          <ListQuotes items={newListQuotes} />
        </ErrorBoundary>
      </div>
      <Link
        activeClass="active"
        to="header"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      ></Link>
    </main>
  );
}

export default Content;
