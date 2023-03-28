import React            from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieDetails     from './MovieDetails';

describe('<MovieDetails />', () => {
    const info = {
        "id"         : 181808,
        "title"      : "Star Wars: The Last Jedi",
        "tagline"    : "The Saga Continues",
        "voteAverage": 7.1,
        "vote_count" : 4732,
        "releaseYear": '2017',
        "imageUrl"   : "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        "overview"   : "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
        "budget"     : 200000000,
        "revenue"    : 1325937250,
        "genres"     : [
            "Fantasy",
            "Adventure",
            "Science Fiction"
        ],
        "runtime"    : '2h 32min'
    }
    
    beforeEach(() => {
        render(<MovieDetails info={info} />);
    })
    
    test('should mount MovieDetails component', () => {
        expect(screen.getByTestId('MovieDetails')).toBeInTheDocument();
    });

    test('should movie post image', () => {
        const image = screen.getByAltText(info.title)
        expect(image).toBeInTheDocument();
        expect(image.src).toEqual(info.imageUrl);
    });

    test('should mount movie title', () => {
        expect(screen.getByText(info.title)).toBeInTheDocument();
    });

    test('should mount vote average', () => {
        expect(screen.getByText(info.voteAverage)).toBeInTheDocument();
    });

    test('should mount genres', () => {
        expect(screen.getByText(info.genres.join(', '))).toBeInTheDocument();
    });

    test('should mount releaseYear', () => {
        expect(screen.getByText(info.releaseYear)).toBeInTheDocument();
    });

    test('should mount runtime', () => {
        expect(screen.getByText(info.runtime)).toBeInTheDocument();
    });

    test('should mount overview', () => {
        expect(screen.getByText(info.overview)).toBeInTheDocument();
    });

});