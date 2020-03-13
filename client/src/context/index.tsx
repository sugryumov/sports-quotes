import React, { useState } from 'react';

export const StoreContext = React.createContext<any>({});

export default ({ children }: any) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [quotesList, setQuotesList] = useState<Array<{}>>([]);
  const [category, setCategory] = useState<String>('Все');
  const [categoriesList, setCategoriesList] = useState<Array<{}>>([]);
  const [openModal, setOpenModal] = useState<Boolean>(false);

  const [startPage, setStartPage] = useState<Number>(0);
  const [limitPages, setLimitPages] = useState<Number>(2);
  const [quotesCount, setQuotesCount] = useState<Number>(0);

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
    openModal,
    setOpenModal,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
