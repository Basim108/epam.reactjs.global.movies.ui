import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieCount from './MovieCount';

describe('<MovieCount />', () => {
  test('should mount it', () => {
    render(<MovieCount />);
    const movieCount = screen.getByTestId('MovieCount');
    expect(movieCount).toBeInTheDocument();
  });

  test('should mount count props', () => {
    render(<MovieCount count={39} />);
    const movieCount = screen.getByText('39');
    expect(movieCount).toBeInTheDocument();
  });

  test('should mount default count', () => {
    render(<MovieCount />);
    const movieCount = screen.getByText('0');
    expect(movieCount).toBeInTheDocument();
  });
});
