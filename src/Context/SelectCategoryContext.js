import React , {createContext , } from 'react';

export const SelectedCategoryContextProvider = createContext();
const SelectCategoryContext = ({children}) => {
    return (
        <SelectedCategoryContextProvider.Provider>
            {children}
        </SelectedCategoryContextProvider.Provider>
    );
};

export default SelectCategoryContext;