/* eslint-disable */
import GenreRow from './GenreRow';

export default {
  title: "Movies/GenreRow",
  component: GenreRow
};

const Template = (args) => <GenreRow {...args}/>;
export const Default = Template.bind({});
Default.story = {
  name: 'default',
  args: {
    genres: ['Comedy', 'Drams']
  }
}
