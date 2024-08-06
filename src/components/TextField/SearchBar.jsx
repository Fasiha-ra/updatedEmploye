import React from 'react';
import { useSearch } from '../SearchContext'; // Adjust the path as needed
import { CiSearch } from 'react-icons/ci';
import { SearchbarWrap } from './Texfield.styles';
import TextField from './TextField';

const SearchBar = () => {
  const { searchTerm, handleSearch } = useSearch();

  const handleInputChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <SearchbarWrap>
      <TextField
        className="input-field"
        parentClass="customClass"
        field_Name="text"
        type="text"
        hasicon={<CiSearch />}
        placeholder="Search"
        border="#ddd"
        bgClr="#fff"
        value={searchTerm}
        onChange={handleInputChange}
      />
      
    </SearchbarWrap>
  );
};

export default SearchBar;
