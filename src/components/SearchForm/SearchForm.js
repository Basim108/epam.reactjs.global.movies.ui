import {useState} from 'react';
import PropTypes  from 'prop-types';
import styles     from './SearchForm.module.css';
import {Grid}     from "@mui/material";

const SearchForm = (props) => {
    const [query, setQuery] = useState(props.query)
    const onInputKeyPress   = (e) => e.key === 'Enter' && query && props.onSearch(query)
    return (
        <Grid xs={12} ml={13} item={true}>
            <div className={styles.Title}>Find Your Movie</div>
            <label className={styles.SearchForm} data-testid="SearchForm">
                <input type="text"
                       value={query}
                       placeholder="What do you want to watch?"
                       onChange={e => setQuery(e.target.value?.trim() ?? '')}
                       onKeyDown={onInputKeyPress}
                />
                <button onClick={() => props.onSearch(query)}>Search</button>
            </label>
        </Grid>
    )
}

SearchForm.propTypes = {
    query   : PropTypes.string,
    onSearch: PropTypes.func.isRequired
};

SearchForm.defaultProps = {
    query   : '',
    onSearch: undefined
};

export default SearchForm;
