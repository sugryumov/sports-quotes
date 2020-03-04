import React, { useState } from 'react';

export const StoreContext = React.createContext<any>({});

export default ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [quotesList, setQuotesList] = useState<Array<{}>>([]);
  const [category, setCategory] = useState<string>('Все');
  const [categoriesList, setCategoriesList] = useState<Array<{}>>([]);

  const [startPage, setStartPage] = useState<number>(0);
  const [limitPages, setLimitPages] = useState<number>(2);
  const [quotesCount, setQuotesCount] = useState<number>(0);

  const store = {
    loading,
    setLoading,
    quotesList,
    setQuotesList,
    category,
    setCategory,
    categoriesList,
    setCategoriesList,
    startPage,
    setStartPage,
    limitPages,
    setLimitPages,
    quotesCount,
    setQuotesCount,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
