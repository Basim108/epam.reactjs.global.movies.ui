import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './GenreSelect.module.css';
import { Grid } from '@mui/material';

const GenreSelect = ({ activeGenre, onSelect }) => {
  const buildClasses = (title, active) => styles.genre + (title === active ? ' ' + styles.selectedGenre : '');
  const [genreInfoList, setGenreInfoList] = useState(
    ['All'].map(title => ({
      title,
      className: buildClasses(title, activeGenre),
    })),
  );
  useEffect(() => {
    const controller = new AbortController();
    fetch('http://localhost:4000/genres', { signal: controller.signal })
      .then(async res => {
        const genreList = await res.json();
        // todo: get genres from api with statistic, show 5 most popular genres and other is dropdown menu
        // for now it is enough to show only 5 first genres
        const list = ['All', ...genreList.filter((_, idx) => idx <= 5)];
        setGenreInfoList(
          list
            .filter((_, idx) => idx <= 5)
            .map(title => ({
              title,
              className: buildClasses(title, activeGenre),
            })),
        );
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('successfully aborted fetching genres');
        } else {
          console.error('failed to fetch genres', err);
        }
      });
    return () => controller.abort();
  }, [activeGenre]);
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
  activeGenre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default GenreSelect;
