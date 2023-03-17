import {fireEvent, render, screen} from '@testing-library/react';
import GenreSelect                 from './GenreSelect';
import {act}                       from "react-dom/test-utils";
import '@testing-library/jest-dom/extend-expect';

describe('<GenreSelect />', () => {
    test('it should mount', () => {
        render(<GenreSelect activeGenre="All" genreList={['All']} onSelect={() => null}/>);
        const genreSelect = screen.getByTestId('GenreSelect');
        expect(genreSelect).toBeInTheDocument();
    });

    test('it should render all genre passed in props', () => {
        render(<GenreSelect activeGenre="All" genreList={['All', 'Comedy']} onSelect={() => null}/>);
        const allGenre = screen.getByText('All');
        expect(allGenre).toBeInTheDocument();

        const comedyGenre = screen.getByText('Comedy');
        expect(comedyGenre).toBeInTheDocument();
    });

    test('given Comedy as activeGenre should make it active', () => {
        render(<GenreSelect activeGenre="Comedy" genreList={['All', 'Comedy']} onSelect={() => null}/>);
        const allGenre = screen.getByText('All');
        expect(allGenre).toBeInTheDocument();
        expect(allGenre).not.toHaveClass('selectedGenre')

        const comedyGenre = screen.getByText('Comedy');
        expect(comedyGenre).toBeInTheDocument();
        expect(comedyGenre).toHaveClass('selectedGenre')
    });

    test('when click on Comedy genre should make it active and call onSelect', () => {
        const onSelect = jest.fn()
        render(<GenreSelect activeGenre="All" genreList={['All', 'Comedy']} onSelect={onSelect}/>);
        const allGenre = screen.getByText('All');
        expect(allGenre).toBeInTheDocument();
        expect(allGenre).toHaveClass('selectedGenre')

        const comedyGenre = screen.getByText('Comedy');
        expect(comedyGenre).toBeInTheDocument();
        expect(comedyGenre).not.toHaveClass('selectedGenre')

        act(() => fireEvent.click(comedyGenre))

        expect(allGenre).not.toHaveClass('selectedGenre')
        expect(comedyGenre).toHaveClass('selectedGenre')
        expect(onSelect).toHaveBeenCalledTimes(1)
        expect(onSelect).toHaveBeenCalledWith('Comedy')
    });
});