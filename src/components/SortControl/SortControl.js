import styles      from './SortControl.module.css'
import {Grid}      from "@mui/material"
import MenuItem    from '@mui/material/MenuItem';
import Select      from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import {useState}  from "react";
import PropTypes   from "prop-types";

export const RELEASE_DATE = 'Release Date'
export const TITLE        = 'Title'

const SortControl = ({value, onChange}) => {
    const [selectedItem, setSelectedItem] = useState(value)
    const handleChange                    = (e) => {
        setSelectedItem(e.target.value)
        if (onChange) {
            onChange(e.target.value)
        }
    }

    return (
        <Grid xs={4} className={styles.sortControl}
              data-testid="SortControl"
              container item
              alignItems="center"
              justifyContent="end"
              flexDirection={{xs: 'column', sm: 'row'}}
        >
            <span>Sort by</span>
            <FormControl variant="standard" size="small" style={{marginLeft: '20px'}}>
                <Select
                    display="inline-block"
                    id="sorted-by-select"
                    value={selectedItem}
                    role="select"
                    label="sorted-by-select"
                    sx={{m: 1, mr: 3, minWidth: 146}}
                    onChange={handleChange}
                >
                    <MenuItem value={RELEASE_DATE}>{RELEASE_DATE}</MenuItem>
                    <MenuItem value={TITLE}>{TITLE}</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    )
}

SortControl.propTypes = {
    value   : PropTypes.oneOf([RELEASE_DATE, TITLE]),
    onChange: PropTypes.func
}

SortControl.defaultProps = {
    value: RELEASE_DATE,
}

export default SortControl;
