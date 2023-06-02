/* eslint-disable */
import MovieTile from './MovieTile';
import avengersUrl from './avengers.stories.png';
import inceptionUrl from './inception.stories.png';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import appStyles from '../MovieListPage/MovieListPage.module.css';
import { Container, Grid } from '@mui/material';
import '../../assets/fonts/montserrat.css';
import { darkTheme } from '../../constants/theme';

export default {
  title: 'Movies/MovieTile',
  component: MovieTile,
  parameters: {
    backgrounds: {
      default: 'content',
    },
  },
};

const Template = args => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Container className={appStyles.movieListPage} fixed>
      <MovieTile {...args} />
    </Container>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.story = {
  name: 'Single genre',
  args: {
    movie: {
      poster_path: inceptionUrl,
      title: 'Inception',
      release_date: '2003-10-18',
      genres: ['Action'],
    },
  },
};

export const MultiGenres = Template.bind({});
MultiGenres.story = {
  name: 'Multiple genres',
  args: {
    movie: {
      poster_path: avengersUrl,
      title: 'Avengers',
      release_date: '2004-12-01',
      genres: ['Action', 'Adventure'],
    },
  },
};
