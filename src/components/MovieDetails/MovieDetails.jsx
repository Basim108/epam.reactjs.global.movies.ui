import PropTypes from 'prop-types';
import styles from './MovieDetails.module.css';
import { Grid } from '@mui/material';
import GenreRow from '../GenreRow/GenreRow';
import { getReleaseYear } from '../../shared/releaseDateAdapter';
const MovieDetails = ({ info }) => {
  const releaseYear = getReleaseYear(info.release_date);
  return (
    <Grid xs={12} ml={4} item container spacing={2} className={styles.movieDetails} data-testid="MovieDetails">
      <Grid xs={3} mt={2} item>
        <img src={info.poster_path} alt={info.title} className={styles.poster} onError={e => (e.target.src = 'poster-not-found.png')} />
      </Grid>
      <Grid xs={9} container item rowSpacing={0}>
        <Grid xs={12} item container alignItems="center">
          <span className={styles.title}>{info.title}</span>
          <span className={styles.voteAverage}>{info.vote_average}</span>
        </Grid>
        <Grid xs={12} item className={styles.genres}>
          <GenreRow genres={info.genres} />
        </Grid>
        <Grid xs={12} item>
          <span className={styles.releaseYear}>{releaseYear}</span>
          <span className={styles.runTime}>{info.runtime}</span>
        </Grid>
        <Grid xs={11} item className={styles.overview}>
          {info.overview}
        </Grid>
      </Grid>
    </Grid>
  );
};

MovieDetails.propTypes = {
  info: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    releaseYear: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.string,
    voteAverage: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
  }),
};

MovieDetails.defaultProps = {};

export default MovieDetails;
