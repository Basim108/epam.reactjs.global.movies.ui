import MovieForm from './MovieForm';
import '../../assets/fonts/montserrat.css';
export default {
  title: 'Movies/MovieForm',
  component: MovieForm,
  argTypes: {
    genreList: {
      type: 'arrayOfStrings',
      description: 'array of genre names. will be loaded from a backend',
      options: ['Adventure', 'Documentary', 'Comedy', 'Horror', 'Science Fiction', 'Crime', 'Romance', 'Fantasy'],
    },
  },
  parameters: {
    backgrounds: {
      default: 'header',
    },
  },
};

const Template = args => <MovieForm {...args} />;
export const Default = Template.bind({});
Default.story = {
  name: 'Edit Movie',
  args: {
    genreList: ['Adventure', 'Documentary', 'Comedy', 'Horror', 'Science Fiction', 'Crime', 'Romance', 'Fantasy'],
    isOpen: true,
    info: {
      id: 181808,
      title: 'Star Wars: The Last Jedi',
      rating: 7.1,
      releaseDate: '2018-02-07',
      imageUrl: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
      overview:
        'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
      genre: ['Fantasy', 'Adventure', 'Science Fiction'],
      runtime: '2h 32min',
    },
    onSubmit: info => console.log('updated movie:', info),
  },
};

export const AddMovie = Template.bind({});
AddMovie.story = {
  name: 'Add Movie',
  args: {
    genreList: ['Adventure', 'Documentary', 'Comedy', 'Horror', 'Science Fiction', 'Crime', 'Romance', 'Fantasy'],
    isOpen: true,
    info: {},
    onSubmit: info => console.log('created movie:', info),
  },
};
