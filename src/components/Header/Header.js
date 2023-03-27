import styles     from './Header.module.css';
import SearchForm from "../SearchForm/SearchForm";
import {Grid}     from "@mui/material";

const Header = () => {
    return (
        <Grid xs={12} container className={styles.Header} data-testid="Header" item={true}>
            <Grid xs={12} mt={2} item={true}>
                <div className={styles.Logo}>netflix<span>roulette</span></div>
            </Grid>
            <Grid xs={12} ml={13} item={true}>
                <div className={styles.Title}>Find Your Movie</div>
                <SearchForm onSearch={pattern => console.log('start searching for: ', pattern)}/>
            </Grid>
        </Grid>
    )
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
