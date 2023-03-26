import React, {useState} from 'react'
import PropTypes         from 'prop-types'
import styles            from './MovieTile.module.css'
import Button            from '@mui/material/Button'
import Menu              from '@mui/material/Menu'
import MenuItem          from '@mui/material/MenuItem'
import {
    usePopupState,
    bindTrigger,
    bindMenu,
}                        from 'material-ui-popup-state/hooks'
import EditIcon          from '@mui/icons-material/Edit'
import DeleteIcon        from '@mui/icons-material/Delete'
import MoreVertIcon      from '@mui/icons-material/MoreVert';
import {Grid}            from "@mui/material";

const GENRE_DELIMITER = ', '

const MovieTile = ({imageUrl, title, releaseYear, genres}) => {
    const [genreRow, _] = useState(genres.join(GENRE_DELIMITER))
    const popupState    = usePopupState({variant: 'popover', popupId: 'demoMenu'})
    const menuBtnStyles = {
        backgroundColor: '#2A202D',
        width          : '36px',
        minWidth       : '36px',
        height         : '36px',
        borderRadius   : '50%'
    }
    return (
        <Grid className={styles.MovieTile}
              xs={3}
              container
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{xs: 'column', sm: 'row'}}
              data-testid="MovieTile"
        >
            <Grid xs={12}>
                <div className={styles.MovieMenu}>
                    <Button variant="text"
                            style={menuBtnStyles}
                            data-testid="MovieContextMenuButton"
                            {...bindTrigger(popupState)}>
                        <MoreVertIcon sx={{color: "#ffffff"}}/>
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <div className={styles.MovieMenuContext}>
                            <MenuItem className={styles.MovieMenuItem}
                                      sx={{'&:hover': {backgroundColor: "#F65261"}}}
                                      onClick={popupState.close}>
                                <EditIcon/><span>Edit</span>
                            </MenuItem>
                            <MenuItem className={styles.MovieMenuItem}
                                      sx={{'&:hover': {backgroundColor: "#F65261"}}}
                                      onClick={popupState.close}>
                                <DeleteIcon/><span>Delete</span>
                            </MenuItem>
                        </div>
                    </Menu>
                </div>
                <img src={imageUrl} alt={title}/>
            </Grid>
            <Grid xs={4} className={styles.Title}>{title}</Grid>
            <Grid xs={6} className={styles.ReleaseYear}><span>{releaseYear}</span></Grid>
            <Grid xs={8} className={styles.Genres}>{genreRow}</Grid>
        </Grid>
    )
};

MovieTile.propTypes = {
    imageUrl   : PropTypes.string.isRequired,
    title      : PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genres     : PropTypes.arrayOf(PropTypes.string).isRequired
};

MovieTile.defaultProps = {};

export default MovieTile;
