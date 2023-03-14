import {useCallback} from 'react';
import styles        from './Header.module.css';
import SearchForm    from "../SearchForm/SearchForm";

const Header = () => {
    const onSearchHandler = useCallback(pattern => console.log('start searching for: ', pattern), [])
    return (
        <div className={styles.Header + ' row'}>
            <div className="container">
                <div className="row justify-content-between mt-3 mb-5">
                    <div className={styles.logo + ' col'}>netflix<span>roulette</span></div>
                    <div className="col"></div>
                </div>
                <div className="row justify-content-around m-5">
                    <div className={styles.title + ' col'}>Find Your Movie</div>
                </div>
                <div className="row justify-content-center m-5">
                    <div className="col">
                        <SearchForm onSearch={onSearchHandler}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
