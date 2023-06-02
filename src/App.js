import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from './constants/theme';
import MovieListPage from './components/MovieListPage/MovieListPage';

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <MovieListPage />
  </ThemeProvider>
);

export default App;
