import React, { createContext, useContext, useState } from 'react';

// Create the Search Context
const SearchContext = createContext();

// Custom hook to use the Search Context
export const useSearch = () => useContext(SearchContext);

// Search Context Provider Component
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState({});

  // Update the search term and filtered data
  const handleSearch = (term) => {
    setSearchTerm(term);
    // Update the filteredData based on the search term
    // This can be a function that filters your data
  };

  return (
    <SearchContext.Provider value={{ searchTerm, filteredData, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
