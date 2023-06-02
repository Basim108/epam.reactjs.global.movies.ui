import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieDetails from './MovieDetails';

describe('<MovieDetails />', () => {
  const info = {
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
  };

  beforeEach(() => {
    render(<MovieDetails info={info} />);
  });

  test('should render MovieDetails content', () => {
    expect(screen.getByTestId('MovieDetails')).toBeInTheDocument();

    const image = screen.getByAltText(info.title);
    expect(image).toBeInTheDocument();
    expect(image.src).toEqual(info.poster_path);

    expect(screen.getByText(info.title)).toBeInTheDocument();
    expect(screen.getByText(info.vote_average)).toBeInTheDocument();
    expect(screen.getByText('2017')).toBeInTheDocument();
    expect(screen.getByText(info.runtime)).toBeInTheDocument();
    expect(screen.getByText(info.overview)).toBeInTheDocument();

    expect(screen.getByText('Fantasy')).toBeInTheDocument();
    expect(screen.getByText(', Adventure')).toBeInTheDocument();
    expect(screen.getByText(', Science Fiction')).toBeInTheDocument();
  });
});
