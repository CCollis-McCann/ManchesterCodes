import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastDetails = (props) => (
  <div className='forecast-details'>
    <div className='date' data-testid='date-id'>
      <span>{moment(props.forecasts.date).format('dddd Do MMM')}</span>
    </div>
    <div className='temperatureMax' data-testid='tempMax-id'>
      <span>Max: {props.forecasts.temperature.max}&deg;c</span>
    </div>
    <div className='temperatureMin' data-testid='tempMin-id'>
      <span>Min: {props.forecasts.temperature.min}&deg;c</span>
    </div>
    <div className='humidity' data-testid='humidity-id'>
      <span>Humidity: {props.forecasts.humidity}%</span>
    </div>
    <div className='wind-speed' data-testid='windSpeed-id'>
      <span>Wind Speed: {props.forecasts.wind.speed}mph</span>
    </div>
    <div className='wind-direction' data-testid='windDirection-id'>
      <span>Wind Direction: {props.forecasts.wind.direction}</span>
    </div>
  </div>
);

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.string.isRequired,
    temperature: PropTypes.object.isRequired,
    humidity: PropTypes.string.isRequired,
    wind: PropTypes.object.isRequired,
  }),
};

export default ForecastDetails;
