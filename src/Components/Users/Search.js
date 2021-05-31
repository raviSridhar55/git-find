import React from 'react';

const Search = () => {
  return (
    <div className='search-container'>
      <div className='container'>
        <div className='search'>
          <h1>Find Your Fellow Developers...</h1>
          <form className='search-form'>
            <input type='search' />
            <i class='fa fa-search'></i>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
