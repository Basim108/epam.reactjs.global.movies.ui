import {useState} from 'react';
import PropTypes  from 'prop-types';
import styles     from './SearchForm.module.css';

const SearchForm = (props) => {
    const [query, setQuery] = useState(props.query)
    const onInputKeyPress   = (e) => e.key === 'Enter' && props.onSearch && props.onSearch(query)
    return <label className={styles.SearchForm}>
        <input type="text"
               value={query}
               placeholder="What do you want to watch?"
               onChange={e => setQuery(e.target.value)}
               onKeyDown={onInputKeyPress}
        />
        <button onClick={() => props.onSearch && props.onSearch(query)}>Search</button>
    </label>
}

SearchForm.propTypes = {
    query   : PropTypes.string,
    onSearch: PropTypes.func
};

SearchForm.defaultProps = {
    query   : '',
    onSearch: undefined
};

export default SearchForm;
