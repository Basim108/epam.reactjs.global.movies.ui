import SearchIcon         from '@mui/icons-material/Search'
import styles             from './SearchViewButton.module.css';
import {Grid, IconButton} from "@mui/material";
import PropTypes          from 'prop-types';

const SearchViewButton = ({onClick}) => (
    <Grid xs={2} mr={2} item={true} container alignItems="center" justifyContent="end"
          className={styles.SearchViewButton}
          data-testid="SearchViewButton">
        <IconButton onClick={onClick} color="secondary" aria-label="add an alarm">
            <SearchIcon/>
        </IconButton>
    </Grid>
);

SearchViewButton.propTypes = {
    onClick: PropTypes.func
};

export default SearchViewButton;
