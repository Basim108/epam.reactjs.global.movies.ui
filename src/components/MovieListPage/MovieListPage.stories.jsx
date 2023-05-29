/* eslint-disable */
import MovieListPage from './MovieListPage';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../../constants/theme';
import CssBaseline from '@mui/material/CssBaseline';

export default {
  title: 'Pages/MovieListPage',
  component: MovieListPage,
  parameters: {
    backgrounds: {
      default: 'content',
    },
  },
};

export const Default = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <MovieListPage />
  </ThemeProvider>
);

Default.story = {
  name: 'default',
};
