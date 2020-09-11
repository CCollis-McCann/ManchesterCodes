import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchResults.css';

function SearchResults({ results }) {
  return !results.length ? (
    <p className="SearchResults__error">No results...</p>
  ) : (
    <div className="SearchResults">
      {results.map(img => (
        <img className="SearchResults__image" src={img} alt="stock space" />
      ))}
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
