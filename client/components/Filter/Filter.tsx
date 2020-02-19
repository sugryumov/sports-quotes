import React, { ReactElement, useState, useContext } from 'react';
import Button from '../Button/Button';
import Select from '../Select/Select';
import './Filter.scss';
import { StoreContext } from '../../context';
import { getQuotes } from '../../helpers/services';

interface Props {}

function Filter({}: Props): ReactElement {
  const context = useContext(StoreContext);

  const [limitCount, setLimitCount] = useState(context.limitPages);

  const getQuotesForNewlimit = () => {
    context.setLimitPages(limitCount);
    getQuotes(0, limitCount)
      .then(res => {
        context.setQuotesList(res.data.quotes);
        context.setStartPage(0);
        context.setQuotesCount(Math.ceil(res.data.count / limitCount));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="filter">
      <Select setLimitCount={setLimitCount} />
      <Button func={getQuotesForNewlimit} isDisabled={false} />
    </div>
  );
}

export default Filter;
