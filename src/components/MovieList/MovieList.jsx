import styles from './MovieList.module.css';
import { Grid } from '@mui/material';
import MovieTile from '../MovieTile/MovieTile';

const MovieList = ({ movieList, onMovieClick }) => {
  return (
    <Grid xs={12} item container justifyContent="space-between" className={styles.movieTileList} data-testid="MovieList">
      {movieList.map(info => (
        <MovieTile key={info.id} movie={info} onClick={onMovieClick} />
      ))}
    </Grid>
  );
};

export default MovieList;
