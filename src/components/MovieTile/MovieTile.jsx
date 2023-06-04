import styles from './MovieTile.module.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { bindMenu, bindTrigger, usePopupState } from 'material-ui-popup-state/hooks';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';
import GenreRow from '../GenreRow/GenreRow';
import { getReleaseYear } from '../../shared/releaseDateAdapter';

const MovieTile = ({ movie, onClick }) => {
  const releaseYear = getReleaseYear(movie.release_date);
  const popupState = usePopupState({ variant: 'popover' });
  const closePopupHandler = e => {
    e.stopPropagation();
    popupState.close(e);
  };
  const boundPopupTrigger = bindTrigger(popupState);
  const openPopupHandler = e => {
    e.stopPropagation();
    boundPopupTrigger.onClick(e);
  };
  const movieClickHandler = e => {
    if (e.target.classList.contains('MuiBackdrop-root')) return;
    onClick(movie);
  };

  return (
    <Grid
      className={styles.movieTile}
      xs={3}
      item
      container
      justifyContent="space-between"
      alignItems="center"
      flexDirection={{ xs: 'column', sm: 'row' }}
      data-testid="MovieTile"
      onClick={movieClickHandler}
      data-movie-id={movie.id}
    >
      <Grid xs={12} item>
        <div className={styles.movieMenu}>
          <Button variant="text" data-testid="MovieContextMenuButton" {...boundPopupTrigger} onClick={openPopupHandler}>
            <MoreVertIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <div className={styles.movieMenuContext}>
              <MenuItem className={styles.movieMenuItem} onClick={closePopupHandler}>
                <EditIcon />
                <span>Edit</span>
              </MenuItem>
              <MenuItem className={styles.movieMenuItem} onClick={closePopupHandler}>
                <DeleteIcon />
                <span>Delete</span>
              </MenuItem>
            </div>
          </Menu>
        </div>
        <img src={movie.poster_path} alt={movie.title} onError={e => (e.target.src = 'poster-not-found.png')} />
      </Grid>
      <Grid xs={9} item className={styles.title}>
        {movie.title}
      </Grid>
      <Grid xs={3} item className={styles.releaseYear}>
        <span>{releaseYear}</span>
      </Grid>
      <Grid xs={12} item className={styles.genres}>
        <GenreRow genres={movie.genres} />
      </Grid>
    </Grid>
  );
};

export default MovieTile;
