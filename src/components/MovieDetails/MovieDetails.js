import React, {useState} from 'react';
import PropTypes         from 'prop-types';
import styles            from './MovieDetails.module.css';
import {Grid}            from "@mui/material";

const MovieDetails = ({info}) => {
    const [genreRow] = useState(info.genres.join(', '))

    return (
        <Grid xs={12} ml={4} item={true} container spacing={2}
              className={styles.MovieDetails} data-testid="MovieDetails">
            <Grid xs={3} mt={2} item={true}><img src={info.imageUrl} alt={info.title}/></Grid>
            <Grid xs={9} container item={true} rowSpacing={0}>
                <Grid xs={12} item={true} container alignItems="center">
                    <span className={styles.Title}>{info.title}</span>
                    <span className={styles.VoteAverage}>{info.voteAverage}</span>
                </Grid>
                <Grid xs={12} item={true} className={styles.Genres}>{genreRow}</Grid>
                <Grid xs={12} item={true}>
                    <span className={styles.ReleaseYear}>{info.releaseYear}</span>
                    <span className={styles.RunTime}>{info.runtime}</span>
                </Grid>
                <Grid xs={11} item={true} className={styles.Overview}>{info.overview}</Grid>
            </Grid>
        </Grid>
    )
}

MovieDetails.propTypes = {
    info: PropTypes.shape({
                              imageUrl   : PropTypes.string,
                              title      : PropTypes.string,
                              releaseYear: PropTypes.string,
                              overview   : PropTypes.string,
                              runtime    : PropTypes.string,
                              voteAverage: PropTypes.number,
                              genres     : PropTypes.arrayOf(PropTypes.string)
                          })
};

MovieDetails.defaultProps = {};

export default MovieDetails;
