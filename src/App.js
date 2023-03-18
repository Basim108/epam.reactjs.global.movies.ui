import 'bootstrap/dist/css/bootstrap.min.css';
import styles      from './App.module.css';
import Header      from "./components/Header/Header";
import GenreSelect from "./components/GenreSelect/GenreSelect";

function App() {
    return (
        <div className={styles.App + ' container'}>
            <Header/>
            <GenreSelect genreList={['All', 'Comedy', 'Drama', 'Romance']} 
                         activeGenre="Comedy" 
                         onSelect={genre => console.log('genre was selected: ', genre)}/>
        </div>
    )
}

export default App;
