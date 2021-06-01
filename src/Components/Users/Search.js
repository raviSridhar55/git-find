import { useState } from "react";
import React from "react";

const Search = ({ searchUsers }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchUsers(search);
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
              value={search}
              onChange={onChange}
            />
            <i className='fa fa-search' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
