import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieTile from './MovieTile';
import userEvent from '@testing-library/user-event';

describe('<MovieTile />', () => {
  const movie = {
    genres: ['Action', 'Adventure', 'Drama'],
    poster_path: '/assets/img/some.png',
    title: 'Avengers',
    release_date: '2004-12-1',
  };

  beforeEach(() => {
    render(<MovieTile movie={movie} />);
  });

  test('should render components content', () => {
    expect(screen.getByText('2004')).toBeInTheDocument();
    expect(screen.getByText(movie.title)).toBeInTheDocument();

    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText(', Adventure')).toBeInTheDocument();
    expect(screen.getByText(', Drama')).toBeInTheDocument();

    const image = screen.getByAltText(movie.title);
    expect(image).toBeInTheDocument();
    expect(image.src).toEqual(`http://localhost${movie.poster_path}`);
  });

  test('should render movie context menu', async () => {
    const button = screen.getByTestId('MovieContextMenuButton');
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });
});
