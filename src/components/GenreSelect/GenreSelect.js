import {useState} from 'react';
import PropTypes  from 'prop-types';
import styles     from './GenreSelect.module.css';


const GenreSelect = (props) => {
    const buildClasses = (title, active) => styles.genre + (title === active
                                                            ? ' ' + styles.selectedGenre
                                                            : '')

    const [activeGenre, setActiveGenre] = useState(props.activeGenre)
    const [genreList, setGenreList]     = useState(props.genreList
                                                        .map(title => ({
                                                            title, className: buildClasses(title, activeGenre)
                                                        })))
    const selectGenre                   = genre => {
        if (genre === activeGenre) {
            return
        }
        setActiveGenre(genre)
        setGenreList(genreList.map(info => {
            info.className = buildClasses(info.title, genre)
            return info
        }))
        props.onSelect(genre)
    }

    return (
        <div className={styles.GenreSelect + ' row mt-2'} data-testid="GenreSelect">
            <div className="col">
                {genreList.map(info =>
                                   <span key={info.title}
                                         className={info.className}
                                         onClick={() => selectGenre(info.title)}
                                   > {info.title} </span>)}
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
