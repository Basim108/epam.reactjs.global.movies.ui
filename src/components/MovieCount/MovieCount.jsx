import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCount.module.css';
import { Grid } from '@mui/material';

const MovieCount = ({ count }) => (
  <Grid xs={12} item className={styles.movieCount} data-testid="MovieCount">
    <span>{count}</span> movies found
  </Grid>
);

MovieCount.propTypes = {
  count: PropTypes.number,
};

MovieCount.defaultProps = {
  count: 0,
};

export default MovieCount;