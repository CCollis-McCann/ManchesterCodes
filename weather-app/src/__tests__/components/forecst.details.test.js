import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ForecastDetails from '../../components/forecast-details';

afterEach(cleanup);

describe('ForecastDetails', () => {
  const mockForecast = {
    date: 1525046400000,
    temperature: {
      max: 11,
      min: 4,
    },
    humidity: 30,
    wind: {
      speed: 13,
      direction: 's',
    },
  };

  it('renders correctly', () => {
    const { asFragment } = render(<ForecastDetails forecasts={mockForecast} />);
    expect(asFragment).toMatchSnapshot();
  });
  it('renders the correct amount of props', () => {
    const { getByTestId } = render(
      <ForecastDetails forecasts={mockForecast} />
    );

    expect(getByTestId('date-id')).toHaveClass('date');
    expect(getByTestId('tempMax-id')).toHaveClass('temperatureMax');
    expect(getByTestId('tempMin-id')).toHaveClass('temperatureMin');
    expect(getByTestId('humidity-id')).toHaveClass('humidity');
    expect(getByTestId('windSpeed-id')).toHaveClass('wind-speed');
    expect(getByTestId('windDirection-id')).toHaveClass('wind-direction');
  });
});
