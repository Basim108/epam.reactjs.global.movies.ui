import React            from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieTile        from './MovieTile';
import userEvent        from "@testing-library/user-event";

describe('<MovieTile />', () => {
    const movie = {
        genres     : ['Action', 'Adventure', 'Drama'],
        imageUrl   : '/assets/img/some.png',
        title      : 'Avengers',
        releaseYear: 2004
    }

    test('should mount it', () => {
        render(<MovieTile {...movie} />);
        expect(screen.getByTestId('MovieTile')).toBeInTheDocument();
    });

    test('should render releaseYear', () => {
        render(<MovieTile {...movie} />);
        expect(screen.getByText(movie.releaseYear)).toBeInTheDocument();
    });

    test('should render title', () => {
        render(<MovieTile {...movie} />);
        expect(screen.getByText(movie.title)).toBeInTheDocument();
    });

    test('should join genres with comma', () => {
        render(<MovieTile {...movie} />);
        expect(screen.getByText(movie.genres.join(', '))).toBeInTheDocument();
    });

    test('should render movie image', () => {
        render(<MovieTile {...movie} />);
        const image = screen.getByAltText(movie.title)
        expect(image).toBeInTheDocument()
        expect(image.src).toEqual(`http://localhost${movie.imageUrl}`)
    });

    test('should render movie context menu', async() => {
        render(<MovieTile {...movie} />);
        const button = screen.getByTestId('MovieContextMenuButton')
        expect(button).toBeInTheDocument()
        await userEvent.click(button)
        expect(screen.getByText('Edit')).toBeInTheDocument()
        expect(screen.getByText('Delete')).toBeInTheDocument()
    });
});