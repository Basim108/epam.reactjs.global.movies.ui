import {useMemo, useRef, useState} from 'react';
import PropTypes                   from 'prop-types';
import styles                      from './GenreSelect.module.css';

export const ALL_GENRE = 'All'

const GenreSelect = (props) => {
    let [activeGenre, setActiveGenre] = useState(props.activeGenre || ALL_GENRE)
    const genreList                   = useMemo(() => [ALL_GENRE, ...props.genreList], [props.genreList])

    const genresRef   = useRef(null);
    const getMap      = () => genresRef.current || (genresRef.current = new Map());
    const selectGenre = genre => {
        if (genre === activeGenre) {
            return
        }
        const map               = getMap()
        const currentSelectedEl = map.get(activeGenre)
        const nextSelectedEl    = map.get(genre)
        currentSelectedEl.classList.remove(styles.selectedGenre)
        nextSelectedEl.classList.add(styles.selectedGenre)
        setActiveGenre(genre)
        if (props.onSelect) {
            props.onSelect(genre)
        }
    }

    return (
        <div className={styles.GenreSelect + ' row mt-2'}>
            <div className="col">
                {genreList.map(genre => <span className={styles.genre + (genre === activeGenre
                                                                         ? ' ' + styles.selectedGenre
                                                                         : '')}
                                              ref={el => el
                                                         ? getMap().set(genre, el)
                                                         : getMap().delete(genre)}
                                              onClick={() => selectGenre(genre)}
                                              key={genre}>{genre}</span>)}
            </div>
        </div>
    )
}

GenreSelect.propTypes = {
    genreList  : PropTypes.arrayOf(PropTypes.string),
    activeGenre: PropTypes.string,
    onSelect   : PropTypes.func
};

GenreSelect.defaultProps = {
    genreList  : [],
    activeGenre: ALL_GENRE,
    onSelect   : undefined
};

export default GenreSelect;
