import React, { useState } from 'react';

import SearchForm from '../../components/Search/SearchForm';
import SearchResult from '../../components/Search/SearchResult';

import Navbar from '../../components/Browse/Navbar';
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
      <Navbar />
      <SearchForm
        onSearch={handleSearch}
        onReset={resetSearch}
      />
      <SearchResult query={query} />
    </div>
  );
};

export default Search;
