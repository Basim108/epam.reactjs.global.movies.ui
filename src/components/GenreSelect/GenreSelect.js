import React from 'react';
import PropTypes from 'prop-types';
import styles from './GenreSelect.module.css';

const GenreSelect = () => (
  <div className={styles.GenreSelect} data-testid="GenreSelect">
    GenreSelect Component
  </div>
);

GenreSelect.propTypes = {};

GenreSelect.defaultProps = {};

export default GenreSelect;
