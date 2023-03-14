import React, {useCallback, useState} from 'react';
import PropTypes                      from 'prop-types';
import styles                         from './SearchForm.module.css';

const SearchForm = (props) => {
    const [query, setQuery] = useState(props.query)
    const onQueryChange     = useCallback(e => setQuery(e.target.value),
                                          [query])
    const onSubmit          = useCallback(() => props.onSearch && props.onSearch(query),
                                          [query])
    const onInputKeyPress   = useCallback((e) => e.key === 'Enter' && props.onSearch && props.onSearch(query),
                                          [query])
    return <label className={styles.SearchForm} data-testid="SearchForm">
        <input type="text"
               value={query}
               placeholder="What do you want to watch?"
               onChange={onQueryChange}
               onKeyDown={onInputKeyPress}
        />
        <button onClick={onSubmit}>Search</button>
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
