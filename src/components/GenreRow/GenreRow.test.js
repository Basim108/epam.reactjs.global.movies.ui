import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GenreRow from './GenreRow';

describe('<GenreRow />', () => {
  test('should not fail when genres is an empty array', () => {
    render(<GenreRow genres={[]} />);
    expect(screen.getByTestId('GenreRow')).toBeInTheDocument();
  });

  test('should put delimiter between genres', () => {
    render(<GenreRow genres={['Comedy', 'Drama']} />);
    expect(screen.getByText(', Drama')).toBeInTheDocument();
  });

  test('should not put delimiter before first genre', () => {
    render(<GenreRow genres={['Comedy', 'Drama']} />);
    expect(screen.queryByText(', Comedy')).not.toBeInTheDocument();
  });
});
