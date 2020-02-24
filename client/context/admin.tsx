import React, { useState } from 'react';

export const StoreContext = React.createContext<any>({});

export default ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const store = {
    loading,
    setLoading,
    login,
    setLogin,
    password,
    setPassword,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
