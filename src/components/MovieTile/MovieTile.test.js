import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieTile from './MovieTile';
import userEvent from "@testing-library/user-event";
import dayjs from "dayjs";

describe('<MovieTile />', () => {
    let movie

    beforeEach(() => {
        movie = {
            id: 1,
            genre: ['Action', 'Adventure', 'Drama'],
            imageUrl: '/assets/img/some.png',
            title: 'Avengers',
            releaseDate: dayjs('2004-10-01', 'YYYY-MM-DD'),
            rating: 7.8,
            overview: 'Test overview'
        }
        render(<MovieTile info={movie} genreList={['Comedy']}/>)
    })

    test('should mount it', () => {
        expect(screen.getByTestId('MovieTile')).toBeInTheDocument();
    });

    test('should render releaseYear', () => {
        expect(screen.getByText(movie.releaseDate.year())).toBeInTheDocument();
    });

    test('should render title', () => {

        expect(screen.getByText(movie.title)).toBeInTheDocument();
    });

    test('should join genres with comma', () => {
        expect(screen.getByText(movie.genre.join(', '))).toBeInTheDocument();
    });

    test('should render movie image', () => {
        const image = screen.getByAltText(movie.title)
        expect(image).toBeInTheDocument()
        expect(image.src).toEqual(`http://localhost${movie.imageUrl}`)
    });

    test('should render movie context menu', async () => {
        const button = screen.getByTestId('MovieContextMenuButton')
        expect(button).toBeInTheDocument()
        await userEvent.click(button)
        expect(screen.getByText('Edit')).toBeInTheDocument()
        expect(screen.getByText('Delete')).toBeInTheDocument()
    });
});