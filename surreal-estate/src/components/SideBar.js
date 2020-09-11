import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';
import '../styles/SideBar.css';

function SideBar() {
  const { search } = useLocation();
  const history = useHistory();
  const [query, setQuery] = useState('');

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, {
      ignoreQueryPrefix: true,
    });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = e => {
    e.preventDefault();

    const newQueryString = buildQueryString('query', {
      title: { $regex: query },
    });

    history.push(newQueryString);
  };

  return (
    <div className="SideBar">
      <form className="SideBar__form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Title"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Link to={buildQueryString('query', { city: 'Manchester' })}>
        Manchester
      </Link>
      <Link to={buildQueryString('query', { city: 'Leeds' })}>Leeds</Link>
      <Link to={buildQueryString('query', { city: 'Sheffield' })}>
        Sheffield
      </Link>
      <Link to={buildQueryString('query', { city: 'Liverpool' })}>
        Liverpool
      </Link>
      <Link to={buildQueryString('sort', { price: '1' })}>
        Price - ascending
      </Link>
      <Link to={buildQueryString('sort', { price: '-1' })}>
        Price - descending
      </Link>
    </div>
  );
}

export default SideBar;
