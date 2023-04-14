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

    beforeEach(() => {
        render(<MovieTile {...movie} />);
    })

    test('should mount it', () => {
        expect(screen.getByTestId('MovieTile')).toBeInTheDocument();
    });

    test('should render releaseYear', () => {
        expect(screen.getByText(movie.releaseYear)).toBeInTheDocument();
    });

    test('should render title', () => {
        expect(screen.getByText(movie.title)).toBeInTheDocument();
    });

    test('should render all genres', () => {
        expect(screen.getByText('Action')).toBeInTheDocument();
        expect(screen.getByText(', Adventure')).toBeInTheDocument();
        expect(screen.getByText(', Drama')).toBeInTheDocument();
    });

    test('should render movie image', () => {
        const image = screen.getByAltText(movie.title)
        expect(image).toBeInTheDocument()
        expect(image.src).toEqual(`http://localhost${movie.imageUrl}`)
    });

    test('should render movie context menu', async() => {
        const button = screen.getByTestId('MovieContextMenuButton')
        expect(button).toBeInTheDocument()
        await userEvent.click(button)
        expect(screen.getByText('Edit')).toBeInTheDocument()
        expect(screen.getByText('Delete')).toBeInTheDocument()
    });
});