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
  const [moviesInfo, setMoviesInfo] = useState({ totalAmount: 0, data: [] });
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
        if (!movies || !Array.isArray(movies.data)) {
          console.error('unsupported api response', movies);
          throw new Error('unsupported api response');
        }
        setMoviesInfo(movies);
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
      <MovieCount count={moviesInfo.totalAmount} />
      <MovieList movieList={moviesInfo.data} onMovieClick={info => setSelectedMovie(info)} />
    </Container>
  );
};

export default MovieListPage;
