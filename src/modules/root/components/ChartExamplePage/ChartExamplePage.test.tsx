import React from 'react';
import { render, screen } from '@testing-library/react';
import ChartExample from '_/modules/root/components/ChartExamplePage/ChartExamplePage';

test('renders', () => {
  render(<ChartExample />);
  const element = screen.getByText(/Chart example/i);
  expect(element).toBeInTheDocument();
});
