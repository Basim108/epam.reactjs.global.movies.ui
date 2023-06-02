/* eslint-disable */
import MovieCount from './MovieCount';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../../constants/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import styles from '../MovieListPage/MovieListPage.module.css';

export default {
  title: 'Movies/MovieCount',
  component: MovieCount,
  parameters: {
    backgrounds: {
      default: 'content',
    },
  },
};

const Template = args => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Container className={styles.movieListPage} fixed>
      <MovieCount {...args} />
    </Container>
  </ThemeProvider>
);
export const Default = Template.bind({});
Default.story = {
  name: 'default',
};

export const SampleValue = Template.bind({});
SampleValue.story = {
  name: 'sample value',
  args: {
    count: 39,
  },
};
