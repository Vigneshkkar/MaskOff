import React from 'react';
// import PropTypes from 'prop-types';
import styles from './index.module.scss';
import SideContent from './SideContent';
import MainContent from './MainContent';

const HomePageScreen = () => {
  return (
    <div>
      <div className={styles.quoteContainer}>
        <span>“Struggle is the enemy, but weed is the remedy.”</span>
      </div>
      <div className={styles.pageCont}>
        <div className={styles.sideCont}>
          <SideContent />
        </div>
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
