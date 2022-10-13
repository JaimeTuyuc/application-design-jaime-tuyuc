import React, { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Application design/i);
  expect(linkElement).toBeInTheDocument();
});
