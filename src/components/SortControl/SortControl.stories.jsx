/* eslint-disable */
import SortControl, { RELEASE_DATE, TITLE } from './SortControl';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';

export default {
  title: 'Movies/SortControl',
  component: SortControl,
  argTypes: {
    value: {
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
};
