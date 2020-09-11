import React from 'react';
import { render } from '@testing-library/react';
import PropertyCard from '../components/PropertyCard';

const mockData = {
  title: '2 bedroom semi',
  type: 'Semi-detached',
  city: 'Manchester',
  bathrooms: '1',
  bedrooms: '2',
  price: '100000',
  email: 'test@test.com',
};

it('renders correctly', () => {
  const { asFragment } = render(<PropertyCard {...mockData} />);

  expect(asFragment()).toMatchSnapshot();
});

it('renders a title', () => {
  const { getByText } = render(<PropertyCard {...mockData} />);

  expect(getByText(/2 bedroom semi/i)).toBeInTheDocument();
});

it('renders a type and location', () => {
  const { getByText } = render(<PropertyCard {...mockData} />);

  expect(getByText(/Semi-detached, Manchester/i)).toBeInTheDocument();
});

it('renders a number of bathrooms', () => {
  const { getByText } = render(<PropertyCard {...mockData} />);

  expect(getByText('1')).toBeInTheDocument();
});

it('renders a number of bedrooms', () => {
  const { getByText } = render(<PropertyCard {...mockData} />);

  expect(getByText('2')).toBeInTheDocument();
});

it('renders a price', () => {
  const { getByText } = render(<PropertyCard {...mockData} />);

  expect(getByText('Price: £100000')).toBeInTheDocument();
});

it('renders a contact link', () => {
  const { getByText } = render(<PropertyCard {...mockData} />);

  expect(getByText('Contact').closest('a')).toHaveAttribute(
    'href',
    'mailto:test@test.com'
  );
});
