import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../card';
import SearchIcon from '../../assets/icons/Search.svg';
import { FormControl, MenuItem, Select, withStyles } from '@material-ui/core';
import styles from './index.module.scss';
import PropTypes from 'prop-types';

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

const Header = ({ onSearch, onSort }) => {
  const [searchValue, setSearchValue] = useState('');
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
            <img
              onClick={() => onSearch(searchValue)}
              alt=''
              src={SearchIcon}
            />
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyUp={() => onSearch(searchValue)}
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
              onChange={(e) => onSort(e.target.value)}
              fullWidth={true}>
              <MenuItem value={0}>Sort By Name</MenuItem>
              <MenuItem value={1}>Sort By Price Low</MenuItem>
              <MenuItem value={2}>Sort By Price High</MenuItem>
            </StyledSelect>
          </FormControl>
        </Card>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default Header;
