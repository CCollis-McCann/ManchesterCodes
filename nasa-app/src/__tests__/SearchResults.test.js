import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe('SearchResults', () => {
  const { asFragment } = render(<SearchResults />);

  it('renders correctly', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
