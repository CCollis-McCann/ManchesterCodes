import React, { useState } from 'react';
import '../styles/Nav.css';
import { Input } from 'semantic-ui-react';
import getGameInfo from './requests/getGameInfo';

const Nav = ({
  setGameImage,
  setGameTitle,
  setGameDetails,
  setGameRating,
  setReccomendedGameTitleOne,
  setReccomendedGameImageOne,
  setReccomendedGameTitleTwo,
  setReccomendedGameImageTwo,
  setReccomendedGameTitleThree,
  setReccomendedGameImageThree,
  setReccomendedGameImageFour,
  setReccomendedGameTitleFour,
}) => {
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    getGameInfo(
      value,
      setGameImage,
      setGameTitle,
      setGameDetails,
      setGameRating,
      setReccomendedGameTitleOne,
      setReccomendedGameImageOne,
      setReccomendedGameTitleTwo,
      setReccomendedGameImageTwo,
      setReccomendedGameTitleThree,
      setReccomendedGameImageThree,
      setReccomendedGameImageFour,
      setReccomendedGameTitleFour
    );
  };

  return (
    <div className="nav" id="nav">
      <div className="logo-img"></div>
      <h1 className="logo"> GaRecco </h1>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          className="search-bar"
          placeholder="Search..."
          value={value}
        />
        <button className="search-button">
          <h3>Search!</h3>
        </button>
      </form>
    </div>
  );
};

export default Nav;
