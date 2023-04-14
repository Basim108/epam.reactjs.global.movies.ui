import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styles from './MovieTile.module.css'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {
    usePopupState,
    bindTrigger,
    bindMenu,
} from 'material-ui-popup-state/hooks'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Box, Container, Grid} from "@mui/material";

const GENRE_DELIMITER = ', '

const MovieTile = ({imageUrl, title, releaseYear, genres}) => {
    const popupState = usePopupState({variant: 'popover'})
    return (
        <Grid className={styles.movieTile} item
              container
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{xs: 'column', sm: 'row'}}
              data-testid="MovieTile"
        >
            <Grid xs={12} item>
                <div className={styles.movieMenu}>
                    <Button variant="text"
                            data-testid="MovieContextMenuButton"
                            {...bindTrigger(popupState)}>
                        <MoreVertIcon />
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <div className={styles.movieMenuContext}>
                            <MenuItem className={styles.movieMenuItem}
                                      onClick={popupState.close}>
                                <EditIcon/><span>Edit</span>
                            </MenuItem>
                            <MenuItem className={styles.movieMenuItem}
                                      onClick={popupState.close}>
                                <DeleteIcon/><span>Delete</span>
                            </MenuItem>
                        </div>
                    </Menu>
                </div>
                <img src={imageUrl} alt={title}/>
            </Grid>
            <Grid xs={4} item className={styles.title}>{title}</Grid>
            <Grid xs={6} item className={styles.releaseYear}><span>{releaseYear}</span></Grid>
            <Grid xs={8} item className={styles.genres}>{genres.join(GENRE_DELIMITER)}</Grid>
        </Grid>
    )
};

MovieTile.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MovieTile;
