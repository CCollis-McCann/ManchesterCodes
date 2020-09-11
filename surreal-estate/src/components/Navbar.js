import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import logo from '../images/logo.png';
import '../styles/Navbar.css';

function Navbar({ onLogin, onLogout, userID }) {
  return (
    <div className="Navbar">
      <img className="Navbar__logo" src={logo} alt="Surreal Estate logo" />
      <ul className="Navbar__links">
        <li className="Navbar__links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="Navbar__links-item">
          <Link to="/addproperty">Add Properties</Link>
        </li>
        <li className="Navbar__facebook">
          {!userID ? (
            <FacebookLogin
              appId="2485059341785230"
              autoLoad={true}
              fields="name,email,picture"
              callback={onLogin}
            />
          ) : (
            <button onClick={onLogout}>Sign Out</button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
