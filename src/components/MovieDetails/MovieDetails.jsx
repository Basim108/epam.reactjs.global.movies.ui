import PropTypes from 'prop-types';
import styles from './MovieDetails.module.css';
import { Grid } from '@mui/material';
import GenreRow from '../GenreRow/GenreRow';

const MovieDetails = ({ info }) => {
  const releaseYear = info.release_date.slice(0, 4);
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
