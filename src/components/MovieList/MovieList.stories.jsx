/* eslint-disable */
import MovieList from './MovieList';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../../constants/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import appStyles from '../MovieListPage/MovieListPage.module.css';

export default {
  title: 'Movies/MovieList',
  component: MovieList,
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
      <MovieList {...args} />
    </Container>
  </ThemeProvider>
);
export const Default = Template.bind({});
Default.story = {
  name: 'default',
  args: {
    movieList: [
      {
        id: 9003,
        title: 'Hellraiser',
        tagline: "He'll tear your soul apart.",
        vote_average: 7,
        vote_count: 606,
        release_date: '1987-09-11',
        poster_path: 'https://image.tmdb.org/t/p/w500/4nfAhOTlfZUHNorHJXEib7GYFpp.jpg',
        overview:
          "Larry and his wife, Julia move into an old house and discover a hideous creature - the man's half-brother, who is also the woman's former lover - hiding upstairs. Having lost his earthly body to a trio of S&amp;M demons, the Cenobites, Frank, is brought back into existence by a drop of blood on the floor. He soon forces his former mistress to bring him his necessary human sacrifices to complete his body... but the Cenobites won't be happy about this.",
        budget: 1000000,
        revenue: 14564027,
        genres: ['Horror'],
        runtime: 94,
      },
      {
        id: 10285,
        title: 'Jason Goes to Hell: The Final Friday',
        tagline: 'Evil has finally found a home.',
        vote_average: 4.2,
        vote_count: 239,
        release_date: '1993-08-13',
        poster_path: 'https://image.tmdb.org/t/p/w500/8yLdCrD1Eh6eoGTIIQ4jNBFLkUb.jpg',
        overview:
          "Jason Voorhees, the living, breathing essence of evil, is back for one fierce, final fling! Tracked down and blown to bits by a special FBI task force, everyone now assumes that he's finally dead. But everybody assumes wrong. Jason has been reborn with the bone-chilling ability to assume the identity of anyone he touches. The terrifying truth is that he could be anywhere, or anybody. In this shocking, blood-soaked finale to Jason's carnage-ridden reign of terror, the horrible secret of his unstoppable killing instinct is finally revealed.",
        budget: 3000000,
        revenue: 15938065,
        genres: ['Horror'],
        runtime: 87,
      },
      {
        id: 3036,
        title: "Mary Shelley's Frankenstein",
        tagline: "Be Warned.  It's Alive",
        vote_average: 6.2,
        vote_count: 364,
        release_date: '1994-11-04',
        poster_path: 'https://image.tmdb.org/t/p/w500/uG0YLHdiBuWBv99MLwthucsvKLZ.jpg',
        overview:
          'Based on Mary Shelley\'s novel, "Frankenstein" tells the story of Victor Frankenstein, a promising young doctor who, devastated by the death of his mother during childbirth, becomes obsessed with bringing the dead back to life. His experiments lead to the creation of a monster, which Frankenstein has put together with the remains of corpses. It\'s not long before Frankenstein regrets his actions.',
        budget: 45000000,
        revenue: 112006296,
        genres: ['Drama', 'Horror', 'Science Fiction', 'Romance'],
        runtime: 123,
      },
      {
        id: 9323,
        title: 'Ghost in the Shell',
        tagline: 'It found a voice... Now it needs a body.',
        vote_average: 7.8,
        vote_count: 1049,
        release_date: '1995-11-18',
        poster_path: 'https://image.tmdb.org/t/p/w500/9gC88zYUBARRSThcG93MvW14sqx.jpg',
        overview:
          "In the year 2029, the barriers of our world have been broken down by the net and by cybernetics, but this brings new vulnerability to humans in the form of brain-hacking. When a highly-wanted hacker known as 'The Puppetmaster' begins involving them in politics, Section 9, a group of cybernetically enhanced cops, are called in to investigate and stop the Puppetmaster.",
        budget: 0,
        revenue: 2287714,
        genres: ['Action', 'Animation', 'Science Fiction'],
        runtime: 83,
      },
      {
        id: 768,
        title: 'From Hell',
        tagline: 'Only the legend will survive.',
        vote_average: 6.6,
        vote_count: 1001,
        release_date: '2001-10-19',
        poster_path: 'https://image.tmdb.org/t/p/w500/f3J77Cy3pRSeeN52Pk8oIvgi6IN.jpg',
        overview:
          "Frederick Abberline is an opium-huffing inspector from Scotland Yard who falls for one of Jack the Ripper's prostitute targets in this Hughes brothers adaption of a graphic novel that posits the Ripper's true identity.",
        budget: 35000000,
        revenue: 74558115,
        genres: ['Horror', 'Mystery', 'Thriller'],
        runtime: 122,
      },
      {
        id: 1487,
        title: 'Hellboy',
        tagline: 'From the Dark Side to Our Side.',
        vote_average: 6.5,
        vote_count: 2869,
        release_date: '2004-04-02',
        poster_path: 'https://image.tmdb.org/t/p/w500/3fAWzI9MUosggdGMu7EaDhn44m6.jpg',
        overview:
          'In the final days of World War II, the Nazis attempt to use black magic to aid their dying cause. The Allies raid the camp where the ceremony is taking place, but not before a demon - Hellboy - has already been conjured. Joining the Allied forces, Hellboy eventually grows to adulthood, serving the cause of good rather than evil.',
        budget: 66000000,
        revenue: 99318987,
        genres: ['Fantasy', 'Action', 'Science Fiction'],
        runtime: 122,
      },
      {
        id: 11253,
        title: 'Hellboy II: The Golden Army',
        tagline: 'Saving the world is a hell of a job.',
        vote_average: 6.6,
        vote_count: 1956,
        release_date: '2008-07-11',
        poster_path: 'https://image.tmdb.org/t/p/w500/fFcZqnWDeQsImDAAIyAimc3SGEl.jpg',
        overview:
          'In this continuation to the adventure of the demon superhero, an evil elf breaks an ancient pact between humans and creatures, as he declares war against humanity. He is on a mission to release The Golden Army, a deadly group of fighting machines that can destroy the human race. As Hell on Earth is ready to erupt, Hellboy and his crew set out to defeat the evil prince.',
        budget: 85000000,
        revenue: 160388063,
        genres: ['Adventure', 'Fantasy', 'Science Fiction'],
        runtime: 120,
      },
      {
        id: 16871,
        title: 'Drag Me to Hell',
        tagline: "Christine Brown has a good job, a great boyfriend, and a bright future. But in three days, she's going to hell.",
        vote_average: 6.2,
        vote_count: 1303,
        release_date: '2009-03-15',
        poster_path: 'https://image.tmdb.org/t/p/w500/4trULrbj4AoPLKSiIoQUTm2tPAG.jpg',
        overview:
          "After denying a woman the extension she needs to keep her home, loan officer Christine Brown sees her once-promising life take a startling turn for the worse. Christine is convinced she's been cursed by a Gypsy, but her boyfriend is skeptical. Her only hope seems to lie in a psychic who claims he can help her lift the curse and keep her soul from being dragged straight to hell.",
        budget: 30000000,
        revenue: 90810892,
        genres: ['Horror', 'Thriller'],
        runtime: 99,
      },
      {
        id: 276839,
        title: 'Home Sweet Hell',
        tagline: 'Psycho Wife. Unhappy Life.',
        vote_average: 5,
        vote_count: 214,
        release_date: '2015-03-13',
        poster_path: 'https://image.tmdb.org/t/p/w500/pFKQZliM8kTv0cGSbvOaCfptUHk.jpg',
        overview:
          'Mona and Don’s seemingly perfect suburban bliss is disrupted by a sexy extortionist and Mona will stop at nothing, including killing the competition, to keep her little slice of heaven.',
        budget: 3000000,
        revenue: 0,
        genres: ['Drama', 'Comedy'],
        runtime: 98,
      },
      {
        id: 338766,
        title: 'Hell or High Water',
        tagline: 'Blood always follows money.',
        vote_average: 7.2,
        vote_count: 1745,
        release_date: '2016-08-12',
        poster_path: 'https://image.tmdb.org/t/p/w500/6YOrNBdoXvT8aC5VPLkkN6t5z0V.jpg',
        overview: "A divorced dad and his ex-con brother resort to a desperate scheme in order to save their family's farm in West Texas.",
        budget: 12000000,
        revenue: 37589296,
        genres: ['Crime', 'Drama', 'Thriller', 'Western'],
        runtime: 104,
      },
    ],
  },
};
