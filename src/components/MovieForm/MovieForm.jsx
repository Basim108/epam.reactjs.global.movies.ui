import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MovieForm.module.css';
import Dialog from '../Dialog/Dialog';
import { Box, Input, InputLabel, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import enGb from 'dayjs/locale/en-gb';

const MovieForm = ({ info, genreList, onSubmit, onClose, isVisible }) => {
  // QUESTION: would it be better to use useReducer here? or it will be over-complication?
  const [movieInfo, setMovieInfo] = useState({
    ...info,
    genre: info.genre ? [...info.genre] : [],
    releaseDate: info.releaseDate ? dayjs(info.releaseDate, 'YYYY-MM-DD') : null,
  });

  const isEditDialog = !!movieInfo.id || false;
  const resetHandler = () =>
    setMovieInfo(() => ({
      ...info,
      genre: info.genre ? [...info.genre] : [],
      releaseDate: info.releaseDate ? dayjs(info.releaseDate, 'YYYY-MM-DD') : null,
    }));

  return (
    isVisible && (
      <div className={styles.movieForm} data-testid="MovieForm">
        <Dialog
          title={isEditDialog ? 'Edit Movie' : 'Add Movie'}
          onReset={resetHandler}
          onSubmit={() => onSubmit(movieInfo)}
          onClose={onClose}
        >
          <Box
            sx={{
              '& .MuiTextField-root': { m: 2, width: '50ch' },
            }}
          >
            <div>
              <TextField
                id="movie-form-title"
                data-testid="movie-form-title"
                label="Title"
                value={movieInfo.title}
                variant="standard"
                onChange={e => setMovieInfo(prev => ({ ...prev, title: e.target.value }))}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={enGb}>
                <DatePicker
                  id="movie-form-release-date"
                  value={movieInfo.releaseDate}
                  slotProps={{ textField: { variant: 'standard' } }}
                  onChange={date => setMovieInfo(prev => ({ ...prev, releaseDate: date }))}
                  label="Release Date"
                />
              </LocalizationProvider>
            </div>
            <div>
              <TextField
                id="movie-form-image-url"
                data-testid="movie-form-image-url"
                label="url"
                value={movieInfo.imageUrl}
                variant="standard"
                onChange={e => setMovieInfo(prev => ({ ...prev, imageUrl: e.target.value }))}
              />
              <TextField
                id="movie-form-rating"
                data-testid="movie-form-rating"
                label="Rating"
                value={movieInfo.rating}
                variant="standard"
                onChange={e => setMovieInfo(prev => ({ ...prev, rating: e.target.value }))}
              />
            </div>
            <div>
              <TextField
                id="movie-form-genre"
                data-testid="movie-form-genre"
                label="Genre"
                value={movieInfo.genre}
                variant="standard"
                placeholder="Select Genre"
                select
                inputProps={{ multiple: true }}
                onChange={e => setMovieInfo(prev => ({ ...prev, genre: e.target.value }))}
              >
                {genreList.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="movie-form-runtime"
                data-testid="movie-form-runtime"
                label="Runtime"
                value={movieInfo.runtime}
                variant="standard"
                onChange={e => setMovieInfo(prev => ({ ...prev, runtime: e.target.value }))}
              />
            </div>
            <FormControl sx={{ m: 2, width: '103ch' }} variant="standard">
              <InputLabel htmlFor="movie-form-overview">Overview</InputLabel>
              <Input
                id="movie-form-overview"
                data-testid="movie-form-overview"
                multiline
                value={movieInfo.overview}
                variant="standard"
                onChange={e => setMovieInfo(prev => ({ ...prev, overview: e.target.value }))}
              />
            </FormControl>
          </Box>
        </Dialog>
      </div>
    )
  );
};

MovieForm.propTypes = {
  genreList: PropTypes.arrayOf(PropTypes.string),
  info: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    imageUrl: PropTypes.string,
    rating: PropTypes.number,
    genre: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.string,
    overview: PropTypes.string,
  }),
  isVisible: PropTypes.bool,
  onSubmit: PropTypes.func,
};

MovieForm.defaultProps = {};

export default MovieForm;
