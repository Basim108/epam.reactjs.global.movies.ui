import {useRef, useState} from 'react';
import PropTypes          from 'prop-types';
import styles             from './GenreSelect.module.css';


const GenreSelect = (props) => {
    const [activeGenre, setActiveGenre] = useState(props.activeGenre)

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
                {props.genreList.map(genre => {
                    const genreClassName = styles.genre + (genre === activeGenre
                                                           ? ' ' + styles.selectedGenre
                                                           : '')
                    const ref            = el => el
                                                 ? getMap().set(genre, el)
                                                 : getMap().delete(genre)
                    return (<span className={genreClassName}
                                  ref={ref}
                                  onClick={() => selectGenre(genre)}
                                  key={genre}>{genre}</span>)
                })}
            </div>
        </div>
    )
}

GenreSelect.propTypes = {
    genreList  : PropTypes.arrayOf(PropTypes.string).isRequired,
    activeGenre: PropTypes.string.isRequired,
    onSelect   : PropTypes.func.isRequired
};

export default GenreSelect;
