import { useState } from 'react';
import React from 'react';

const Search = () => {
  const [Search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(Search);
  };

  return (
    <div className='search-container'>
      <div className='container'>
        <div className='search'>
          <h1>Find Your Fellow Developers...</h1>

          <form className='search-form' onSubmit={onSubmit}>
            <input
              type='search'
              placeholder='Search...'
              value={Search}
              onChange={onChange}
            />
            <i className='fa fa-search' />
          </form>
        </div>
      </div>
      <h1>Ravi Sridhar</h1>
    </div>
  );
};

export default Search;
