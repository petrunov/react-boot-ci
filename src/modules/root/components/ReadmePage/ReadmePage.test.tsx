import React from 'react';
import { render, screen } from '@testing-library/react';
import ReadmePage from './ReadmePage';

test('renders the heading', () => {
  render(<ReadmePage />);
  const linkElement = screen.getByText(/The following commads were created in the project/i);
  expect(linkElement).toBeInTheDocument();
});
