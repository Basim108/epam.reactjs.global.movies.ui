import React     from 'react';
import styles    from './ToolBar.module.css';
import {Grid}    from "@mui/material";

const ToolBar = ({children}) => (
  <Grid xs={12} container justifyContent="space-between" mt={1} 
        className={styles.ToolBar} 
        data-testid="ToolBar">
      {children}
  </Grid>
);

export default ToolBar;
