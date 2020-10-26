import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../card';
import SearchIcon from '../../assets/icons/Search.svg';
import { FormControl, MenuItem, Select, withStyles } from '@material-ui/core';
import styles from './index.module.scss';

const StyledSelect = withStyles({
  root: {
    marginLeft: '1rem',
  },
  icon: {
    fill: '#4b5e6a',
  },
  select: {
    color: '#d1d4c9',
  },
})(Select);

const Header = () => {
  return (
    <Grid
      container
      direction='row'
      justify='flex-start'
      alignItems='stretch'
      spacing={2}>
      <Grid item xs={12} md={9}>
        <Card>
          <div className={styles.seacrhComp}>
            <img alt='' src={SearchIcon} />
            <input
              placeholder='Search Product...'
              className={styles.inputtransparent}></input>
          </div>
        </Card>
      </Grid>
      <Grid item xs={4} md={3}>
        <Card>
          <FormControl fullWidth={true}>
            <StyledSelect
              placeholder='Sort By...'
              disableUnderline={true}
              defaultValue={0}
              fullWidth={true}>
              <MenuItem value={0}>None</MenuItem>
            </StyledSelect>
          </FormControl>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Header;
