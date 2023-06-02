import React from 'react';
import { act, cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieListPage from './MovieListPage';

describe('<MovieListPage />', () => {
  const movieList = {
    totalAmount: 1,
    data: [
      {
        id: 181808,
        title: 'Star Wars: The Last Jedi',
        tagline: 'The Saga Continues',
        vote_average: 7.1,
        vote_count: 4732,
        release_date: '2017-12-1',
        poster_path: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
        overview:
          'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
        budget: 200000000,
        revenue: 1325937250,
        genres: ['Fantasy', 'Adventure', 'Science Fiction'],
        runtime: '2h 32min',
      },
    ],
  };
  const genreList = ['All', 'Comedy'];

  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockIf(/^https?:\/\/localhost:4000.*$/, req => {
      if (req.url.startsWith('http://localhost:4000/movies'))
        return Promise.resolve({
          status: 200,
          body: JSON.stringify(movieList),
        });
      if (req.url.startsWith('http://localhost:4000/genres'))
        return Promise.resolve({
          status: 200,
          body: JSON.stringify(genreList),
        });
    });
  });

  afterEach(cleanup);

  test('it should mount', async () => {
    await act(async () => render(<MovieListPage />));
    const movieListPage = screen.getByTestId('MovieListPage');
    expect(movieListPage).toBeInTheDocument();
  });
});
