import styles    from './ToolBar.module.css';
import {Grid}    from "@mui/material";

const ToolBar = ({children}) => (
  <Grid mt={1} xs={12} container item={true}
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: 'column', sm: 'row' }} 
        className={styles.ToolBar}
        data-testid="ToolBar">
      {children}
  </Grid>
);
export default ToolBar;
