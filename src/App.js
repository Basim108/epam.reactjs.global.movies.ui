import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline                  from '@mui/material/CssBaseline';
import styles                       from './App.module.css';
import Header                       from "./components/Header/Header";
import GenreSelect                  from "./components/GenreSelect/GenreSelect";
import {Grid}                       from "@mui/material";

const darkTheme = createTheme({
                                  palette: {
                                      mode: 'dark',
                                  },
                              });

function App() {

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Grid className={styles.App + ' container'}>
                <Header/>
                <GenreSelect genreList={['All', 'Comedy', 'Drama', 'Romance']}
                             activeGenre="Comedy"
                             onSelect={genre => console.log('genre was selected: ', genre)}/>
            </Grid>
        </ThemeProvider>
    )
}

export default App;
