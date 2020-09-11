import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = (props) => (
  <div className='forecast-summary'>
    <div className='date' data-testid='date-id'>
      <span>{moment(props.date).format('ddd Do MMM')}</span>
    </div>
    <div className='icon' data-testid='icon-id'>
      <WeatherIcon name='owm' iconId={props.icon} />
    </div>
    <div className='temperature' data-testid='temperature-id'>
      <span>{props.temperature}&deg;C</span>
    </div>
    <div className='description' data-testid='description-id'>
      <span>{props.description}</span>
    </div>
    <button onClick={() => props.onSelect(props.date)}>More details</button>
  </div>
);

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default ForecastSummary;
