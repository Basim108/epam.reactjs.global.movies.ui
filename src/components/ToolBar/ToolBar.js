import React     from 'react';
import styles    from './ToolBar.module.css';
import {Grid}    from "@mui/material";

const ToolBar = ({children}) => (
  <Grid xs={12} container item={true}
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: 'column', sm: 'row' }} 
        mt={1}
        alignItems="center"
        className={styles.ToolBar}
        data-testid="ToolBar">
      {children}
  </Grid>
);

export default ToolBar;
