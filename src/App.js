import 'bootstrap/dist/css/bootstrap.min.css';
import styles                 from './App.module.css';
import Header                 from "./components/Header/Header";
import Counter                from "./components/Counter/Counter";
import GenreSelect            from "./components/GenreSelect/GenreSelect";
import {useCallback, useMemo} from "react";

function App() {
    const genreList       = useMemo(() => ["Comedy", "Drama", "Romance"], [])
    const onGenreSelected = useCallback(genre => console.log('genre was selected: ', genre), [])
    return (
        <div className={styles.App + ' container'}>
            <div className="row">
                <div className="col"><Counter initialValue={0}/></div>
            </div>
            <Header/>
            <GenreSelect genreList={genreList} activeGenre="Comedy" onSelect={onGenreSelected}/>
        </div>
    )
}

export default App;
