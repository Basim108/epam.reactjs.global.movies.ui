import React from 'react';
import PropTypes from 'prop-types';
import styles from './GenreRow.module.css';

const GenreRow = ({ genres }) => (
  <div className={styles.GenreRow} data-testid="GenreRow">
    {genres.map((genre, i) => (
      <span key={genre}>
        {i > 0 && ', '}
        {genre}
      </span>
    ))}
  </div>
);

GenreRow.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
};

GenreRow.defaultProps = {
  genres: [],
};

export default GenreRow;
