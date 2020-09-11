import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummary from './forcast-summary';

import '../styles/forecast-summaries.css';

const ForecastSummaries = (props) => (
  <div className='forecast-summaries'>
    {props.forecasts.map((forecast) => (
      <ForecastSummary
        key={forecast.date}
        date={forecast.date}
        icon={forecast.icon}
        temperature={forecast.temperature.max}
        description={forecast.description}
        onSelect={props.onForecastSelect}
      />
    ))}
  </div>
);

ForecastSummaries.propTypes = {
  forecasts: PropTypes.array.isRequired,
};

export default ForecastSummaries;
