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
import {Grid} from "@mui/material";
import MovieForm from "../MovieForm/MovieForm";
import Dialog from "../Dialog/Dialog";

const GENRE_DELIMITER = ', '

const MovieTile = ({info, genreList}) => {
    console.log('movie tile', info)
    const [title, setTitle] = useState(info.title)
    const [imageUrl, setImageUrl] = useState(info.imageUrl)
    const [releaseYear, setReleaseYear] = useState(info.releaseDate.year())
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)
    const [showEditDialog, setShowEditDialog] = useState(false)
    const [genreRow, setGenreRow] = useState(info.genre.join(GENRE_DELIMITER))
    const popupState = usePopupState({variant: 'popover', popupId: 'demoMenu'})
    const menuBtnStyles = {
        backgroundColor: '#2A202D',
        width: '36px',
        minWidth: '36px',
        height: '36px',
        borderRadius: '50%'
    }
    const editCloseHandler = () => setShowEditDialog(false)
    const deleteCloseHandler = () => setShowDeleteDialog(false)
    const editSubmitHandler = updatedInfo => {
        setShowEditDialog(false)
        setTitle(updatedInfo.title)
        setImageUrl(updatedInfo.imageUrl)
        setReleaseYear(updatedInfo.releaseDate.year())
        setGenreRow(updatedInfo.genre.join(GENRE_DELIMITER))
    }
    const deleteSubmitHandler = () => {
        setShowDeleteDialog(false)
    }

    return (
        <Grid className={styles.MovieTile}
              xs={3} item={true}
              container
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{xs: 'column', sm: 'row'}}
              data-testid="MovieTile"
        >
            <Grid xs={12} item={true}>
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
                                      onClick={() => {
                                          popupState.close()
                                          setShowEditDialog(true)
                                      }}>
                                <EditIcon/><span>Edit</span>
                            </MenuItem>
                            <MenuItem className={styles.MovieMenuItem}
                                      sx={{'&:hover': {backgroundColor: "#F65261"}}}
                                      onClick={() => {
                                          popupState.close()
                                          setShowDeleteDialog(true)
                                      }}>
                                <DeleteIcon/><span>Delete</span>
                            </MenuItem>
                        </div>
                    </Menu>
                </div>
                <img src={imageUrl} alt={title}/>
            </Grid>
            <Grid xs={4} item={true} className={styles.Title}>{title}</Grid>
            <Grid xs={6} item={true} className={styles.ReleaseYear}><span>{releaseYear}</span></Grid>
            <Grid xs={8} item={true} className={styles.Genres}>{genreRow}</Grid>
            <MovieForm info={info} genreList={genreList}
                       onSubmit={editSubmitHandler}
                       onClose={editCloseHandler}
                       isVisible={showEditDialog}/>
            {showDeleteDialog && (
                <Dialog title="Delete Movie" onSubmit={deleteSubmitHandler} onClose={deleteCloseHandler}
                        submitText="Confirm">
                    Are you sure you want to delete this movie?
                </Dialog>
            )}
        </Grid>
    )
};

MovieTile.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MovieTile;
