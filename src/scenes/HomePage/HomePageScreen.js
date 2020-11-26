import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './index.module.scss';
import SideContent from './SideContent';
import MainContent from './MainContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { BrowserView, MobileView } from 'react-device-detect';
import { Button, makeStyles, SwipeableDrawer } from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#152a38',
  },
  btn: {
    margin: '1rem',
    borderRadius: '100rem',
  },
});

const HomePageScreen = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  return (
    <div>
      <BrowserView>
        <div className={styles.quoteContainer}>
          <span>“Struggle is the enemy, but weed is the remedy.”</span>
        </div>
      </BrowserView>
      <MobileView>
        <AppBar
          classes={{
            root: classes.root,
          }}
          position='static'>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='primary'
              onClick={() => setDrawer(true)}
              aria-label='menu'>
              <MenuIcon />
            </IconButton>
            <Typography color='primary' variant='h6'>
              Home
            </Typography>
          </Toolbar>
        </AppBar>
      </MobileView>
      <div className={styles.pageCont}>
        <BrowserView>
          <div className={styles.sideCont}>
            <SideContent />
          </div>
        </BrowserView>
        <MobileView>
          <SwipeableDrawer
            classes={{
              paper: classes.root,
            }}
            color='secondary'
            anchor='left'
            onClose={() => setDrawer(false)}
            open={drawer}>
            <Button
              classes={{
                root: classes.btn,
              }}
              onClick={() => setDrawer(false)}
              color='secondary'
              variant='contained'
              endIcon={<CloseRoundedIcon />}>
              Close
            </Button>
            <SideContent closeDrawer={setDrawer} />
          </SwipeableDrawer>
        </MobileView>
        <div className={styles.MainContent}>
          <MainContent />
        </div>
      </div>
      {/* <Grid container justify="center" >
        <Grid item xs={4}> */}
      {/* </Grid> */}
      {/* <Grid item xs={8}> */}
      {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
};

HomePageScreen.propTypes = {};

export default HomePageScreen;
