import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './MovieForm.module.css';
import Dialog from "../Dialog/Dialog";
import {Box, Input, InputLabel, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";
import {DatePicker} from "@mui/x-date-pickers";
import enGb from 'dayjs/locale/en-gb';

const MovieForm = ({
                       info: {id, title, releaseDate, imageUrl, rating, genre, runtime, overview},
                       genreList,
                       onSubmit,
                       onClose,
                       isVisible
                   }) => {
    const [updatedTitle, setUpdatedTitle] = useState(title)
    const [updatedReleaseDate, setUpdatedReleaseDate] = useState(releaseDate ? dayjs(releaseDate, 'YYYY-MM-DD') : null)
    const [updatedImageUrl, setUpdatedImageUrl] = useState(imageUrl)
    const [updatedRating, setUpdatedRating] = useState(rating)
    const [updatedGenre, setUpdatedGenre] = useState(genre || [])
    const [updatedRuntime, setUpdatedRuntime] = useState(runtime)
    const [updatedOverview, setUpdatedOverview] = useState(overview)

    const isEditDialog = !!id || false
    const resetHandler = () => {
        setUpdatedTitle(title || '')
        setUpdatedReleaseDate(releaseDate ? dayjs(releaseDate, 'YYYY-MM-DD') : null)
        setUpdatedImageUrl(imageUrl || '')
        setUpdatedRating(rating || '')
        setUpdatedGenre(genre || [])
        setUpdatedRuntime(runtime || '')
        setUpdatedOverview(overview || '')
    }
    const submitHandler = () => {
        onSubmit({
            id,
            title: updatedTitle,
            releaseDate: updatedReleaseDate,
            imageUrl: updatedImageUrl,
            rating: updatedRating,
            genre: updatedGenre,
            runtime: updatedRuntime,
            overview: updatedOverview
        })
    }
    return isVisible && (
        <div className={styles.MovieForm} data-testid="MovieForm">
            <Dialog title={isEditDialog ? 'Edit Movie' : 'Add Movie'}
                    onReset={resetHandler}
                    onSubmit={submitHandler}
                    onClose={onClose}
            >
                <Box
                    sx={{
                        '& .MuiTextField-root': {m: 2, width: '50ch'},
                    }}
                >
                    <div>
                        <TextField id="movie-form-title" data-testid="movie-form-title"
                                   label="Title"
                                   value={updatedTitle}
                                   variant="standard"
                                   required={true}
                                   onChange={e => setUpdatedTitle(e.target.value)}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={enGb}>
                            <DatePicker id="movie-form-release-date"
                                        value={updatedReleaseDate}
                                        slotProps={{textField: {variant: 'standard'}}}
                                        onChange={date => setUpdatedReleaseDate(date)}
                                        label="Release Date"
                            />
                        </LocalizationProvider>
                    </div>
                    <div>
                        <TextField id="movie-form-image-url" data-testid="movie-form-image-url"
                                   label="url"
                                   value={updatedImageUrl}
                                   variant="standard"
                                   onChange={e => setUpdatedImageUrl(e.target.value)}
                        />
                        <TextField id="movie-form-rating" data-testid="movie-form-rating"
                                   label="Rating"
                                   value={updatedRating}
                                   variant="standard"
                                   onChange={e => setUpdatedRating(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField id="movie-form-genre" data-testid="movie-form-genre"
                                   label="Genre"
                                   value={updatedGenre}
                                   variant="standard"
                                   placeholder="Select Genre"
                                   select
                                   inputProps={{multiple: true}}
                                   onChange={e => setUpdatedGenre(e.target.value)}
                        >
                            {genreList.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                        </TextField>
                        <TextField id="movie-form-runtime" data-testid="movie-form-runtime"
                                   label="Runtime"
                                   value={updatedRuntime}
                                   variant="standard"
                                   onChange={e => setUpdatedRuntime(e.target.value)}
                        />
                    </div>
                    <FormControl sx={{m: 2, width: '103ch'}} variant="standard">
                        <InputLabel htmlFor={overview}>Overview</InputLabel>
                        <Input id="movie-form-overview" data-testid="movie-form-overview"
                               multiline
                               value={updatedOverview}
                               variant="standard"
                               onChange={e => setUpdatedOverview(e.target.value)}
                        />
                    </FormControl>
                </Box>
            </Dialog>
        </div>
    )
}

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
        overview: PropTypes.string
    }),
    isVisible: PropTypes.bool,
    onSubmit: PropTypes.func
};

MovieForm.defaultProps = {};

export default MovieForm;
