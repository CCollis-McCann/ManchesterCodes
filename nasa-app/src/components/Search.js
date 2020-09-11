import React, { useState } from 'react';
import getImages from '../requests/getImages.js';
import PropTypes from 'prop-types';
import '../requests/getImages.js';
import '../styles/Search.css';

function Search({ setSearchResults }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setSearchResults(await getImages(searchValue));
  };

  return (
    <>
      <form className="Search__form" onSubmit={handleSubmit}>
        <input
          className="Search__input"
          type="text"
          placeholder="&#x1F50D;"
          onChange={e => setSearchValue(e.target.value)}
        ></input>
        <button className="Search__button" type="submit">
          Search
        </button>
      </form>
    </>
  );
}

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Search;
