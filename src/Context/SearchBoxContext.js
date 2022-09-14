import React, { createContext, useState } from "react";

export const SearchBoxContextProvider = createContext();
const SearchBoxContext = ({ children }) => {
  const [search, setSearch] = useState(false);
  return (
    <SearchBoxContextProvider.Provider value={{ search, setSearch }}>
      {children}
    </SearchBoxContextProvider.Provider>
  );
};

export default SearchBoxContext;
