import Header from './Header';
import { Container } from '@mui/material';

export default {
  title: 'Movies/Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: 'body',
    },
  },
};

const Template = args => (
  <Container fixed>
    <Header {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.story = {
  name: 'Search View',
  args: {
    isSearchView: true,
    isMovieDetailsView: false,
  },
};

export const MovieDetailsView = Template.bind({});
MovieDetailsView.story = {
  name: 'Movie Details View',
  args: {
    isSearchView: false,
    isMovieDetailsView: true,
  },
};
