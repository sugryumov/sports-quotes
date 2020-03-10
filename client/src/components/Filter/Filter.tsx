import React, { ReactElement, useContext } from 'react';
import { StoreContext } from '../../context';
import { getQuotes } from '../../helpers/services';
import Button from '../Button/Button';
import Select from '../Select/Select';
import './Filter.css';

interface IFilterProps {
  setPage(value: number): void;
}

function Filter(props: IFilterProps): ReactElement {
  const context = useContext(StoreContext);

  const selectListLimit = [
    { name: 2, _id: Date.now() + 1 },
    { name: 5, _id: Date.now() + 2 },
    { name: 10, _id: Date.now() + 3 },
  ];

  const getQuotesForNewFilters = () => {
    context.setLimitPages(context.limitPages);

    const newStateCategory = context.category === 'Все' ? null : context.category;

    props.setPage(1);
    getQuotes(0, context.limitPages, newStateCategory)
      .then(res => {
        context.setQuotesList(res.data.quotes);
        context.setStartPage(0);
        context.setQuotesCount(Math.ceil(res.data.count / context.limitPages));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="filter">
      <Select
        value={context.category}
        func={context.setCategory}
        type={'category'}
        title="Категории"
        data={context.categoriesList}
      />
      <Select
        value={context.limitPages}
        func={context.setLimitPages}
        type={'limitPages'}
        title="Показывать по"
        data={selectListLimit}
      />
      <Button func={getQuotesForNewFilters} text={'Применить'} type={'primary'} />
    </div>
  );
}

export default Filter;
