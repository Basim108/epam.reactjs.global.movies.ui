/* eslint-disable */
import MovieTile from './MovieTile';
import avengersUrl from './avengers.stories.png';
import inceptionUrl from './inception.stories.png';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styles from '../../App.module.css';
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
    <Container className={styles.app} fixed>
      <Grid xs={3} item container>
        <MovieTile {...args} />
      </Grid>
    </Container>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.story = {
  name: 'Single genre',
  args: {
    imageUrl: inceptionUrl,
    title: 'Inception',
    releaseYear: 2003,
    genres: ['Action'],
  },
};

export const MultiGenres = Template.bind({});
MultiGenres.story = {
  name: 'Multiple genres',
  args: {
    imageUrl: avengersUrl,
    title: 'Avengers',
    releaseYear: 2004,
    genres: ['Action', 'Adventure'],
  },
};
