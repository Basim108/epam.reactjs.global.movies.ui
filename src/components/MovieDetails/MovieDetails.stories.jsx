/* eslint-disable */
import MovieDetails from './MovieDetails';
import { Container, Grid } from '@mui/material';
import appStyles from '../MovieListPage/MovieListPage.module.css';
import '../../assets/fonts/montserrat.css';

export default {
  title: 'Movies/MovieDetails',
  component: MovieDetails,
  parameters: {
    backgrounds: {
      default: 'content',
    },
  },
};

const Template = args => (
  <Container className={appStyles.movieListPage} fixed>
    <Grid xs={12} container className={appStyles.appHeader} item={true}>
      <MovieDetails {...args} />
    </Grid>
  </Container>
);

export const Default = Template.bind({});
Default.story = {
  name: 'Short Overview',
  args: {
    info: {
      id: 181808,
      title: 'Star Wars: The Last Jedi',
      tagline: 'The Saga Continues',
      voteAverage: 7.1,
      vote_count: 4732,
      release_date: '2017-09-23',
      poster_path: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
      overview:
        'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
      budget: 200000000,
      revenue: 1325937250,
      genres: ['Fantasy', 'Adventure', 'Science Fiction'],
      runtime: '2h 32min',
    },
  },
};

export const LongOverview = Template.bind({});
LongOverview.story = {
  name: 'Long Overview',
  args: {
    info: {
      id: 284054,
      title: 'Black Panther',
      tagline: 'Long live the king',
      voteAverage: 7.3,
      vote_count: 3788,
      release_date: '2018-02-1',
      poster_path: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
      overview:
        "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
      budget: 200000000,
      revenue: 1245257672,
      genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
      runtime: '2h 14min',
    },
  },
};
