import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GenreSelect from './GenreSelect';

describe('<GenreSelect />', () => {
  test('it should mount', () => {
    render(<GenreSelect />);
    
    const genreSelect = screen.getByTestId('GenreSelect');

    expect(genreSelect).toBeInTheDocument();
  });
});