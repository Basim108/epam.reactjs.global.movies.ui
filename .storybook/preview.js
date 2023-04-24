export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'body',
    values: [
      {
        name: 'header',
        value: '#424242',
      },
      {
        name: 'content',
        value: '#232323',
      },
      {
        name: 'body',
        value: '#E4E4E4',
      },
    ],
  },
};
