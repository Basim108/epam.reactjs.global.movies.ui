import {useState} from 'react';
import PropTypes  from 'prop-types';
import styles     from './GenreSelect.module.css';
import {Grid}     from "@mui/material";


const GenreSelect = (props) => {
    const buildClasses = (title, active) => styles.genre + (title === active
                                                            ? ' ' + styles.selectedGenre
                                                            : '')

    const initialGenreList = props.genreList.length
                             ? props.genreList
                             : ['All']

    const [activeGenre, setActiveGenre] = useState(props.activeGenre || initialGenreList[0])
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
        <Grid xs={8} item={true}
              className={styles.GenreSelect} 
              container
              alignItems="center"
              data-testid="GenreSelect">
            {
                genreList.map(info => <span key={info.title}
                                            className={info.className}
                                            onClick={() => selectGenre(info.title)}
                                            data-genre={info.title}
                              > {info.title} </span>
                )
            }
        </Grid>
    )
}

GenreSelect.propTypes = {
    genreList  : PropTypes.arrayOf(PropTypes.string).isRequired,
    activeGenre: PropTypes.string.isRequired,
    onSelect   : PropTypes.func.isRequired
};

export default GenreSelect;
