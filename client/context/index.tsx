import React, { useState } from 'react';

export const StoreContext = React.createContext<any>({});

export default ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [quotesList, setQuotesList] = useState<Array<{}>>([]);

  const store = {
    loading,
    setLoading,
    quotesList,
    setQuotesList
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
