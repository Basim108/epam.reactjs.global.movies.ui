import {cleanup, render, screen} from '@testing-library/react';
import GenreSelect               from './GenreSelect';
import {act}            from "react-dom/test-utils";
import '@testing-library/jest-dom/extend-expect';
import userEvent        from "@testing-library/user-event";

describe('<GenreSelect />', () => {
    const genreList = ['All', 'Comedy']
    const selectHandler = jest.fn()
    
    afterEach(cleanup)
    
    test('should render all genre passed in props', () => {
        render(<GenreSelect activeGenre="All" genreList={genreList} onSelect={selectHandler}/>)
        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByText('Comedy')).toBeInTheDocument();
    });

    test('should initially make active genre that comes in props.activeGenre', () => {
        render(<GenreSelect activeGenre="Comedy" genreList={genreList} onSelect={selectHandler}/>)
        const allGenre = screen.getByText('All')
        expect(allGenre).toBeInTheDocument();
        expect(allGenre).not.toHaveClass('selectedGenre')

        const comedyGenre = screen.getByText('Comedy')
        expect(comedyGenre).toBeInTheDocument();
        expect(comedyGenre).toHaveClass('selectedGenre')
    });

    test('should make Comedy active and call onSelect after clicking on Comedy genre', async () => {
        render(<GenreSelect activeGenre="All" genreList={genreList} onSelect={selectHandler}/>)
        
        const allGenre = screen.getByText('All')
        expect(allGenre).toBeInTheDocument();
        expect(allGenre).toHaveClass('selectedGenre')

        const comedyGenre = screen.getByText('Comedy')
        expect(comedyGenre).toBeInTheDocument();
        expect(comedyGenre).not.toHaveClass('selectedGenre')

        await userEvent.click(comedyGenre)

        expect(allGenre).not.toHaveClass('selectedGenre')
        expect(comedyGenre).toHaveClass('selectedGenre')
        expect(selectHandler).toHaveBeenCalledTimes(1)
        expect(selectHandler).toHaveBeenCalledWith('Comedy')
    });
});