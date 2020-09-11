import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = (props) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className='searchForm'>
      <label htmlFor='location'>Location: </label>
      <input
        type='text'
        id='location'
        name='location'
        placeholder='City'
        onChange={handleInputChange}
        value={searchText}
        className='location'
      ></input>
      <br />
      <button type='submit' onClick={() => props.onCitySearch(searchText)}>
        Search{' '}
        <span role='img' aria-label='search'>
          &#x1F50E;
        </span>
      </button>
    </div>
  );
};

SearchForm.propTypes = {
  onCitySearch: PropTypes.func.isRequired,
};

export default SearchForm;
