/* eslint-disable */
import Dialog from './Dialog';
import appStyles from '../../App.module.css';
import headerStyles from '../Header/Header.module.css';
import { Container, Grid } from '@mui/material';
import React from 'react';
import '../../assets/fonts/montserrat.css';

export default {
  title: 'Helpers/Dialog',
  component: Dialog,
  argTypes: {
    title: {
      type: 'string',
      description: 'title of a dialog',
    },
    onClose: {
      type: 'function',
      description: 'a callback function that will be invoked when a user closes a dialog with a clicking on close button or pressing Esc.',
    },
    submitText: {
      type: 'string',
      description: 'caption of submit button',
      defaultValue: 'Submit',
    },
    onSubmit: {
      type: 'function',
      description: 'a required callback function that will be invoked when a user submits a dialog form.',
    },
    resetText: {
      type: 'string',
      description: 'caption of reset button',
      defaultValue: 'Reset',
    },
    onReset: {
      type: 'function',
      description:
        'an optional callback function that will be invoked when a user clicks on reset button. If not passed then reset button will not be rendered.',
    },
  },
  parameters: {
    backgrounds: {
      default: 'header',
    },
  },
};

const Template = args => {
  return (
    <Container className={appStyles.App} fixed>
      <Grid xs={12} container className={headerStyles.Header} item={true}>
        <Dialog {...args}>{args.children}</Dialog>
      </Grid>
    </Container>
  );
};
export const Default = Template.bind({});
Default.story = {
  name: 'Add Movie Dialog',
  args: {
    title: 'Add Movie',
    onClose: () => console.log('dialog closed!'),
    onReset: () => console.log('dialog reset!'),
    resetText: 'Reset',
    submitText: 'Submit',
    onSubmit: () => console.log('dialog submitted!'),
    children: 'some content. look at MovieForm component',
  },
};

export const Delete = Template.bind({});
Delete.story = {
  name: 'Delete Dialog',
  args: {
    title: 'Delete Movie',
    onClose: () => console.log('dialog closed!'),
    submitText: 'Confirm',
    onSubmit: () => console.log('dialog submitted!'),
    onReset: null,
    children: 'Are you sure you want to delete this movie?',
  },
};
