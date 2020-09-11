import React from 'react';
import { cleanup, render, getAllByTestId } from '@testing-library/react';
import ForecastSummaries from '../../components/forecast-summaries';

afterEach(cleanup);

describe('ForecastSummaries', () => {
  const forecasts = [
    {
      date: 1525046400000,
      description: 'mockDescription',
      icon: '800',
      temperature: {
        max: 11,
      },
    },
    {
      date: 1525046500000,
      description: 'mockDescription2',
      icon: '200',
      temperature: {
        max: 13,
      },
    },
  ];

  it('renders correctly to match ForecastSummaries snapshot', () => {
    const { asFragment } = render(<ForecastSummaries forecasts={forecasts} />);

    expect(asFragment).toMatchSnapshot();
  });

  it('renders the correct amount of ForecastSummary component props', () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={forecasts} />
    );

    expect(getAllByTestId('date-id')).toHaveLength(2);
    expect(getAllByTestId('temperature-id')).toHaveLength(2);
    expect(getAllByTestId('description-id')).toHaveLength(2);
    expect(getAllByTestId('icon-id')).toHaveLength(2);
  });
});
