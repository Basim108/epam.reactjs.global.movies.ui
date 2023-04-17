import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './GenreSelect.module.css';
import { Grid } from '@mui/material';

const GenreSelect = ({ activeGenre, genreList, onSelect }) => {
  const buildClasses = (title, active) => styles.genre + (title === active ? ' ' + styles.selectedGenre : '');

  const [genreInfoList, setGenreInfoList] = useState(
    genreList.map(title => ({
      title,
      className: buildClasses(title, activeGenre),
    })),
  );
  const selectGenreHandler = selectedGenre => {
    setGenreInfoList(prevList =>
      prevList.map(info => {
        info.className = buildClasses(info.title, selectedGenre);
        return info;
      }),
    );
    onSelect(selectedGenre);
  };

  return (
    <Grid xs={8} item className={styles.genreSelect} container alignItems="center" data-testid="GenreSelect">
      {genreInfoList.map(info => (
        <span key={info.title} className={info.className} onClick={() => selectGenreHandler(info.title)} data-genre={info.title}>
          {' '}
          {info.title}{' '}
        </span>
      ))}
    </Grid>
  );
};

GenreSelect.propTypes = {
  genreList: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default GenreSelect;
