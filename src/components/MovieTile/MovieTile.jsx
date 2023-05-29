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

const MovieTile = ({ movie, onClick }) => {
  const releaseYear = movie.release_date.slice(0, 4);
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

// const ExampleMovieInfo = {
//     "id": 337167,
//     "title": "Fifty Shades Freed",
//     "tagline": "Don't miss the climax",
//     "vote_average": 6.1,
//     "vote_count": 1195,
//     "release_date": "2018-02-07",
//     "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
//     "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
//     "budget": 55000000,
//     "revenue": 136906000,
//     "genres": [
//         "Drama",
//         "Romance"
//     ],
//     "runtime": 106
// };
