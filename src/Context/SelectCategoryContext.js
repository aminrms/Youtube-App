import React , {createContext ,useState } from 'react';

export const SelectedCategoryContextProvider = createContext();
const SelectCategoryContext = ({children}) => {
    const [selectedCategory , setSelectedCategory] = useState('New')
    return (
        <SelectedCategoryContextProvider.Provider value={{selectedCategory , setSelectedCategory}}>
            {children}
        </SelectedCategoryContextProvider.Provider>
    );
};

export default SelectCategoryContext;