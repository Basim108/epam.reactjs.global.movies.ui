import GenreSelect from './GenreSelect';

export default {
  title: 'Movies/GenreSelect',
  component: GenreSelect,
  argTypes: {
    genreList: {
      type: 'arrayOfStrings',
      description: 'array of genre names.',
      defaultValue: ['All'],
    },
    activeGenre: {
      type: 'string',
      description: 'Genre name that has to be selected by default. By default will take the first item of genreList array.',
    },
    onSelect: {
      type: 'function',
      description:
        'A callback function that will be invoked when a user selects a specific genre. Selected genre name will be passed as an argument.',
    },
  },
  parameters: {
    backgrounds: {
      default: 'content',
    },
  },
};

const Template = args => <GenreSelect {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Initialized = Template.bind({});
Initialized.args = {
  genreList: ['All', 'Documentary', 'Comedy', 'Horror', 'Crime', 'Romance'],
  activeGenre: 'Documentary',
};
