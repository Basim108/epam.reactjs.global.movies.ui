import { cleanup, render, screen, act, waitFor } from '@testing-library/react';
import GenreSelect from './GenreSelect';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe('<GenreSelect />', () => {
  const genreList = ['Comedy'];
  const selectHandler = jest.fn();

  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockIf(/^https?:\/\/localhost:4000.*$/, req => {
      if (req.url.startsWith('http://localhost:4000/genres'))
        return Promise.resolve({
          status: 200,
          body: JSON.stringify(genreList),
        });
    });
  });
  afterEach(cleanup);

  test('should render all genre passed in props', async () => {
    await act(async () => {
      render(<GenreSelect activeGenre="All" onSelect={selectHandler} />);
    });
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Comedy')).toBeInTheDocument();
  });

  test('should initially make active genre that comes in props.activeGenre', async () => {
    await act(async () => {
      render(<GenreSelect activeGenre="Comedy" onSelect={selectHandler} />);
    });
    const allGenre = screen.getByText('All');
    expect(allGenre).toBeInTheDocument();
    expect(allGenre.className).not.toContain('selectedGenre');

    const comedyGenre = screen.getByText('Comedy');
    expect(comedyGenre).toBeInTheDocument();
    expect(comedyGenre.className).toContain('selectedGenre');
  });

  test('should make Comedy active and call onSelect after clicking on Comedy genre', async () => {
    await act(async () => {
      render(<GenreSelect activeGenre="All" onSelect={selectHandler} />);
    });
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
