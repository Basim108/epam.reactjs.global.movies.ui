import 'bootstrap/dist/css/bootstrap.min.css';
import styles      from './App.module.css';
import Header      from "./components/Header/Header";
import Counter     from "./components/Counter/Counter";
import GenreSelect from "./components/GenreSelect/GenreSelect";

function App() {
    return (
        <div className={styles.App + ' container'}>
            <div className="row">
                <div className="col"><Counter initialValue={0}/></div>
            </div>
            <Header/>
            <GenreSelect genreList={['All', 'Comedy', 'Drama', 'Romance']} 
                         activeGenre="Comedy" 
                         onSelect={genre => console.log('genre was selected: ', genre)}/>
        </div>
    )
}

export default App;
