import styles     from './Header.module.css';
import SearchForm from "../SearchForm/SearchForm";
import {Grid}     from "@mui/material";

const Header = () => {
    return (
        <Grid xs={12} container className={styles.Header} data-testid="Header">
            <Grid xs={12} justify-content-between mt={2}>
                <div className={styles.Logo}>netflix<span>roulette</span></div>
            </Grid>
            <Grid xs={12} ml={13}>
                <div className={styles.Title}>Find Your Movie</div>
                <SearchForm onSearch={pattern => console.log('start searching for: ', pattern)}/>
            </Grid>
        </Grid>
    )
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
