import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faBath,
  faEnvelope,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/PropertyCard.css';

function PropertyCard({
  _id,
  title,
  type,
  city,
  bathrooms,
  bedrooms,
  price,
  email,
  userID,
  onSaveProperty,
}) {
  return (
    <div className="PropertyCard">
      <header className="PropertyCard__header">
        <h2>{title}</h2>
        <h3>{`${type}, ${city}`}</h3>
        {userID && (
          <button
            onClick={() => onSaveProperty(_id)}
            className="save-button"
            type="button"
          >
            <FontAwesomeIcon icon={faHeart} className="save-logo" />
          </button>
        )}
      </header>
      <div className="PropertyCard__bathrooms">
        <FontAwesomeIcon icon={faBath} /> {bathrooms}
      </div>
      <div className="PropertyCard__bedrooms">
        <FontAwesomeIcon icon={faBed} /> {bedrooms}
      </div>
      <div>{`Price: £${price}`}</div>
      <footer className="PropertytCard__contact">
        <FontAwesomeIcon icon={faEnvelope} />
        <a href={`mailto:${email}`}>Contact</a>
      </footer>
    </div>
  );
}

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
};

export default PropertyCard;
