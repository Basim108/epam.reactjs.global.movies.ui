import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styles from './App.module.css';
import Header from './components/Header/Header';
import GenreSelect from './components/GenreSelect/GenreSelect';
import { Container } from '@mui/material';
import ToolBar from './components/ToolBar/ToolBar';
import SortControl from './components/SortControl/SortControl';
import { useState } from 'react';
import { RELEASE_DATE } from './components/SortControl/constant';
import { darkTheme } from './constants/theme';

function App() {
  const [isSearchView, setIsSearchView] = useState(false);
  const [isMovieDetailsView, setIsMovieDetailsView] = useState(true);
  const [activeGenre, setActiveGenre] = useState('Comedy');

  const searchActivateHandler = () => {
    console.log('change view to search');
    setIsSearchView(() => true);
    setIsMovieDetailsView(() => false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container className={styles.app} fixed>
        <Header isSearchView={isSearchView} isMovieDetailsView={isMovieDetailsView} onSearchActivate={searchActivateHandler} />
        <ToolBar>
          <GenreSelect
            genreList={['All', 'Comedy', 'Drama', 'Romance']}
            activeGenre={activeGenre}
            onSelect={genre => setActiveGenre(genre)}
          />
          <SortControl onChange={by => console.log('sort by ', by)} sortBy={RELEASE_DATE} />
        </ToolBar>
      </Container>
    </ThemeProvider>
  );
}

export default App;
