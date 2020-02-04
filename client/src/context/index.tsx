import React, { useState } from "react";

export const StoreContext = React.createContext<any>({});

export default ({ children }: any) => {
  const [value, setValue] = useState("123");

  function changeLoading(value: string) {
    setValue(value);
  }

  const store = {
    value,
    changeLoading
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
