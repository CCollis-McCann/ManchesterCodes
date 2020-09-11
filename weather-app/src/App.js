import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationDetails from './components/location-details';
import ForecastSummaries from './components/forecast-summaries';
import ForecastDetails from './components/forecast-details';
import SearchForm from './components/search-form';

import './styles/app.css';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({
    city: '',
    country: '',
  });
  const [load, setLoad] = useState(true);

  useEffect(() => {
    axios
      .get('https://mcr-codes-weather.herokuapp.com/forecast')
      .then((res) => {
        setForecasts(res.data.forecasts);
        setLocation(res.data.location);
        setLoad(false);
      });
  }, []);

  const citySearch = (city) => {
    const query = city.toLowerCase();

    setLoad(true);
    axios
      .get('https://mcr-codes-weather.herokuapp.com/forecast?city=' + query)
      .then((res) => {
        setForecasts(res.data.forecasts);
        setLocation(res.data.location);
        setLoad(false);
      })
      .catch((err) => {
        alert('City not found');
        setLoad(false);
      }, []);
  };

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  if (load) {
    return <div className='loading'>Loading...</div>;
  } else {
    return (
      <div className='forecast'>
        <LocationDetails city={location.city} country={location.country} />

        <SearchForm onCitySearch={citySearch} />

        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecasts={selectedForecast} />}
      </div>
    );
  }
};

export default App;
