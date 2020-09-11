import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../components/Alert';

test('displays an error message', () => {
  const { getByText, asFragment } = render(<Alert message="Error!" />);

  expect(getByText(/Error/).textContent).toBe('Error!');
  expect(asFragment()).toMatchSnapshot();
});

test('displays an success message', () => {
  const { getByText, asFragment } = render(<Alert message="Success!" />);

  expect(getByText(/Success/).textContent).toBe('Success!');
  expect(asFragment()).toMatchSnapshot();
});

test('does not render an error or success message if message props is empty', () => {
  const { asFragment } = render(<Alert message="" />);

  expect(asFragment()).toMatchSnapshot();
});
