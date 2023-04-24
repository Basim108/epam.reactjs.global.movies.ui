import { cleanup, render, screen } from '@testing-library/react';
import GenreSelect from './GenreSelect';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe('<GenreSelect />', () => {
  const genreList = ['All', 'Comedy'];
  const selectHandler = jest.fn();

  afterEach(cleanup);

  test('should render all genre passed in props', () => {
    render(<GenreSelect activeGenre="All" genreList={genreList} onSelect={selectHandler} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Comedy')).toBeInTheDocument();
  });

  test('should initially make active genre that comes in props.activeGenre', () => {
    render(<GenreSelect activeGenre="Comedy" genreList={genreList} onSelect={selectHandler} />);
    const allGenre = screen.getByText('All');
    expect(allGenre).toBeInTheDocument();
    expect(allGenre.className).not.toContain('selectedGenre');

    const comedyGenre = screen.getByText('Comedy');
    expect(comedyGenre).toBeInTheDocument();
    expect(comedyGenre.className).toContain('selectedGenre');
  });

  test('should make Comedy active and call onSelect after clicking on Comedy genre', async () => {
    render(<GenreSelect activeGenre="All" genreList={genreList} onSelect={selectHandler} />);

    const allGenre = screen.getByText('All');
    expect(allGenre).toBeInTheDocument();
    expect(allGenre.className).toContain('selectedGenre');

    const comedyGenre = screen.getByText('Comedy');
    expect(comedyGenre).toBeInTheDocument();
    expect(comedyGenre.className).not.toContain('selectedGenre');

    await userEvent.click(comedyGenre);

    expect(allGenre.className).not.toContain('selectedGenre');
    expect(comedyGenre.className).toContain('selectedGenre');
    expect(selectHandler).toHaveBeenCalledTimes(1);
    expect(selectHandler).toHaveBeenCalledWith('Comedy');
  });
});
