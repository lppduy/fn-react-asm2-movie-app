import React, { useState } from 'react';

import NavBar from '../../components/Browse/NavBar';
import SearchResult from '../../components/Search/SearchResult';
import SearchForm from '../../components/Search/SearchForm'; // Import SearchForm

import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = searchInput => {
    setQuery(searchInput);
  };

  const resetSearch = () => {
    setQuery('');
  };

  return (
    <div className="app">
      <NavBar />
      <SearchForm
        onSearch={handleSearch}
        onReset={resetSearch}
      />
      <SearchResult query={query} />
    </div>
  );
};

export default Search;
