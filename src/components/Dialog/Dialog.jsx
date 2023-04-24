import styles from './Dialog.module.css';
import { createPortal } from 'react-dom';
import { Box, Container, Grid, IconButton } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const Dialog = ({ children, title, onClose, submitText, onSubmit, resetText, onReset }) => {
  return (
    <>
      {createPortal(
        <Box sx={{ flexGrow: 1 }} className={styles.modal} data-testid="Dialog">
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container fixed>
              <Grid xs={12} container justifyContent="end" item={true}>
                <IconButton onClick={onClose} data-testid="CloseDialogBtn">
                  {' '}
                  <CloseIcon fontSize="large" />{' '}
                </IconButton>
              </Grid>
              <Grid xs={12} item={true} className={styles.title}>
                {title}
              </Grid>
              <Grid xs={12} item={true}>
                {children}
              </Grid>
              <Grid xs={12} item={true} className={styles.toolBar} container justifyContent="end">
                {onReset && (
                  <Button variant="outlined" size="large" color="error" onClick={onReset}>
                    {resetText}
                  </Button>
                )}
                <Button variant="contained" size="large" color="error" onClick={onSubmit}>
                  {submitText}
                </Button>
              </Grid>
            </Container>
          </ThemeProvider>
        </Box>,
        document.body,
      )}
    </>
  );
};

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  submitText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  resetText: PropTypes.string,
  onReset: PropTypes.func,
  onClose: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
  submitText: 'Submit',
  resetText: 'Reset',
};

export default Dialog;
