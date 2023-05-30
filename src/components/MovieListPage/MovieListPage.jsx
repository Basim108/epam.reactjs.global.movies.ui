import React, { useEffect, useState } from 'react';
import styles from './MovieListPage.module.css';
import { Container, Grid } from '@mui/material';
import ToolBar from '../ToolBar/ToolBar';
import GenreSelect from '../GenreSelect/GenreSelect';
import SortControl from '../SortControl/SortControl';
import { RELEASE_DATE } from '../SortControl/constant';
import MovieList from '../MovieList/MovieList';
import MovieCount from '../MovieCount/MovieCount';
import SearchViewButton from '../SearchViewButton/SearchViewButton';
import MovieDetails from '../MovieDetails/MovieDetails';
import SearchForm from '../SearchForm/SearchForm';

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [movieCount, setMovieCount] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [activeGenre, setActiveGenre] = useState('All');
  const [sortBy, setSortBy] = useState(RELEASE_DATE);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const queryParams = new URLSearchParams({
      sortBy: sortBy === RELEASE_DATE ? 'release_date' : 'title',
      sortOrder: 'asc',
    });
    if (search) {
      queryParams.append('search', search);
      queryParams.append('searchBy', 'title');
    }
    if (activeGenre !== 'All') {
      queryParams.append('filter', activeGenre);
    }

    fetch('http://localhost:4000/movies?' + queryParams, { signal: controller.signal })
      .then(async res => {
        const movies = await res.json();
        if (!movies || typeof Number(movies.totalAmount) !== 'number' || !Array.isArray(movies.data)) {
          console.error('unsupported api response', movies);
          throw new Error('unsupported api response');
        }
        setMovieCount(movies.totalAmount);
        setMovieList(movies.data);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('successfully aborted fetching movies by', queryParams);
        } else {
          console.error('failed to fetch movies', queryParams, err);
        }
      });
    return () => controller.abort();
  }, [search, activeGenre, sortBy]);

  const headerBgClassName = selectedMovie ? styles.detailsViewBg : styles.searchViewBg;
  return (
    <Container className={styles.movieListPage} fixed data-testid="MovieListPage">
      <Grid xs={12} container item className={`${styles.appHeader} ${headerBgClassName}`} data-testid="Header">
        <Grid xs={12} mt={2} container justifyContent="space-between" item>
          <Grid ml={4} xs={2} item className={styles.appLogo}>
            netflix<span>roulette</span>
          </Grid>
          {selectedMovie && <SearchViewButton onClick={() => setSelectedMovie(null)} />}
        </Grid>
        {selectedMovie ? <MovieDetails info={{ ...selectedMovie }} /> : <SearchForm onSearch={query => setSearch(query)} />}
      </Grid>
      <ToolBar>
        <GenreSelect activeGenre={activeGenre} onSelect={genre => setActiveGenre(genre)} />
        <SortControl onChange={value => setSortBy(value)} sortBy={RELEASE_DATE} />
      </ToolBar>
      <MovieCount count={movieCount} />
      <MovieList movieList={movieList} onMovieClick={info => setSelectedMovie(info)} />
    </Container>
  );
};

export default MovieListPage;

// const ExampleMovieInfo = {
//     "id": 337167,
//     "title": "Fifty Shades Freed",
//     "tagline": "Don't miss the climax",
//     "vote_average": 6.1,
//     "vote_count": 1195,
//     "release_date": "2018-02-07",
//     "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
//     "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
//     "budget": 55000000,
//     "revenue": 136906000,
//     "genres": [
//         "Drama",
//         "Romance"
//     ],
//     "runtime": 106
// };
