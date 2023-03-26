import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline                  from '@mui/material/CssBaseline';
import styles                       from './App.module.css';
import Header                       from "./components/Header/Header";
import GenreSelect                  from "./components/GenreSelect/GenreSelect";
import {Container, Grid}            from "@mui/material";
import ToolBar                      from "./components/ToolBar/ToolBar";

const darkTheme = createTheme({
                                  palette: {
                                      mode: 'dark',
                                  },
                              });

function App() {

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Container className={styles.App} fixed>
                <Header/>
                <ToolBar>
                    <GenreSelect genreList={['All', 'Comedy', 'Drama', 'Romance']}
                                 activeGenre="Comedy"
                                 onSelect={genre => console.log('genre was selected: ', genre)}/>
                </ToolBar>
            </Container>
        </ThemeProvider>
    )
}

export default App;
