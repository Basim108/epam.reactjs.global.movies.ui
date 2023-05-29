import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieList from './MovieList';

describe('<MovieList />', () => {
  const testMovieDetails = {
    id: 181808,
    title: 'Star Wars: The Last Jedi',
    tagline: 'The Saga Continues',
    vote_average: 7.1,
    vote_count: 4732,
    release_date: '2018-02-07',
    poster_path: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
    overview:
      'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
    budget: 200000000,
    revenue: 1325937250,
    genres: ['Fantasy', 'Adventure', 'Science Fiction'],
    runtime: '2h 32min',
  };

  test('it should mount', () => {
    render(<MovieList movieList={[testMovieDetails]} />);
    const movieListPage = screen.getByTestId('MovieList');
    expect(movieListPage).toBeInTheDocument();
  });
});
