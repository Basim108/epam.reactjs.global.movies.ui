import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  test('should mount Header', () => {
    render(<Header />);
    expect(screen.getByTestId('Header')).toBeInTheDocument();
  });

  test('should mount search view when isSearchView is true', () => {
    render(<Header isSearchView={true} isMovieDetailsView={false} />);
    expect(screen.getByTestId('SearchForm')).toBeInTheDocument();

    expect(screen.queryByTestId('MovieDetails')).not.toBeInTheDocument();
    expect(screen.queryByTestId('SearchViewButton')).not.toBeInTheDocument();
  });

  test('should mount movie details view when isMovieDetailsView is true', () => {
    render(<Header isSearchView={false} isMovieDetailsView={true} />);
    expect(screen.getByTestId('MovieDetails')).toBeInTheDocument();
    expect(screen.getByTestId('SearchViewButton')).toBeInTheDocument();

    expect(screen.queryByTestId('SearchForm')).not.toBeInTheDocument();
  });
});
