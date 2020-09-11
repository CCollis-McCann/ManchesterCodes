import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Alert.css';

function Alert({ message, success }) {
  if (!message) return null;

  return (
    <div className={`Alert Alert__${success ? 'success' : 'error'}`}>
      {message}
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};

export default Alert;
