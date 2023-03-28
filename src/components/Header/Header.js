import styles           from './Header.module.css';
import SearchForm       from "../SearchForm/SearchForm";
import {Grid}           from "@mui/material";
import SearchViewButton from "../SearchViewButton/SearchViewButton";
import MovieDetails     from "../MovieDetails/MovieDetails";
import PropTypes        from "prop-types";
import moviesBgImg      from "../../assets/img/header.png";

const searchViewBgStyle = {
    backgroundColor: 'black',
    backgroundImage: `url(${moviesBgImg})`
}
const detailsViewBgStyle = {
    backgroundColor: '#232323',
    backgroundImage: 'none'
}

const Header = ({isSearchView, isMovieDetailsView, onSearchActivate}) => {
    const headerStyle = isSearchView ? searchViewBgStyle : detailsViewBgStyle 
    return (
        <Grid xs={12} container item={true}
              style={{...headerStyle}}
              className={styles.Header} data-testid="Header">
            <Grid xs={12} mt={2} container justifyContent="space-between" item={true}>
                <Grid ml={4} xs={2} item={true} className={styles.Logo}>
                    netflix<span>roulette</span>
                </Grid>
                {isMovieDetailsView && <SearchViewButton onClick={onSearchActivate}/>}
            </Grid>
            {isSearchView && <SearchForm onSearch={pattern => console.log('start searching for: ', pattern)}/>}
            {isMovieDetailsView && <MovieDetails info={{...testMovieDetails}}/>}
        </Grid>
    )
}

Header.propTypes = {
    isSearchView      : PropTypes.bool,
    isMovieDetailsView: PropTypes.bool,
    onSearchActivate  : PropTypes.func
};

Header.defaultProps = {
    isSearchView      : true,
    isMovieDetailsView: false
};

export default Header;


const testMovieDetails = {
    "id"         : 181808,
    "title"      : "Star Wars: The Last Jedi",
    "tagline"    : "The Saga Continues",
    "voteAverage": 7.1,
    "vote_count" : 4732,
    "releaseYear": '2017',
    "imageUrl"   : "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    "overview"   : "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    "budget"     : 200000000,
    "revenue"    : 1325937250,
    "genres"     : [
        "Fantasy",
        "Adventure",
        "Science Fiction"
    ],
    "runtime"    : '2h 32min'
}