import SearchForm from './SearchForm';

export default {
  title: 'Movies/SearchForm',
  component: SearchForm,
  argTypes: {
    query: {
      type: 'string',
      description: 'Initial query that search input value will have.',
    },
    onSearch: {
      type: 'function',
      description: 'A callback function that will be invoked when a user requests searching by pressing Enter or clicking on sear button.',
    },
  },
  parameters: {
    backgrounds: {
      default: 'header',
    },
  },
};

const Template = args => <SearchForm {...args} />;
export const Default = Template.bind({});
Default.args = {};

export const Initialized = Template.bind({});
Initialized.args = {
  query: 'Avengers',
};
