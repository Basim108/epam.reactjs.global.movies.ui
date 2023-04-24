/* eslint-disable */
import SortControl from './SortControl';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { RELEASE_DATE, TITLE } from './constant';

export default {
  title: 'Movies/SortControl',
  component: SortControl,
  argTypes: {
    sortBy: {
      type: 'string',
      description: 'Initial sort by value',
      options: [RELEASE_DATE, TITLE],
      control: { type: 'radio' },
    },
    onChange: {
      type: 'function',
      description: 'A callback function that will be invoked when a user changes a sorting by value',
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Template = args => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Container fixed>
      <SortControl {...args} />
    </Container>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.story = {
  name: 'default',
  args: {
    sortBy: TITLE,
    onChange: sortBy => console.log(`sorting by is changed to "${sortBy}"`),
  },
};
